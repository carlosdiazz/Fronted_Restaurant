import {BASE_API_URL} from '../config/config'

export const getCategoriesApi = async() => {
    try {
        const url = `${BASE_API_URL}/categories`;
        const response = await fetch(url)
        const result = await response.json()
        if(result.statusCode!==200){
            throw Error(result.message)
        }
        return result.data
    }catch(error){
        throw error
    }
}