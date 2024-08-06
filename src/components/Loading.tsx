const Loading = () => {
    return (
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div
                className="inline-block w-[150px] h-[150px] sm:h-[200px] sm:w-[200px] animate-spin rounded-full sm:border-[10px] border-[8px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black "
                role="status"
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        </div>
    );
};

export default Loading;
