import {BASE_API_URL} from '../config/config'

export const getInventorysApi = async (data) => {
    try {
        //console.log(data)
        let url = `${BASE_API_URL}/inventory`;
        const { mesa, pago, fecha_inicio, fecha_final } = data;

        if (fecha_inicio && fecha_final) {
            url=`${url}?date_inicial=${fecha_inicio}&date_final=${fecha_final}`
        }

        if (mesa) {
            url=`${url}&id_product=${mesa}`
        }

        if (pago) {
            url=`${url}&tipo_movimiento=${pago}`
        }

        const response = await fetch(url)
        const result = await response.json()
        if(result.statusCode !== 200){
            throw Error('Error consultados los inventarios')
        }
        return result.data

    }catch(error){
        throw error
    }
}
