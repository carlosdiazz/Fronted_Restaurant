import {BASE_API_URL} from '../config/config'

export const getProductsApi = async () => {
    try{

        const url = `${BASE_API_URL}/products`;
        const response = await fetch(url)
        const result = await response.json()
        if(result.statusCode !== 200){
            throw Error('Error consultados los productos')
        }
        return result.data

    }catch(error){
        throw error
    }
}