import { useCallback, useEffect, useState } from "react";
import { fetchSimilarProducts } from "../../services/api";

const useGetSimilarProducts = (category) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [refetchIndex, setRefetchIndex] = useState(0);

    const refetch = useCallback(() => {
        setRefetchIndex((prev) => prev + 1)
    }, [])
    useEffect(() => {
        if (!category) return;
        const getSimilarProducts = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await fetchSimilarProducts(category)
                setProducts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getSimilarProducts()
    }, [category, refetchIndex])
    return { products, loading, error, refetch }
}

export default useGetSimilarProducts