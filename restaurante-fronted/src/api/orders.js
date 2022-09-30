import {BASE_API_URL} from '../config/config'

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