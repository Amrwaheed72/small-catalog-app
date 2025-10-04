const Spinner = ({ size }) => {
    return (
        <div className="flex h-full items-center justify-center">
            <div
                className={`h-${size} w-${size} mt-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent`}
            ></div>
        </div>
    );
};

export default Spinner;
