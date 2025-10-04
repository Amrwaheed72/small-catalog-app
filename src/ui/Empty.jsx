import { BsBox2 } from 'react-icons/bs';

const Empty = ({ resourceName = 'items' }) => {
    return (
        <div className="mt-12 flex flex-col items-center justify-center p-12 text-center">
            <h2 className="flex items-center justify-center gap-2 text-xl font-semibold text-gray-700">
                No {resourceName} found <BsBox2 />
            </h2>
            <p className="mt-2 text-gray-500">
                There are currently no {resourceName} to display. Please check
                back later.
            </p>
        </div>
    );
};

export default Empty;
