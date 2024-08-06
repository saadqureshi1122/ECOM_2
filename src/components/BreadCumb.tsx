import { Link } from "react-router-dom";

const BreadCumb = ({ title }: { title: string }) => {
    return (
        <div className="bg-white py-2 sm:py-4 flex justify-center items-center text-sm">
            <p className="text-xs sm:text-base">
                <Link to={"/"}>Home</Link> / {title}
            </p>
        </div>
    );
};

export default BreadCumb;
