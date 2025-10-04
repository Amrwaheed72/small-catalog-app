import { MdErrorOutline } from 'react-icons/md';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div
            className="mt-12 flex flex-col items-center justify-center rounded-lg border-2 border-red-300 bg-red-50 p-8 text-center"
            role="alert"
        >
            <div className="mb-4">
                <MdErrorOutline className="text-6xl text-red-500" />
            </div>
            <h2 className="text-xl font-semibold text-red-700">
                Something went wrong
            </h2>
            <p className="mt-2 text-sm text-red-600">
                We're sorry, but we couldn't load the requested data.
            </p>

            <p className="mt-4 flex max-w-lg justify-center overflow-auto rounded bg-red-100 p-2 text-left text-xs text-red-800">
                {error}
            </p>

            {resetErrorBoundary && (
                <button
                    className="mt-6 cursor-pointer rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
                    onClick={resetErrorBoundary}
                >
                    Try again
                </button>
            )}
        </div>
    );
};

export default ErrorFallback;
