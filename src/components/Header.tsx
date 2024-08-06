import { BiArrowToBottom, BiArrowToTop, BiSearchAlt2 } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import "../styles/styles.css";
import { useState } from "react";
import Comapre from "../images/compare.svg";
import Wishlist from "../images/wishlist.svg";
import User from "../images/user.svg";
import Cart from "../images/cart.svg";
import Menu from "../images/menu.svg";

const Header = () => {
    const [categoryDropdown, setCategoryDropdown] = useState<boolean>(false);
    return (
        <>
            <header className="header-top-strip py-2 w-full text-sm text-white bg-dark-navy-blue ">
                <div className="mx-auto w-[90%] max-w-[1500px] flex justify-between items-center gap-5 nav-color">
                    <div>Free Shipping Over $100 & Free Returns </div>
                    <div>
                        <p>
                            Hotline:
                            <a href="tel:+92 3366351600">+92 3366351600</a>
                        </p>
                    </div>
                </div>
            </header>
            <header className="py-3 w-full text-sm text-white header-mid bg-dark-navy-blue">
                <div className="mx-auto w-[90%] max-w-[1500px] flex justify-between items-center gap-5">
                    <div className="flex justify-start items-center gap-3 w-full">
                        <h1 className="text-3xl font-semibold">Al Azeem</h1>
                        <div className="flex justify-center items-center flex-1">
                            <input
                                type="text"
                                className="py-[6px] w-[80%] px-5 rounded-sm outline-none text-black font-semibold tracking-widest"
                                placeholder="Search Product Here"
                            />
                            <button className=" rounded-sm w-[45px] h-[32px] flex justify-center items-center text-zinc-700 bg-light-yellow">
                                <BiSearchAlt2 className="text-lg" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex justify-end gap-8 items-center">
                        <Link
                            className="flex justify-center  items-center  gap-2"
                            to={"/compare"}
                        >
                            <img
                                src={Comapre}
                                alt="Campare products"
                                className="h-[30px]"
                            />
                            <p className="text-sm">
                                Compare <br /> Products
                            </p>
                        </Link>
                        <Link
                            className="flex justify-center  items-center  gap-2"
                            to={"/wishlist"}
                        >
                            <img
                                src={Wishlist}
                                alt="Favourite wishlist"
                                className="h-[30px]"
                            />
                            <p className="text-sm">
                                Favourite <br /> wishlist
                            </p>
                        </Link>
                        <Link
                            className="flex justify-center  items-center  gap-2"
                            to={"/login"}
                        >
                            <img
                                src={User}
                                alt="Account"
                                className="h-[30px]"
                            />
                            <p className="text-sm">
                                Log in <br /> My Account
                            </p>
                        </Link>
                        <Link
                            className="flex justify-center  items-center  gap-2"
                            to={"/cart"}
                        >
                            <img
                                src={Cart}
                                alt="Cart"
                                className="h-[30px]"
                            />
                            <div className="text-sm flex flex-col justify-center gap-1">
                                <p className="bg-white text-black flex justify-center items-center h-[15px] rounded text-xs">
                                    0
                                </p>
                                <p>{"$ 500"}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-2 w-full text-sm text-white bg-footer-color">
                <div className="w-[90%] max-w-[1500px] flex gap-8 mx-auto">
                    <div className="h-full relative">
                        <button
                            className="flex justify-between items-center gap-2 w-[180px] py-[6px]"
                            onClick={() => setCategoryDropdown((prev) => !prev)}
                        >
                            <div className="flex items-center gap-2">
                                <img
                                    src={Menu}
                                    alt="Shop categories"
                                    className="h-[23px]"
                                />
                                <p className="uppercase text-sm">
                                    Shop Categories
                                </p>
                            </div>
                            {categoryDropdown ? (
                                <BiArrowToTop />
                            ) : (
                                <BiArrowToBottom />
                            )}
                        </button>
                        <ul
                            className={`bg-dark-navy-blue z-40 header-drop-down w-[180px] absolute top-[44px] flex-col ${
                                categoryDropdown ? "flex" : "hidden"
                            }`}
                        >
                            <Link
                                to={""}
                                className="px-3 py-3  duration-200 hover:bg-footer-color"
                            >
                                Action
                            </Link>
                            <Link
                                to={""}
                                className="px-3 py-3  duration-200 hover:bg-footer-color"
                            >
                                Action
                            </Link>
                            <Link
                                to={""}
                                className=" px-3 py-3 duration-200 hover:bg-footer-color"
                            >
                                Action
                            </Link>
                            <Link
                                to={""}
                                className=" px-3 py-3 duration-200 hover:bg-footer-color"
                            >
                                Action
                            </Link>
                            <Link
                                to={""}
                                className=" px-3 py-3 duration-200 hover:bg-footer-color"
                            >
                                Action
                            </Link>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center uppercase gap-3 text-sm font-semibold">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/product"}>Our Store</NavLink>
                        <NavLink to={"/blog"}>Blogs</NavLink>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
