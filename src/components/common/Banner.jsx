import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

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
                <div className="relative h-[calc(100vh-80.888px)] w-full">
                    <img
                        src="./banner1.webp"
                        alt="Banner 1"
                        className="object-cover h-full w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-5 p-5 md:p-0"> 
                        <h1 className='text-3xl md:text-6xl font-bold  uppercase gradient-text'>luxury <span className='text-[#E94560]'>Collections</span> </h1>
                        <p className='text-white md:text-center max-w-4xl opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique cupiditate provident ducimus quia iste? Eveniet cupiditate recusandae nihil rerum, possimus eum est itaque animi ut, provident illo cumque, aspernatur voluptatem!</p>
                        <button className="text-white bg-[#E94560] hover:bg-[#C5374F] px-6 py-2 md:px-10 md:py-2 rounded-full md:text-lg font-semibold">
                            Explore
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-[calc(100vh-80.888px)] w-full">
                    <img
                        src="./banner2.webp"
                        alt="Banner 2"
                        className="object-cover h-full w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-5 p-5 md:p-0"> 
                        <h1 className='text-3xl md:text-6xl font-bold  uppercase gradient-text'>luxury <span className='text-[#E94560]'>Collections</span> </h1>
                        <p className='text-white md:text-center max-w-4xl opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique cupiditate provident ducimus quia iste? Eveniet cupiditate recusandae nihil rerum, possimus eum est itaque animi ut, provident illo cumque, aspernatur voluptatem!</p>
                        <button className="text-white bg-[#E94560] hover:bg-[#C5374F] px-6 py-2 md:px-10 md:py-2 rounded-full md:text-lg font-semibold">
                            Explore
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-[calc(100vh-80.888px)] w-full">
                    <img
                        src="./banner3.webp"
                        alt="Banner 3"
                        className="object-cover h-full w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-5 p-5 md:p-0"> 
                        <h1 className='text-3xl md:text-6xl font-bold  uppercase gradient-text'>luxury <span className='text-[#E94560]'>Collections</span> </h1>
                        <p className='text-white md:text-center max-w-4xl opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique cupiditate provident ducimus quia iste? Eveniet cupiditate recusandae nihil rerum, possimus eum est itaque animi ut, provident illo cumque, aspernatur voluptatem!</p>
                        <button className="text-white bg-[#E94560] hover:bg-[#C5374F] px-6 py-2 md:px-10 md:py-2 rounded-full md:text-lg font-semibold">
                            Explore
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-[calc(100vh-80.888px)] w-full">
                    <img
                        src="./banner4.webp"
                        alt="Banner 4"
                        className="object-cover h-full w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-5 p-5 md:p-0"> 
                        <h1 className='text-3xl md:text-6xl font-bold  uppercase gradient-text'>luxury <span className='text-[#E94560]'>Collections</span> </h1>
                        <p className='text-white md:text-center max-w-4xl opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique cupiditate provident ducimus quia iste? Eveniet cupiditate recusandae nihil rerum, possimus eum est itaque animi ut, provident illo cumque, aspernatur voluptatem!</p>
                        <button className="text-white bg-[#E94560] hover:bg-[#C5374F] px-6 py-2 md:px-10 md:py-2 rounded-full md:text-lg font-semibold">
                            Explore
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
