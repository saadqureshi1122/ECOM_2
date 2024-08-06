import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const Blogs = ({ blogSize }: { blogSize: string }) => {
    const navigate = useNavigate();
    return (
        <div
            className={`relative  bg-white rounded flex flex-col justify-center items-center shadow-lg 
                ${blogSize === "287px" && "blog-box-home"}
                ${blogSize === "50%" && "blog-box"} 
            }`}
        >
            <div className="w-full">
                <img src="images/blog-1.jpg" alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-3 px-2 pt-2 pb-3">
                <h6 className="font-semibold">6 Jun. 2024</h6>
                <h2 className="font-bold">
                    A beautiful monday morning renaissance
                </h2>
                <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    molestiae, natus cupiditate qui repudiandae pariatur.
                </p>
                <button
                    className="bg-footer-color rounded-full px-5 py-2 text-white text-sm self-start"
                    onClick={() => navigate("/blog/dynamic-id")}
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Blogs;
