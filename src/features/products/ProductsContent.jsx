import Empty from '../../ui/Empty';
import ErrorFallback from '../../ui/ErrorFallback';
import ProductCard from '../../ui/ProductCard';
import Spinner from '../../ui/Spinner';
import useGetProducts from '../home/useGetProducts';

const ProductsContent = () => {
    const { products, error, loading, refetch } = useGetProducts();
    if (loading) return <Spinner />;
    if (error)
        return <ErrorFallback error={error} resetErrorBoundary={refetch} />;
    return (
        <section className="flex flex-col items-center justify-center pt-12 sm:pt-16">
            <div>
                <h1 className="mx-auto text-4xl text-gray-400 md:text-6xl">
                    Our Products
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

export default ProductsContent;
