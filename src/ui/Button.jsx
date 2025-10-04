const Button = ({ extraClasses, action, title, icon }) => {
    return (
        <button
            onClick={action}
            className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${extraClasses}`}
        >
            {title} {icon}
        </button>
    );
};

export default Button;
