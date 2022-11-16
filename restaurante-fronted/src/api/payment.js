import {BASE_API_URL} from '../config/config'
import {PAYMENT_STATUS} from '../utils/constansts'

export const createPaymentApi = async(paymentData,token) => {
    try{

        const url = `${BASE_API_URL}/payment`

        const params ={
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(paymentData)
        }
        const response = await fetch(url, params);
        const result = await response.json();
        if(result.statusCode!==201){
            throw Error(result.message)
        }
        return result.data;
    }catch(error){
        throw error
    }
}

export const getPaymentByTableApi = async(idTable,token) => {
    try{

        const tableFilter = `id_table=${idTable}`
        const statusFilter = `status_Payment=${PAYMENT_STATUS.PENDING}`

        const url = `${BASE_API_URL}/payment?${tableFilter}&${statusFilter}`

        const params = {
            method: 'Get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }
        const response = await fetch(url, params);
        const result = await response.json();
        if(result.statusCode!==200){
            throw Error(result.message)
        }
        return result.data;
    }catch(error){
        throw error
    }
}

export const closePaymentApi = async(idPayment, token) => {
    try{

        const url = `${BASE_API_URL}/payment/${idPayment}`

        const params = {
            method: 'Put',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status_Payment: PAYMENT_STATUS.PAID
            })
        }
        const response = await fetch(url, params);
        const result = await response.json();
        if(result.statusCode!==200){
            throw Error(result.message)
        }
        return result.data;


    }catch(error){
        throw error
    }
}

export const getPaymentsApi = async(data) => {
    try{
        const {mesa, pago, fecha_inicio, fecha_final } = data
        //const statusFilter = `status_Payment=${PAYMENT_STATUS.PAID}`
        const orderingFilter = `orderCreated_At=DES`

        let url = `${BASE_API_URL}/payment?${orderingFilter}`

        if (fecha_inicio && fecha_final) {
            url=`${url}&date_inicial=${fecha_inicio}&date_final=${fecha_final}`
        }

        if (mesa) {
            url=`${url}&id_table=${mesa}`
        }

        if (pago) {
            url=`${url}&payment_Type=${pago}`
        }

        const params = {
            method: 'Get',
            headers: {
                //Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },

        }
        const response = await fetch(url, params);
        const result = await response.json();
        if(result.statusCode!==200){
            throw Error(result.message)
        }
        return result.data;


    }catch(error){
        throw error
    }
}