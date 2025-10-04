import ProductCard from '../../ui/ProductCard';
import useGetProducts from './useGetProducts';
import Spinner from '../../ui/Spinner';
import Empty from '../../ui/Empty';
import ErrorFallback from '../../ui/ErrorFallback';

const ProductsSection = ({ ref }) => {
    const { products, error, loading, refetch } = useGetProducts(8);
    if (loading) return <Spinner />;
    if (error)
        return <ErrorFallback error={error} resetErrorBoundary={refetch} />;
    return (
        <section
            ref={ref}
            className="flex flex-col items-center justify-center py-12 sm:pt-16 "
        >
            <div>
                <h1 className="mx-auto text-4xl text-gray-400 md:text-6xl">
                    Our best Products
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

export default ProductsSection;
