import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import BreadCumb from "../components/BreadCumb";
import Watch from "../images/watch.jpg";

const Checkout = () => {
    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Checkout" />
            <div className="w-[90%] max-w-[1500px] mx-auto mt-8 ">
                <div className="w-full flex justify-between flex-wrap gap-5 checkout-container">
                    <div className="flex flex-col gap-3  first-col ">
                        <h1 className="text-2xl font-bold tracking-widest">
                            Dev Corner
                        </h1>
                        <div className="flex items-center gap-2 ">
                            <Link to={"/cart"}>Cart</Link>/
                            <p className="text-gray-700">Information</p>/
                            <p className="text-gray-700">Shipping</p>/
                            <p className="text-gray-700">Payment </p>
                        </div>
                        <div>
                            <h6 className="font-semibold tracking-widest">
                                Contact Information{" "}
                            </h6>
                            <p className="text-sm">
                                Saad Qurashi (saad@gmail.com)
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 mt-4">
                            <h1 className="text-2xl font-bold tracking-widest">
                                Shipping Address
                            </h1>
                            <form
                                action=""
                                className="w-full flex flex-col gap-5"
                            >
                                <select
                                    name=""
                                    id=""
                                    defaultValue={"Select Country"}
                                    className="outline-none px-5 py-1.5 rounded w-full"
                                >
                                    <option value="Select Country">
                                        Select Country
                                    </option>
                                </select>
                                <div className="flex justify-between items-center">
                                    <input
                                        type="text"
                                        className="w-[45%] outline-none px-5 py-1.5 rounded"
                                        placeholder="First Name"
                                    />
                                    <input
                                        type="text"
                                        className="w-[45%] outline-none px-5 py-1.5 rounded"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <input
                                    type="text"
                                    className="w-[100%] outline-none px-5 py-1.5 rounded"
                                    placeholder="Address"
                                />
                                <input
                                    type="text"
                                    className="w-[100%] outline-none px-5 py-1.5 rounded"
                                    placeholder="Apartment, Suite, etc"
                                />
                                <div className="flex justify-between items-center">
                                    <input
                                        type="text"
                                        className="w-[30%] outline-none px-5 py-1.5 rounded"
                                        placeholder="City"
                                    />
                                    <select
                                        name=""
                                        id=""
                                        defaultValue={"Select State"}
                                        className="w-[30%] outline-none px-5 py-1.5 rounded"
                                    >
                                        <option value="Select State">
                                            Select State
                                        </option>
                                    </select>
                                    <input
                                        type="text"
                                        className="w-[30%] outline-none px-5 py-1.5 rounded"
                                        placeholder="Zip Code"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="w-full flex justify-between items-center mt-5">
                            <Link
                                to={"/cart"}
                                className="flex items-center gap-3"
                            >
                                <BiArrowBack />
                                Return To Cart
                            </Link>
                            <Link
                                to={""}
                                className=" flex justify-center items-center capitalize bg-footer-color text-white w-[200px] h-[40px] text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300"
                            >
                                Continue To Shipping
                            </Link>
                        </div>
                    </div>
                    <div className=" second-col  flex flex-col gap-5">
                        <div className="border-b-zinc-300 border-b pb-3 flex justify-between items-center">
                            <div className=" flex gap-3 items-center">
                                <div className="relative w-[80px]">
                                    <img
                                        src={Watch}
                                        alt=""
                                        className="w-[100%]"
                                    />
                                    <span className="-top-2 -right-2 absolute w-[20px] h-[20px] bg-zinc-700 rounded-full flex justify-center items-center text-xs text-white">
                                        1
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2 text-gray-500 font-semibold">
                                    <p>dsadsads</p>
                                    <p>s/ #fdsafds</p>
                                </div>
                            </div>
                            <p className="font-bold tracking-widest">$ 100</p>
                        </div>
                        <div className="flex flex-col gap-2 border-b-zinc-300 border-b pb-3">
                            <div className="flex justify-between items-center">
                                <h6 className="font-semibold">Subtotal</h6>
                                <p className="text-gray-500">$ 1000</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h6 className="font-semibold">Subtotal</h6>
                                <p className="text-gray-500">$ 1000</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-8">
                            <h6 className="font-bold tracking-widest">Total</h6>
                            <p className="text-gray-500">$ 1000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
