import { useCallback, useEffect, useState } from "react"
import { fetchProductDetails } from "../../services/api"

const useGetProduct = (id) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [refetchIndex, setRefetchIndex] = useState(0);
    const refetch = useCallback(() => {
        setRefetchIndex((prev) => prev + 1)
    }, [])
    useEffect(() => {
        const getProductDetails = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await fetchProductDetails(id)
                setProduct(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getProductDetails()
    }, [id, refetchIndex])

    return { product, loading, error, refetch }
}

export default useGetProduct