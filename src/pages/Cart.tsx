import { useEffect, useState } from "react";
import BreadCumb from "../components/BreadCumb";
import Watch from "../images/watch.jpg";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const navigate = useNavigate()

    useEffect(() => {
        if (quantity > 10) {
            setQuantity(10);
            alert("Can hold a maximum of 10");
        }
        if (quantity < 1) {
            setQuantity(1);
            alert("Can have at least 1");
        }
    }, [quantity]);

    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Cart" />
            <div className="w-[90%] max-w-[1500px] mx-auto mt-8 flex flex-col gap-12">
                <div className="w-full flex flex-col gap-8 ">
                    <div className="w-full flex justify-center  items-center gap-5 font-semibold tracking-widest">
                        <h1 className="w-[40%]">Product</h1>
                        <h1 className="w-[20%]">Price</h1>
                        <h1 className="w-[20%]">Quantity</h1>
                        <h1 className="w-[20%]">Total</h1>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="w-full  -black flex justify-between items-center gap-5  ">
                            <div className="w-[40%] flex gap-2  -red-800">
                                <img src={Watch} alt="" className="w-[100px]" />
                                <div>
                                    <h6>
                                        Kids watches bulk 10 pack multi colored
                                        for students
                                    </h6>
                                    <p>
                                        Size : <span>L</span>
                                    </p>
                                    <p>
                                        Color : <span>#ffffff</span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-[20%] font-semibold tracking-widest">
                                <p>$ 100</p>
                            </div>
                            <div className="w-[20%] flex items-center">
                                <div className="flex flex-col">
                                    <button
                                        className="w-[25px] h-[20px] rounded flex justify-center items-center bg-white"
                                        onClick={() =>
                                            setQuantity((prev) => prev - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <button
                                        className="w-[25px] h-[20px] rounded flex justify-center items-center bg-white"
                                        onClick={() =>
                                            setQuantity((prev) => prev + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="bg-white h-[40px] flex justify-center items-center w-[25px] text-sm font-semibold">
                                    {quantity}
                                </p>
                            </div>
                            <div className="w-[20%] font-semibold tracking-widest">
                                <p>$ 100</p>
                            </div>
                        </div>
                        <div className="w-full  -black flex justify-between items-center gap-5  ">
                            <div className="w-[40%] flex gap-2  -red-800">
                                <img src={Watch} alt="" className="w-[100px]" />
                                <div>
                                    <h6>
                                        Kids watches bulk 10 pack multi colored
                                        for students
                                    </h6>
                                    <p>
                                        Size : <span>L</span>
                                    </p>
                                    <p>
                                        Color : <span>#ffffff</span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-[20%] font-semibold tracking-widest">
                                <p>$ 100</p>
                            </div>
                            <div className="w-[20%] flex items-center">
                                <div className="flex flex-col">
                                    <button
                                        className="w-[25px] h-[20px] rounded flex justify-center items-center bg-white"
                                        onClick={() =>
                                            setQuantity((prev) => prev - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <button
                                        className="w-[25px] h-[20px] rounded flex justify-center items-center bg-white"
                                        onClick={() =>
                                            setQuantity((prev) => prev + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="bg-white h-[40px] flex justify-center items-center w-[25px] text-sm font-semibold">
                                    {quantity}
                                </p>
                            </div>
                            <div className="w-[20%] font-semibold tracking-widest">
                                <p>$ 100</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full ">
                    <button className="capitalize bg-footer-color text-white w-[200px] h-[45px] text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300" onClick={() => navigate("/product")}>
                        Continue To Shopping
                    </button>
                    <div className="self-end flex flex-col gap-3 items-end">
                      <h1 className="font-bold text-2xl "> SubTotal: $ 1000 </h1>
                      <p> Taxes and shipping calculated at checkout </p>
                      <button className=" capitalize bg-footer-color text-white w-[100px] h-[40px] text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300" onClick={() => navigate("/checkout")}>
                        Checkout
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
