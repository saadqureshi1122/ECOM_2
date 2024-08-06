import { Link } from "react-router-dom";

const BreadCumb = ({ title }: { title: string }) => {
    return (
        <div className="bg-white py-4 flex justify-center items-center text-sm">
            <p>
                <Link to={"/"}>Home</Link> / {title}
            </p>
        </div>
    );
};

export default BreadCumb;
