import Marquee from "react-fast-marquee";
import Blogs from "../components/Blogs";
import ProductCard from "../components/ProductCard";
import SpecialProductCard from "../components/SpecialProductCard";
import { services } from "../utils/Data";

const Home = () => {
    return (
        <>
            {/* Home Banners Section */}

            <section className="my-8 max-w-[1500px] w-[90%] mx-auto flex  flex-wrap justify-between items-center gap-5 home-wrapper-1">
                <div className="relative w-[47%] col-1">
                    <img
                        src="images/main-banner-1.jpg"
                        alt="main-banner-1.jpg"
                    />
                    <div className="absolute top-12 left-5 ">
                        <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                            Superchared for pros.
                        </p>
                        <h2 className="my-4 text-3xl font-bold">
                            iPad S13+ Pro
                        </h2>
                        <p className="text-sm font-semibold text-gray-600">
                            From $999.00 or $41.62/mo.
                        </p>
                        <button className="uppercase text-white px-5 py-[6px] mt-4 rounded-full bg-footer-color">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-5 flex-wrap col-2 w-[47%]">
                    <div className="relative">
                        <img
                            src="images/catbanner-01.jpg"
                            alt="catbanner-01.jpg"
                        />
                        <div className="absolute top-8 left-5">
                            <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                                Best sake
                            </p>
                            <h2 className="my-2 text-xl font-bold">
                                iPad S13+ Pro
                            </h2>
                            <p className="text-sm font-semibold text-gray-600">
                                From $999.00 or $41.62/mo.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="images/catbanner-02.jpg"
                            alt="catbanner-02.jpg"
                        />
                        <div className="absolute top-8 left-5">
                            <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                                New Arrival
                            </p>
                            <h2 className="my-2 text-xl font-bold">
                                But ipad air
                            </h2>
                            <p className="text-sm font-semibold text-gray-600">
                                From $999.00 or $41.62/mo.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="images/catbanner-03.jpg"
                            alt="catbanner-03.jpg"
                        />
                        <div className="absolute top-8 left-5">
                            <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                                New Arrival
                            </p>
                            <h2 className="my-2 text-xl font-bold">
                                But ipad air
                            </h2>
                            <p className="text-sm font-semibold text-gray-600">
                                From $999.00 or $41.62/mo.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="images/catbanner-04.jpg"
                            alt="catbanner-04.jpg"
                        />
                        <div className="absolute top-8 left-5">
                            <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                                New Arrival
                            </p>
                            <h2 className="my-2 text-xl font-bold">
                                But ipad air
                            </h2>
                            <p className="text-sm font-semibold text-gray-600">
                                From $999.00 or $41.62/mo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Section */}

            <section className=" py-8 bg-gray-200 flex flex-col gap-5 home-wrapper-2">
                <div className="w-[90%] max-w-[1500px] mx-auto flex justify-evenly items-center mb-16">
                    {services.map((i, idx) => (
                        <div
                            className="flex justify-center items-center gap-3"
                            key={idx}
                        >
                            <img src={i.image} alt="Service" />
                            <div className="flex flex-col gap-[5px] justify-center items-start">
                                <h6 className="capitalize text-sm font-semibold">
                                    {i.title}
                                </h6>
                                <p className="capitalize text-xs text-gray-800">
                                    {i.tagline}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white py-5 w-[90%] max-w-[1500px] mx-auto px-16 flex justify-center items-center flex-wrap categories ">
                    <div className="flex justify-between items-center w-[25%] ">
                        <div>
                            <h6 className="font-semibold text-sm">
                                Music & Gaming
                            </h6>
                            <p className="text-sm">10 items</p>
                        </div>
                        <img src="images/camera.jpg" alt="" />
                    </div>
                    <div className="flex justify-between items-center w-[25%] ">
                        <div>
                            <h6 className="font-semibold text-sm">Cameras</h6>
                            <p className="text-sm">10 items</p>
                        </div>
                        <img src="images/camera.jpg" alt="" />
                    </div>
                    <div className="flex justify-between items-center w-[25%] ">
                        <div>
                            <h6 className="font-semibold text-sm">Smart Tv</h6>
                            <p className="text-sm">10 items</p>
                        </div>
                        <img src="images/tv.jpg" alt="" />
                    </div>
                    <div className="flex justify-between items-center w-[25%] ">
                        <div>
                            <h6 className="font-semibold text-sm">
                                Smart Watches
                            </h6>
                            <p className="text-sm">10 items</p>
                        </div>
                        <img src="images/headphone.jpg" alt="" />
                    </div>
                    <div className="flex justify-between items-center w-[25%] ">
                        <div>
                            <h6 className="font-semibold text-sm">
                                Music & Gaming
                            </h6>
                            <p className="text-sm">10 items</p>
                        </div>
                        <img src="images/camera.jpg" alt="" />
                    </div>
                    <div className="flex justify-between items-center w-[25%] ">
                        <div>
                            <h6 className="font-semibold text-sm">Cameras</h6>
                            <p className="text-sm">10 items</p>
                        </div>
                        <img src="images/camera.jpg" alt="" />
                    </div>
                    <div className="flex justify-between items-center w-[25%] ">
                        <div>
                            <h6 className="font-semibold text-sm">Smart Tv</h6>
                            <p className="text-sm">10 items</p>
                        </div>
                        <img src="images/tv.jpg" alt="" />
                    </div>
                    <div className="flex justify-between items-center w-[25%] ">
                        <div>
                            <h6 className="font-semibold text-sm">
                                Smart Watches
                            </h6>
                            <p className="text-sm">10 items</p>
                        </div>
                        <img src="images/headphone.jpg" alt="" />
                    </div>
                </div>
            </section>

            {/* Featured Collection Section */}

            <section className="py-8 bg-gray-200 flex">
                <div className="w-[90%] max-w-[1500px] mx-auto">
                    <h1 className="font-bold tracking-wide text-2xl">
                        Featured Collection
                    </h1>
                    <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-3">
                        <ProductCard productSize="287px" />
                        <ProductCard productSize="287px" />
                        <ProductCard productSize="287px" />
                        <ProductCard productSize="287px" />
                        <ProductCard productSize="287px" />
                        <ProductCard productSize="287px" />
                    </div>
                </div>
            </section>

            {/* Under Featured Collection Section */}

            <section className="py-8 bg-gray-200 flex home-wrapper-4">
                <div className="w-[90%] max-w-[1500px] mx-auto flex justify-between items-center flex-wrap gap-5 box-container">
                    <div className=" bg-black text-white flex flex-col justify-center items-start box p-3 rounded gap-1 h-full">
                        <div className=" ">
                            <h6 className="font-semibold uppercase text-sm">
                                Big screen
                            </h6>
                            <h1 className="text-2xl font-bold my-2">
                                Smart Watch Series 7
                            </h1>
                            <p className="text-sm">
                                From $399 or $16.62/mo. for 24 mo. "
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <img
                                src="images/Watch-3.jpg"
                                alt=""
                                className="bg-black w-[100%]"
                            />
                        </div>
                    </div>
                    <div className=" bg-white flex flex-col justify-center items-start box p-3 rounded gap-7 h-full">
                        <div className=" ">
                            <h6 className="font-semibold uppercase text-sm">
                                Studio display
                            </h6>
                            <h1 className="text-2xl font-bold my-2">
                                600 nits of brightness.
                            </h1>
                            <p className="text-sm capitalize">
                                27 inch 5k Retina display
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <img
                                src="images/screenshot-2022-04-25-at-14-18-31-tab-p12-pro-premium-tablet-with-12-6-2k-amoled-display-lenovo-us.png"
                                alt=""
                                className="bg-white w-[600px]"
                            />
                        </div>
                    </div>
                    <div className=" bg-white flex flex-col justify-center items-start box p-3 rounded h-full">
                        <div className=" ">
                            <h6 className="font-semibold">SmartPhones</h6>
                            <h1 className="text-2xl font-bold capitalize my-2">
                                Smart phone note 20 ultra
                            </h1>
                            <p className="text-sm capitalize">
                                New in green from $999.00 or $41.62/mo. for 24
                                mo. Footnote*
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <img
                                src="images/Samsung.jpg"
                                alt=""
                                className="bg-white w-[70%]"
                            />
                        </div>
                    </div>
                    <div className=" bg-white flex flex-col justify-center items-start box p-3 rounded h-full">
                        <div className=" ">
                            <h6 className="font-semibold">Big screen</h6>
                            <h1 className="text-2xl font-bold my-2">
                                Smart Watch Series 7
                            </h1>
                            <p className="text-sm">
                                From $399 or $16.62/mo. for 24 mo. "
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <img
                                src="images/acc-removebg-preview.png"
                                alt=""
                                className="bg-white w-[70%]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Products Section */}

            <section className="py-8 bg-gray-200 flex">
                <div className="w-[90%] max-w-[1500px] mx-auto">
                    <h1 className="font-bold tracking-wide text-2xl">
                        Special Products
                    </h1>
                    <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-3">
                        <SpecialProductCard />
                        <SpecialProductCard />
                        <SpecialProductCard />
                        <SpecialProductCard />
                    </div>
                </div>
            </section>

            {/* Popular Products Section */}

            <section className="py-8 bg-gray-200 flex">
                <div className="w-[90%] max-w-[1500px] mx-auto">
                    <h1 className="font-bold tracking-wide text-2xl">
                        Our Popular Products
                    </h1>
                    <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-3">
                        <ProductCard productSize="287px" />
                        <ProductCard productSize="287px" />
                        <ProductCard productSize="287px" />
                        <ProductCard productSize="287px" />
                    </div>
                </div>
            </section>

            {/* Brand Section */}
            <section className="py-8 bg-gray-200 flex">
                <div className="w-[90%] max-w-[1500px] mx-auto bg-white py-5 px- shadow-lg rounded ">
                    <Marquee>
                        <div className="flex justify-between items-center w-full gap-6">
                            <img src="images/brand-01.png" alt="brand-01" />
                            <img src="images/brand-02.png" alt="brand-02" />
                            <img src="images/brand-03.png" alt="brand-03" />
                            <img src="images/brand-04.png" alt="brand-04" />
                            <img src="images/brand-05.png" alt="brand-05" />
                            <img src="images/brand-06.png" alt="brand-06" />
                            <img src="images/brand-07.png" alt="brand-07" />
                            <img src="images/brand-08.png" alt="brand-08" />
                        </div>
                    </Marquee>
                </div>
            </section>

            {/* Latest Blogs Section */}

            <section className="py-8 bg-gray-200 flex">
                <div className="w-[90%] max-w-[1500px] mx-auto">
                    <h1 className="font-bold tracking-wide text-2xl">
                        Our Latest Blogs
                    </h1>
                    <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-3">
                        <Blogs blogSize="287px" />
                        <Blogs blogSize="287px" />
                        <Blogs blogSize="287px" />
                        <Blogs blogSize="287px" />
                        <Blogs blogSize="287px" />
                        <Blogs blogSize="287px" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
