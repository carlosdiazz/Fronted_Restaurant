import {useState} from 'react'
import {getOrderByTableApi, checkCeliveredOrderApi} from '../api/orders'

export const useOrder = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [orders, setOders] = useState(null)

    const getorderByTable = async (idTable, status, ordering) => {
        try{
            setLoading(true)
            const response = await getOrderByTableApi(idTable, status, ordering)
            setLoading(false)
            setOders(response)


        }catch(error){
            setLoading(false)
            setError(error)
            throw error
        }
    }

    const checkDeliveredOrder = async (idOrder) => {
        try{
            await checkCeliveredOrderApi(idOrder)

        }catch(error){
            setLoading(false)
            setError(error)
            throw error
        }
    }

    return {
        loading,
        error,
        orders,
        getorderByTable,
        checkDeliveredOrder
    }

}