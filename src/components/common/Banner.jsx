import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <Swiper
            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="relative h-[calc(100vh-80.888px)] w-full" data-aos="fade-up">
                    <img
                        src="./banner1.jpg"
                        alt="Banner 1"
                        className="object-cover h-full w-full"
                    />
                    <div className="max-w-[1550px] mx-auto absolute inset-0 flex flex-col  justify-center gap-5 p-5 md:p-12" data-aos="fade-in">
                        <h1 className='text-3xl md:text-6xl font-bold  uppercase gradient-text'>Summer <span className='text-[#E94560]'>Collections</span> </h1>
                        <p className='max-w-2xl'>Dive into our exclusive Summer Collection, featuring the latest trends and styles for the season. Discover vibrant colors, lightweight fabrics, and versatile designs perfect for sunny days and warm nights. </p>
                        <div>
                            <Link to={"/products"} className="text-white bg-[#E94560] hover:bg-[#C5374F] px-6 py-2 md:px-10 md:py-2 rounded-full md:text-lg font-semibold">
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-[calc(100vh-80.888px)] w-full" data-aos="fade-up">
                    <img
                        src="./banner2.jpg"
                        alt="Banner 1"
                        className="object-cover h-full w-full"
                    />
                    <div className="absolute inset-0 flex flex-col  justify-center gap-5 p-5 md:p-12" data-aos="fade-in">
                        <h1 className='text-3xl md:text-6xl font-bold  uppercase gradient-text'>Casual <span className='text-[#E94560]'>Collections</span> </h1>
                        <p className='max-w-2xl'>Step into effortless style with our Casual Collection. Designed for comfort and versatility, this collection features relaxed silhouettes, soft fabrics, and everyday essentials. Perfect for laid-back weekends and casual outings, our pieces blend simplicity with modern flair, offering timeless looks for any occasion.</p>
                        <div>
                            <Link to={"/products"} className="text-white bg-[#E94560] hover:bg-[#C5374F] px-6 py-2 md:px-10 md:py-2 rounded-full md:text-lg font-semibold">
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
