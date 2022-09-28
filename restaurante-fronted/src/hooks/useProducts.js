import {useState} from 'react'
import {getProductsApi} from '../api/product'





export const useProduct = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState(null)

    const getProducts = async() => {
        try{
            setLoading(true);
            const response = await getProductsApi()
            setLoading(false)
            setProducts(response)
        }catch(error){
            setLoading(false)
            setError(error)
            throw error
        }
    }



    return {
        loading,
        error,
        products,
        getProducts
    }
}