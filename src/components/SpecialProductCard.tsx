import ReactStars from "react-rating-stars-component";

const SpecialProductCard = () => {
    return (
        <div className="flex justify-between items-center bg-white p-4 rounded shadow-lg gap-3 w-[400px] xl:w-[450px]">
            <div>
                <img
                    src="images/headphone.jpg"
                    alt="headphone"
                    className="w-[155px]"
                />
            </div>
            <div className="w-[60%] flex justify-center items-start flex-col">
                <h1 className="font-semibold">Havels</h1>
                <p className="capitalize text-[13px] font-semibold">
                    Samsung gslaxy note 10+ mobile phones; Sim...
                </p>
                <ReactStars
                    count={5}
                    size={20}
                    activeColor="#ffd700"
                    edit={false}
                    value={3}
                />
                <p className="flex items-center gap-3">
                    $100
                    <span className="line-through">$200</span>
                </p>
                <div className="flex justify-start items-center gap-2 my-2">
                    <p>5 Days</p>
                    <div className="flex justify-center items-center gap-2">
                        <span className="bg-red-700 rounded-full text-white w-[25px] h-[25px] flex justify-center items-center">
                            1
                        </span>
                        :
                        <span className="bg-red-700 rounded-full text-white w-[25px] h-[25px] flex justify-center items-center">
                            1
                        </span>
                        :
                        <span className="bg-red-700 rounded-full text-white w-[25px] h-[25px] flex justify-center items-center">
                            1
                        </span>
                    </div>
                </div>
                <h6>Products: 5</h6>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{ width: "45%" }}
                    ></div>
                </div>
                <button className="bg-footer-color rounded-full px-5 py-2 text-white text-sm hover:bg-light-yellow hover:text-black duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default SpecialProductCard;
