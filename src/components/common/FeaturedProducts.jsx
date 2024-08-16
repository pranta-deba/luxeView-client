import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import useGetLatest from '../../hooks/useGetLatest';
import Skeleton from '../others/Skeleton';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [latestProducts, loader] = useGetLatest();

    return (
        <div className="max-w-[1550px] mx-auto w-[90%] mt-10 items-center">
            <div className="flex flex-wrap justify-between items-center">
                <h1 className="text-4xl font-bold text-[#1A1A2E]">Featured Products</h1>
                <Link to={"/products"} className="hover:text-[#E94560] hover:underline">View all products</Link>
            </div>
            <div>
                {!loader ? <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1025: {
                            slidesPerView: 4,
                        },
                    }}
                    className="my-10"
                >
                    {latestProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative p-4  rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl group my-4">
                                <img
                                    src={product?.productImage}
                                    alt={product?.productName}
                                    className="w-full h-60 object-cover rounded-t-lg"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-bold text-[#E94560]">
                                        {product?.productName.split(' ')[0]}...
                                    </h3>
                                    <p className="text-sm text-gray-300 mt-1">{product?.brand}</p> {/* Brand name added */}
                                    <div className="mt-2 flex justify-center items-center">
                                        <span className="text-[#E94560] font-semibold">Rating:</span>
                                        <span className="ml-2 text-black">{product?.ratings} ⭐</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 hover:bg-opacity-75 hover:bg-black transition-all duration-300 rounded-lg">
                                    <Link
                                        to={`/details/${product._id}`}
                                        className="opacity-0 group-hover:opacity-100 bg-[#E94560] text-white font-bold py-2 px-4 rounded-full transition-opacity duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper> :
                    <>
                        <div className="hidden md:hidden lg:flex w-full gap-8 my-10">
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                        <div className="hidden md:flex lg:hidden w-full  gap-8 my-10">
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                        <div className="hidden sm:flex md:hidden lg:hidden w-full  gap-8 my-10">
                            <Skeleton />
                            <Skeleton />
                        </div>
                        <div className="flex sm:hidden md:hidden lg:hidden w-full  gap-8 my-10">
                            <Skeleton />
                        </div>
                    </>}
            </div>
        </div>
    );
};

export default FeaturedProducts;
