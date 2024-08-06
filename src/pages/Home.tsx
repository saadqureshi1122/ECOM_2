import Marquee from "react-fast-marquee";
import Blogs from "../components/Blogs";
import ProductCard from "../components/ProductCard";
import SpecialProductCard from "../components/SpecialProductCard";
import { services } from "../utils/Data";

const Home = () => {
    const screenWidth = window.innerWidth;

    const getSize = (screenWidth: number) => {
        if (screenWidth < 640) {
            return "50%";
        } else {
            return "287px";
        }
    };
    return (
        <>
            {/* Home Banners Section */}

            <section className="py-5 sm:py-8 home-wrapper-1">
                <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-5 max-w-[1500px] w-[90%] mx-auto">
                    <div className="relative w-full sm:w-[47%] col-1">
                        <img
                            src="images/main-banner-1.jpg"
                            alt="main-banner-1.jpg"
                        />
                        <div className="absolute top-5 sm:top-12 left-5 ">
                            <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                                Superchared for pros.
                            </p>
                            <h2 className="my-2 sm:my-4 text-xl sm:text-3xl font-bold">
                                iPad S13+ Pro
                            </h2>
                            <p className="text-xs sm:text-sm font-semibold text-gray-600">
                                From $999.00 or $41.62/mo.
                            </p>
                            <button className="uppercase text-xs sm:text-sm text-white px-3 sm:px-5 py-[6px] mt-3 sm:mt-4 rounded-full bg-footer-color">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${
                            screenWidth > 640 && "col-2"
                        } flex justify-between gap-2 w-full flex-wrap sm:justify-end items-center sm:gap-5  sm:w-[50%]`}
                    >
                        <div
                            className={`relative ${
                                screenWidth < 640 ? "w-[47%]" : "box"
                            }`}
                        >
                            <img
                                src="images/catbanner-01.jpg"
                                alt="catbanner-01.jpg"
                            />
                            <div className="absolute top-3 sm:top-8 left-5">
                                <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                                    Best sake
                                </p>
                                <h2 className="my-1 sm:my-2 text-sm sm:text-xl font-bold">
                                    iPad S13+ Pro
                                </h2>
                                <p className="text-[10px] sm:text-sm font-semibold text-gray-600">
                                    From $999.00 or $41.62/mo.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`relative ${
                                screenWidth < 640 ? "w-[47%]" : "box"
                            }`}
                        >
                            <img
                                src="images/catbanner-02.jpg"
                                alt="catbanner-02.jpg"
                            />
                            <div className="absolute top-3 sm:top-8 left-5">
                                <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                                    New Arrival
                                </p>
                                <h2 className="my-1 sm:my-2 text-sm sm:text-xl font-bold">
                                    But ipad air
                                </h2>
                                <p className="text-[10px] sm:text-sm font-semibold text-gray-600">
                                    From $999.00 or $41.62/mo.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`relative ${
                                screenWidth < 640 ? "w-[47%]" : "box"
                            }`}
                        >
                            <img
                                src="images/catbanner-03.jpg"
                                alt="catbanner-03.jpg"
                            />
                            <div className="absolute top-3 sm:top-8 left-5">
                                <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                                    New Arrival
                                </p>
                                <h2 className="my-1 sm:my-2 text-sm sm:text-xl font-bold">
                                    But ipad air
                                </h2>
                                <p className="text-[10px] sm:text-sm font-semibold text-gray-600">
                                    From $999.00 or $41.62/mo.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`relative ${
                                screenWidth < 640 ? "w-[47%]" : "box"
                            }`}
                        >
                            <img
                                src="images/catbanner-04.jpg"
                                alt="catbanner-04.jpg"
                            />
                            <div className="absolute top-3 sm:top-8 left-5">
                                <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                                    New Arrival
                                </p>
                                <h2 className="my-1 sm:my-2 text-sm sm:text-xl font-bold">
                                    But ipad air
                                </h2>
                                <p className="text-[10px] sm:text-sm font-semibold text-gray-600">
                                    From $999.00 or $41.62/mo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Section */}

            <section className=" py-5 sm:py-8 bg-gray-200 flex flex-col gap-5 home-wrapper-2">
                <div className="w-[98%] sm:w-[90%] max-w-[1500px] mx-auto flex justify-between sm:justify-evenly items-center sm:mb-16 ">
                    {services.map((i, idx) => (
                        <div
                            className="w-[20%] h-[80px] sm:w-[20%] flex flex-col sm:flex-row justify-start items-start gap-2  sm:gap-3 p-2 "
                            key={idx}
                        >
                            <img
                                src={i.image}
                                alt="Service"
                                className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] "
                            />
                            <div className="flex flex-col gap-2px sm:gap-[5px] justify-start items-start w-[100%] h-[25px] ">
                                <h6 className="capitalize text-start text-[7px] font-bold whitespace-nowap sm:whitespace-normal sm:text-sm ">
                                    {i.title}
                                </h6>
                                <p className="capitalize text-[7px] sm:text-xs text-gray-800">
                                    {i.tagline}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className={`${
                        screenWidth < 640 ? " categories-mob" : "categories"
                    } bg-white py-2.5 sm:py-5 w-[95%] sm:w-[90%] max-w-[1500px] mx-auto  p-0 sm:px-16 flex justify-between sm:justify-center items-center flex-wrap px-3 `}
                >
                    <div className="flex justify-between items-center w-[50%] sm:w-[25%] ">
                        <div>
                            <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                                Music & Gaming
                            </h6>
                            <p className="text-xs sm:text-sm">10 items</p>
                        </div>
                        <img
                            src="images/camera.jpg"
                            className="w-[70px]"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-between items-center w-[50%] sm:w-[25%] ">
                        <div>
                            <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                                Cameras
                            </h6>
                            <p className="text-xs sm:text-sm">10 items</p>
                        </div>
                        <img
                            src="images/camera.jpg"
                            className="w-[70px]"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-between items-center w-[50%] sm:w-[25%] ">
                        <div>
                            <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                                Smart Tv
                            </h6>
                            <p className="text-xs sm:text-sm">10 items</p>
                        </div>
                        <img src="images/tv.jpg" className="w-[70px]" alt="" />
                    </div>
                    <div className="flex justify-between items-center w-[50%] sm:w-[25%] ">
                        <div>
                            <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                                Smart Watches
                            </h6>
                            <p className="text-xs sm:text-sm">10 items</p>
                        </div>
                        <img
                            src="images/headphone.jpg"
                            className="w-[70px]"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-between items-center w-[50%] sm:w-[25%] ">
                        <div>
                            <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                                Music & Gaming
                            </h6>
                            <p className="text-xs sm:text-sm">10 items</p>
                        </div>
                        <img
                            src="images/camera.jpg"
                            className="w-[70px]"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-between items-center w-[50%] sm:w-[25%] ">
                        <div>
                            <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                                Cameras
                            </h6>
                            <p className="text-xs sm:text-sm">10 items</p>
                        </div>
                        <img
                            src="images/camera.jpg"
                            className="w-[70px]"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-between items-center w-[50%] sm:w-[25%] ">
                        <div>
                            <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                                Smart Tv
                            </h6>
                            <p className="text-xs sm:text-sm">10 items</p>
                        </div>
                        <img src="images/tv.jpg" className="w-[70px]" alt="" />
                    </div>
                    <div className="flex justify-between items-center w-[50%] sm:w-[25%] ">
                        <div>
                            <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                                Smart Watches
                            </h6>
                            <p className="text-xs sm:text-sm">10 items</p>
                        </div>
                        <img
                            src="images/headphone.jpg"
                            className="w-[70px]"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            {/* Featured Collection Section */}

            <section className="py-5 sm:py-8 bg-gray-200 flex">
                <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto">
                    <h1 className="font-bold tracking-wide text-xl sm:text-2xl">
                        Featured Collection
                    </h1>
                    <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-3">
                        <ProductCard productSize={getSize(screenWidth)} />
                        <ProductCard productSize={getSize(screenWidth)} />
                        <ProductCard productSize={getSize(screenWidth)} />
                        <ProductCard productSize={getSize(screenWidth)} />
                        <ProductCard productSize={getSize(screenWidth)} />
                        <ProductCard productSize={getSize(screenWidth)} />
                    </div>
                </div>
            </section>

            {/* Under Featured Collection Section */}

            <section className="py-5 sm:py-8 bg-gray-200 flex home-wrapper-4">
                <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto flex justify-between items-center flex-wrap gap-2.5 sm:gap-5 box-container">
                    <div
                        className={`${
                            screenWidth < 640 ? "w-[47%]" : "box"
                        }  bg-black text-white flex flex-col justify-center items-start p-3 rounded gap-1 h-fit`}
                    >
                        <div className=" ">
                            <h6 className="font-semibold uppercase text-xs sm:text-sm">
                                Big screen
                            </h6>
                            <h1 className="text-lg sm:text-2xl font-bold my-1.5 sm:my-2">
                                Smart Watch Series 7
                            </h1>
                            <p className="text-xs sm:text-sm">
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
                    <div
                        className={`${
                            screenWidth < 640 ? "w-[47%]" : "box"
                        } h-fit bg-white flex flex-col justify-center items-start p-3 rounded gap-7 `}
                    >
                        <div className=" ">
                            <h6 className="font-semibold uppercase text-xs sm:text-sm">
                                Studio display
                            </h6>
                            <h1 className="text-lg sm:text-2xl font-bold my-2">
                                600 nits of brightness.
                            </h1>
                            <p className="text-xs sm:text-sm capitalize">
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
                    <div
                        className={`${
                            screenWidth < 640 ? "w-[47%]" : "box"
                        } bg-white flex flex-col justify-center items-start  p-3 rounded h-fit `}
                    >
                        <div className=" ">
                            <h6 className="font-semibold text-xs">
                                SmartPhones
                            </h6>
                            <h1 className="text-lg sm:text-2xl font-bold capitalize my-2">
                                Smart phone note 20 ultra
                            </h1>
                            <p className="text-xs sm:text-sm capitalize">
                                New in green from $999.00 or $41.62/mo. for 24
                                mo. Footnote*
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <img
                                src="images/Samsung.jpg"
                                alt=""
                                className="bg-white w-[65%]"
                            />
                        </div>
                    </div>
                    <div
                        className={`${
                            screenWidth < 640 ? "w-[47%]" : "box"
                        } bg-white  flex flex-col justify-center items-start  p-3 rounded h-fit `}
                    >
                        <div className=" ">
                            <h6 className="font-semibold text-sm">
                                Big screen
                            </h6>
                            <h1 className="text-lg sm:text-2xl font-bold my-2">
                                Smart Watch Series 7
                            </h1>
                            <p className="text-xs sm:text-sm">
                                From $399 or $16.62/mo. for 24 mo. "
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <img
                                src="images/acc-removebg-preview.png"
                                alt=""
                                className="bg-white w-[77%] sm:w-[70%]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Products Section */}

            <section className="py-5 sm:py-8 bg-gray-200 flex">
                <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto">
                    <h1 className="font-bold tracking-wide text-xl sm:text-2xl">
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

            <section className="py-5 sm:py-8 bg-gray-200 flex">
                <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto">
                    <h1 className="font-bold tracking-wide text-xl sm:text-2xl">
                        Our Popular Products
                    </h1>
                    <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-1.5 sm:gap-3">
                        <ProductCard productSize={getSize(screenWidth)} />
                        <ProductCard productSize={getSize(screenWidth)} />
                        <ProductCard productSize={getSize(screenWidth)} />
                        <ProductCard productSize={getSize(screenWidth)} />
                    </div>
                </div>
            </section>

            {/* Brand Section */}
            <section className="py-5 sm:py-8 bg-gray-200 flex">
                <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto bg-white py-2.5 sm:py-5 shadow-lg rounded ">
                    <Marquee>
                        <div className="flex justify-between items-center w-[6%] sm:w-full gap-3 sm:gap-6">
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

            <section className="py-5 sm:py-8 bg-gray-200 flex ">
                <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto ">
                    <h1 className="font-bold tracking-wide text-xl sm:text-2xl">
                        Our Latest Blogs
                    </h1>
                    <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-1.5 sm:gap-3">
                        <Blogs blogSize={getSize(screenWidth)} />
                        <Blogs blogSize={getSize(screenWidth)} />
                        <Blogs blogSize={getSize(screenWidth)} />
                        <Blogs blogSize={getSize(screenWidth)} />
                        <Blogs blogSize={getSize(screenWidth)} />
                        <Blogs blogSize={getSize(screenWidth)} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
