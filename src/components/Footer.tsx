import {
    LiaGithub,
    LiaInstagram,
    LiaLinkedin,
    LiaYoutube,
} from "react-icons/lia";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import NewsLetter from "../images/newsletter.png";
const Footer = () => {
    return (
        <>
            <footer className="footer-top border-b border-gray py-1.5 sm:py-3 bg-footer-color">
                <div className="w-[90%] max-w-[1500px] mx-auto flex justify-between items-center gap-3 flex-wrap">
                    <div className="flex justify-start items-center gap-3">
                        <img
                            src={NewsLetter}
                            alt="Newsletter"
                            className="h-[20px] sm:h-[25px]"
                        />
                        <h2 className="font-bold text-white text-lg sm:text-2xl">
                            Sign Up For Newsletter
                        </h2>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="flex justify-center items-center w-full text-white border">
                            <input
                                type="text"
                                className="py-[4px] sm:py-[6px]  px-3 sm:px-5 rounded-sm sm:w-[500px] outline-none text-black font-semibold tracking-widest text-xs sm:text-sm"
                                placeholder="Your Email Address"
                            />
                            <button className=" rounded-sm flex justify-center items-center px-3 text-sm">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer-mid border-b border-gray py-1.5 sm:py-3 flex justify-between items-center text-white bg-footer-color">
                <div className="w-[90%] max-w-[1500px] mx-auto flex justify-evenly gap-3 sm:gap-5 items-start">
                    <div className="flex flex-col gap-2 sm:gap-6 justify-center items-start">
                        <h1 className="font-bold text-[11px] sm:text-xl">Contact Us</h1>
                        <ul className="flex flex-col font-semibold text-[10px] sm:text-sm gap-2 sm:gap-3">
                            <li className="gap-0 m-0 p-0">
                                <Link to={""}>
                                    Pakistan, Punjab, Multan, <br /> Near
                                    Bahawalpur Bypass .
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>+92 3366351600</Link>
                            </li>
                            <li>
                                <Link to={""}>saadqurashi333@gmail.com</Link>
                            </li>
                            <li className="flex justify-start items-center gap-3 text-2xl">
                                <Link to={""}>
                                    <LiaLinkedin />
                                </Link>
                                <Link to={""}>
                                    <LiaInstagram />
                                </Link>
                                <Link to={""}>
                                    <LiaGithub />
                                </Link>
                                <Link to={""}>
                                    <LiaYoutube />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-6 justify-center items-start">
                        <h1 className="font-bold text-[11px] sm:text-xl">Information</h1>
                        <ul className="flex flex-col font-semibold text-[10px] sm:text-sm gap-2 sm:gap-3">
                            <li className="">
                                <Link to={"privacy-policy"}>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to={"/refund-policy"}>
                                    Returnd Policy
                                </Link>
                            </li>
                            <li>
                                <Link to={"/shipping-policy"}>
                                    Shipping Policy
                                </Link>
                            </li>
                            <li className="whitespace-nowrap">
                                <Link to={"/term-conditions"}>
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to={"/blog"}>Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-6 justify-center items-start">
                        <h1 className="font-bold text-[11px] sm:text-xl">Account</h1>
                        <ul className="flex flex-col font-semibold text-[10px] sm:text-sm gap-2 sm:gap-3">
                            <li className="">
                                <Link to={""}>About Us</Link>
                            </li>
                            <li>
                                <Link to={""}>Faq</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-6 justify-center items-start">
                        <h1 className="font-bold text-[11px] sm:text-xl whitespace-nowrap">Quick Links</h1>
                        <ul className="flex flex-col font-semibold text-[10px] sm:text-sm gap-2 sm:gap-3">
                            <li className="">
                                <Link to={""}>Laptops</Link>
                            </li>
                            <li>
                                <Link to={""}>Headphones</Link>
                            </li>
                            <li>
                                <Link to={""}>Tablets</Link>
                            </li>
                            <li>
                                <Link to={""}>Watches</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer className="footer-bottom border-b border-gray py-1.5 sm:py-3 flex justify-center items-center text-white bg-footer-color">
                <div className="w-[90%] max-w-[1500px] mx-auto flex justify-center items-center">
                    <h1 className="font-semibold sm:text-sm text-xs">
                        &copy; {new Date().getFullYear()}; Powered By
                        Developer's Saad
                    </h1>
                </div>
            </footer>
        </>
    );
};

export default Footer;
