import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import useGetLatest from '../../hooks/useGetLatest';
import Skeleton from '../others/Skeleton';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [latestProducts, loader] = useGetLatest();

    return (
        <div className="w-[90%] mx-auto my-20 items-center">
            <div className="flex flex-wrap justify-between items-center">
                <h1 className="text-4xl font-bold text-[#1A1A2E]">Featured Products</h1>
                <button>View all products</button>
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
                            <div className="relative p-4 bg-[#1A1A2E] text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-[#0F3460] group">
                                <img
                                    src={product?.productImage}
                                    alt={product?.productName}
                                    className="w-full h-60 object-cover rounded-t-lg"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-bold text-[#E94560]">
                                        {product?.productName.split(' ')[0]}...
                                    </h3>
                                    <div className="mt-2 flex justify-center items-center">
                                        <span className="text-[#E94560] font-semibold">Rating:</span>
                                        <span className="ml-2">{product?.ratings} ⭐</span>
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
                        <div className="hidden lg:flex w-full gap-8 my-10">
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                        <div className="hidden lg:hidden w-full nd:flex gap-8 my-10">
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                        <div className=" w-full flex md:hidden lg:hidden gap-8 my-10">
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </>}
            </div>
        </div>
    );
};

export default FeaturedProducts;