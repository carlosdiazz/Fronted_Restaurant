import {useState} from 'react'
import {
    getProductsApi,
    addProductApi,
    updateProductApi,
    deleteProductApi,
    getProductApi
} from '../api/product'
import {useAuth} from './'

export const useProduct = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState(null)

    const {auth} = useAuth()


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

    const addProduct = async (data) => {
        try {
            setLoading(true)
            await addProductApi(data, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
            throw error
        }
    }

    const updateProduct = async (id, data) => {
        try {
            setLoading(true)
            await updateProductApi(id, data, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
            throw error
        }
    }

    const deleteProduct = async(id) => {
        try{
            setLoading(true)
            await deleteProductApi(id, auth.token)
            setLoading(false)
        }catch (error) {
            setLoading(false)
            setError(error)
            throw error
        }
    }


    const getProductById = async(id) => {
        try{

            const product = await getProductApi(id)
            return product

        }catch (error) {
            setError(error)
            console.log(error)
            throw error
        }
    }

    return {
        loading,
        error,
        products,
        getProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductById
    }
}