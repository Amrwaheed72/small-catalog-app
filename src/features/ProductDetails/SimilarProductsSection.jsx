import Empty from '../../ui/Empty';
import ErrorFallback from '../../ui/ErrorFallback';
import ProductCard from '../../ui/ProductCard';
import Spinner from '../../ui/Spinner';
import useGetSimilarProducts from './useGetSimilarProducts';

const SimilarProductsSection = ({ category }) => {
    const { products, loading, error, refetch } =
        useGetSimilarProducts(category);
    if (loading) return <Spinner />;

    if (error) {
        return <ErrorFallback error={error} resetErrorBoundary={refetch} />;
    }
    return (
        <section className="mb-12 flex flex-col items-center justify-center pt-12 sm:pt-16">
            <div className="mt-12 flex justify-center">
                <h1 className="mx-auto text-4xl text-gray-400 md:text-6xl">
                    Similar Products
                </h1>
            </div>
            {!products || products.length === 0 ? (
                <Empty resourceName="products" />
            ) : (
                <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default SimilarProductsSection;
