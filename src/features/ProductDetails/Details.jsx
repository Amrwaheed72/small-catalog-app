import useGetProduct from './useGetProduct';
import Spinner from '../../ui/Spinner';
import ErrorFallback from '../../ui/ErrorFallback';
import { useParams } from 'react-router';
import Star from '../../ui/Star';
import Button from '../../ui/Button';
import { IoCartOutline } from 'react-icons/io5';

const Details = ({ setCategory }) => {
    const { id } = useParams();
    const { product, loading, error, refetch } = useGetProduct(id);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorFallback error={error} resetErrorBoundary={refetch} />;
    }
    const { title, category, description, image, price, rating } = product;
    setCategory(category);

    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="flex items-center justify-center rounded-lg bg-white p-8 shadow-md">
                    <img
                        src={image}
                        alt={title}
                        className="h-full max-h-[400px] w-full object-contain"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                        {category}
                    </span>
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h1>

                    {rating && (
                        <div className="mt-4 flex items-center">
                            <div className="flex items-center">
                                <Star
                                    full={true}
                                    color={'#fcc419'}
                                    size={'25'}
                                />
                            </div>
                            <p className="ml-3 text-sm text-gray-500">
                                {rating.rate} ({rating.count} reviews)
                            </p>
                        </div>
                    )}

                    <p className="mt-6 text-3xl font-bold text-gray-800">
                        ${price}
                    </p>

                    <div className="mt-6 space-y-4 text-base text-gray-700">
                        <p>{description}</p>
                    </div>

                    <div className="mt-8">
                        <Button
                            extraClasses="bg-blue-600 text-white hover:bg-blue-700"
                            title="Add to Cart"
                            icon={<IoCartOutline size={18} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
