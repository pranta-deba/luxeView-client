import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortOption, setSortOption] = useState('price-asc');
    const [productsPerPage] = useState(10);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetchProducts();
    }, [searchTerm, priceRange, sortOption, currentPage]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products', {
                params: {
                    search: searchTerm,
                    minPrice: priceRange[0],
                    maxPrice: priceRange[1],
                    sort: sortOption,
                    page: currentPage,
                    limit: productsPerPage,
                },
            });
            setProducts(response.data.products);
            setTotalProducts(response.data.totalProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleFilter = (value) => {
        setPriceRange(value);
        setCurrentPage(1);
    };

    const handleSort = (option) => {
        setSortOption(option);
        setCurrentPage(1);
    };

    const handlePageChange = (direction) => {
        if (direction === 'prev' && currentPage > 1) setCurrentPage(currentPage - 1);
        if (direction === 'next' && currentPage < Math.ceil(totalProducts / productsPerPage)) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div data-aos="fade-up" className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-[#1A1A2E] mb-6">All Products</h1>

                {/* Search Bar */}
                <div className="mb-6 flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="flex-grow px-4 py-2 border-none focus:outline-none"
                    />
                    <button
                        onClick={fetchProducts}
                        className="bg-[#E94560] text-white rounded-e-md px-4 py-3 hover:bg-[#0F3460] focus:outline-none"
                    >
                        <FaSearch />
                    </button>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-[#1A1A2E] mb-4">Price Range</h2>
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        value={priceRange[0]}
                        onChange={(e) => handleFilter([e.target.value, priceRange[1]])}
                        className="w-full"
                    />
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        value={priceRange[1]}
                        onChange={(e) => handleFilter([priceRange[0], e.target.value])}
                        className="w-full mt-2"
                    />
                    <p className="text-gray-600 mt-2">Price: ${priceRange[0]} - ${priceRange[1]}</p>
                </div>

                {/* Sort Options */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-[#1A1A2E] mb-4">Sort By</h2>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <button
                            onClick={() => handleSort('price-asc')}
                            className="bg-[#E94560] text-white px-4 py-2 hover:bg-[#0F3460] focus:outline-none"
                        >
                            Price: Low to High
                        </button>
                        <button
                            onClick={() => handleSort('price-desc')}
                            className="bg-[#E94560] text-white px-4 py-2 hover:bg-[#0F3460] focus:outline-none"
                        >
                            Price: High to Low
                        </button>
                        <button
                            onClick={() => handleSort('date-desc')}
                            className="bg-[#E94560] text-white px-4 py-2 hover:bg-[#0F3460] focus:outline-none"
                        >
                            Date Added: Newest First
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product._id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4" data-aos="fade-up">
                            <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">{product.productName}</h3>
                            <p className="text-gray-600 mb-2">Category: {product.category}</p>
                            <p className="text-[#E94560] font-bold mb-4">${product.price.toFixed(2)}</p>
                            <p className="text-gray-600 mb-2">Ratings: {product.ratings}</p>
                            <a href={`/details/${product._id}`} className="text-[#E94560] hover:underline">See Details</a>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-8">
                    <button
                        onClick={() => handlePageChange('prev')}
                        disabled={currentPage === 1}
                        className="bg-[#E94560] text-white px-4 py-2 rounded-md hover:bg-[#0F3460] focus:outline-none disabled:opacity-50"
                    >
                        <FaArrowLeft />
                    </button>
                    <span className="text-[#1A1A2E]">
                        Page {currentPage}
                    </span>
                    <button
                        onClick={() => handlePageChange('next')}
                        disabled={currentPage >= Math.ceil(totalProducts / productsPerPage)}
                        className="bg-[#E94560] text-white px-4 py-2 rounded-md hover:bg-[#0F3460] focus:outline-none"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
