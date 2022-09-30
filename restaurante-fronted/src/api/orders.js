import {BASE_API_URL} from '../config/config'
import {ORDER_Status} from '../utils/constansts'

export const getOrderByTableApi = async(idTable, status="", ordering="") => {
    try{

        let statusFilter;
        if(status === "PENDING")        { statusFilter=`status=${status}`}
        else if (status ==="DELIVERED") { statusFilter=`status=${status}`}
        else statusFilter = ""

        const tableFilter = `id_table=${idTable}`;

        const closeFilter = `close=False`

        const url = `${BASE_API_URL}/order/?${tableFilter}&${statusFilter}&${closeFilter}&${ordering}`;

        const response = await fetch(url);
        const result = await response.json();
        if(result.statusCode !== 200){
            throw Error(result.message)
        }
        return result.data

    }catch(error){
        throw error;
    }
}


export const checkCeliveredOrderApi = async(id) => {
    try{

        const url = `${BASE_API_URL}/order/${id}`

        const params ={
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status : ORDER_Status.DELIVERED
            })
        };
        const response = await fetch(url, params)
        const result = await response.json()
        if(result.statusCode!==201){
            throw Error(result.message)
        }
        return result.data

    }catch(error){
        throw error;
    }
}