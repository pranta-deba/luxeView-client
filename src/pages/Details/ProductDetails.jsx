import { useLoaderData } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from "react";
import Loader from "../../components/others/Loader";

const ProductDetails = () => {
    const product = useLoaderData();
    const {
        brand,
        category,
        description,
        price,
        productCreationDateTime,
        productImage,
        productName,
        ratings,
        stock,
    } = product;

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            {product && <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div
                    data-aos="fade-up"
                    className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img
                                src={productImage}
                                alt={productName}
                                className="w-full h-96 object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8">
                            <h2 className="text-3xl font-bold text-[#1A1A2E]">
                                {productName}
                            </h2>
                            <p className="text-lg text-gray-500 mt-2">
                                {description}
                            </p>
                            <div className="mt-4">
                                <span className="text-xl font-semibold text-[#E94560]">
                                    ${price}
                                </span>
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                                <div className="flex items-center">
                                    <FaStar className="text-yellow-500" />
                                    <span className="text-lg text-gray-600 ml-2">
                                        {ratings} / 5
                                    </span>
                                </div>
                                <div className="text-sm text-gray-500">
                                    In Stock: {stock}
                                </div>
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                                <button className="bg-[#1A1A2E] text-white px-6 py-2 rounded-md hover:bg-[#0F3460] transition duration-300">
                                    <FaShoppingCart className="inline-block mr-2" />
                                    Add to Cart
                                </button>
                                <span className="text-sm text-gray-500">
                                    Brand: {brand}
                                </span>
                            </div>
                            <div className="mt-4 text-sm text-gray-500">
                                <p>Category: {category}</p>
                                <p>Released on: {new Date(productCreationDateTime).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {!product && <Loader />}
        </>
    );
};

export default ProductDetails;
