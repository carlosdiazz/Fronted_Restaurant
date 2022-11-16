import {useState} from 'react'
import {
    getInventorysApi
} from '../api/inventory'

export const useInventory = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [inventory, setInventory] = useState(null)

    const getInventoryByTables = async (data) => {
        try{
            setLoading(true)
            const response = await getInventorysApi(data)
            setLoading(false)
            setInventory(response)

        }catch(error){
            setLoading(false)
            setError(error)
            throw error
        }
    }

    return {
        loading,
        error,
        inventory,
        getInventoryByTables
    }

}