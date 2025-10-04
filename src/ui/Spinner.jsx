const Spinner = () => {
    return (
        <div className="flex h-[60vh] items-center justify-center">
            <div
                className={`mt-12 h-18 w-18 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent`}
            ></div>
        </div>
    );
};

export default Spinner;
