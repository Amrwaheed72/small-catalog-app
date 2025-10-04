import { useCallback, useEffect, useState } from "react";
import { getFirstProducts } from "../../services/api";

const useGetProducts = (limit) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [refetchIndex, setRefetchIndex] = useState(0);
    const refetch = useCallback(() => {
        setRefetchIndex((prev) => prev + 1)
    }, [])
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            setError(false)
            try {
                const data = await getFirstProducts(limit)
                setProducts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [limit, refetchIndex])
    return { products, loading, error, refetch }
}

export default useGetProducts