import { Link } from "react-router-dom";

const HomeGrid = () => {
    return (
        <div className="max-w-[1550px] mx-auto w-[90%] grid md:grid-cols-2 grid-rows-2 gap-4 py-4">
            <div className="md:row-span-2 md:col-span-1 bg-cover bg-center flex items-end justify-start p-4 rounded-xl overflow-hidden" style={{ backgroundImage: "url('/grid1.jpg')" }}>
                <div className="p-2 space-y-3">
                    <p className="uppercase text-xs md:text-lg opacity-70">casual collection</p>
                    <h2 className="text-2xl md:text-4xl font-bold capitalize gradient-text">street wear.</h2>
                    <p className="text-xs md:text-base">Discover the latest in urban fashion with our streetwear collection. Bold, edgy, and effortlessly cool perfect for those who set trends, not follow them</p>
                    <Link to={"/products"} className="text-xs md:text-base hover:underline hover:text-[#E94560]">Shop Collection</Link>
                </div>
            </div>

            <div className="bg-cover bg-center flex items-end justify-start p-4 rounded-xl overflow-hidden" style={{ backgroundImage: "url('/grid2.jpg')" }}>
                <div className="p-2 space-y-3">
                    <p className="uppercase text-xs md:text-lg opacity-70 ">Basic Collection</p>
                    <h2 className="text-2xl md:text-4xl font-bold capitalize gradient-text">Basic shoes.</h2>
                    <p className="text-xs md:text-base">Step into comfort and style with our basic shoes collection. Timeless designs that pair perfectly with any outfit, offering everyday ease and versatility.</p>
                    <Link to={"/products"} className="text-xs md:text-base hover:underline hover:text-[#E94560]">Shop Collection</Link>
                </div>
            </div>

            <div className="bg-cover bg-center flex items-end justify-start p-4 rounded-xl overflow-hidden" style={{ backgroundImage: "url('/grid3.jpg')" }}>
                <div className="p-2 space-y-3">
                    <p className="uppercase text-xs md:text-lg opacity-70">Best Selling Product</p>
                    <h2 className="text-2xl md:text-4xl font-bold capitalize gradient-text">woolen hat.</h2>
                    <p className="text-xs md:text-base">Stay cozy and chic with our woolen hat collection. Crafted for warmth and style, these hats are the perfect accessory for colder days.</p>
                    <Link to={"/products"} className="text-xs md:text-base hover:underline hover:text-[#E94560]">Shop Collection</Link>
                </div>
            </div>
        </div>
    );

};

export default HomeGrid;