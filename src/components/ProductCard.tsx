import "../styles/styles.css";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Watch from "../images/watch.jpg";
import Headphone from "../images/headphone.jpg";

const ProductCard = ({ productSize }: { productSize: string }) => {
    console.log(productSize);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className={`relative 
        
                ${productSize === "287px" && "product-box-size-home"}
                ${productSize === "100%" && "product-box-size-1"} 
                ${productSize === "50%" && "product-box-size-2"}
                ${productSize === "33.5%" && "product-box-size-3"} 
                ${productSize === "25%" && "product-box-size-4"} 
                ${
                    productSize === "100%"
                        ? "flex-row justify-center w-full items-center gap-5"
                        : "flex-col justify-center items-center"
                } 
                bg-white px-2 sm:px-4 py-2.5 sm:py-5 rounded flex shadow-lg`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                className="w-[600px] flex justify-center items-center cursor-pointer "
                onClick={() => navigate("/product/dynamic-id")}
            >
                <img
                    src={Watch}
                    alt=""
                    className={`
                        ${productSize === "50%" && "h-[130px]"}
                        ${productSize === "287px" && "h-[230px]"}
                        ${productSize === "25%" && "h-[230px]"}
                        ${productSize === "33.5%" && "h-[230px]"}

                        ${productSize === "100%" && "sm:w-[170px]"}
                       ${hover ? "hidden" : "block"}`}
                />
                <img
                    src={Headphone}
                    alt=""
                    className={`
                        ${productSize === "50%" && "h-[130px]"}
                        ${productSize === "25%" && "h-[230px]"}
                        ${productSize === "33.5%" && "h-[230px]"}
                        ${productSize === "287px" && "h-[230px]"}
                    ${productSize === "100%" && "sm:w-[170px]"}
                     ${hover ? "block" : "hidden"}`}
                />
            </div>
            <div className="self-end sm:self-start flex flex-col">
                <h6 className="font-bold text-xs sm:text-sm tracking-widest text-red-700">
                    Havels
                </h6>
                <h2 className="capitalize font-semibold text-xs sm:text-base">
                    Kids headphones bulk 10 pack multi colored for...
                </h2>
                <div>
                    <ReactStars
                        count={5}
                        size={15}
                        activeColor="#ffd700"
                        edit={false}
                        value={3}
                    />
                </div>
                <p
                    className={`${
                        productSize === "100%"
                            ? "text-[10px] sm:text-base text-gray-500 py-1 truncate-two-lines"
                            : "hidden"
                    }`}
                >
                    The XYZ Elite Series 500 is a classic and modern analog
                    watch perfect for any occasion. Its stainless steel dial and
                    genuine leather strap give it a timeless appeal. This watch
                    is made with sapphire crystal glass, protecting it from
                    scratches, and its water resistance ensures you feel
                    confident whether you’re swimming or in the rain. The quartz
                    movement and luminescent hands provide accurate timekeeping
                    and make it easy to see the time even at night.
                </p>

                <p className="font-semibold">$100.00</p>
            </div>
            <div
                className={`absolute top-10 sm:top-12 right-3 flex flex-col gap-2 sm:gap-5 transition-all duration-500 ${
                    hover ? "animate-slideIn" : "animate-slideOut"
                }`}
            >
                <button className="text-xs sm:text-base">
                    <FaRegHeart />
                </button>
                <button className="text-xs sm:text-base">
                    <FaRegHeart />
                </button>
                <button className="text-xs sm:text-base">
                    <FaRegHeart />
                </button>
            </div>
            <button className="absolute top-3 right-3 text-xs sm:text-base">
                <FaRegHeart />
            </button>
        </div>
    );
};

export default ProductCard;
