
const BASE_URL = import.meta.env.VITE_FAKESTORE_API_URL
export const fetchProducts = async (limit) => {
    try {
        const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const fetchProductDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`)
        if (!response.ok) {
            throw new Error(`Error Displaying the Product`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const fetchSimilarProducts = async (category) => {
    try {
        const response = await fetch(`${BASE_URL}/products/category/${category}`)
        if (!response.ok) {
            throw new Error(`Error Displaying the Product`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}