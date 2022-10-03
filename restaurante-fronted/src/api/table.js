import { BASE_API_URL } from '../config/config'

export const getTablesApi = async(token)=>{
    try{

        const url = `${BASE_API_URL}/tables`;
        const params = {
            headers: {Authorization:`Bearer ${token}`}
        }

        const response = await fetch(url, params)
        const result = await response.json()

        if(result.statusCode!==200){
            throw Error(result.message)
        }
        return result.data;

    }catch(error){
        throw error
    }
}


export const addTableApi = async(data, token) => {

    try{
        const new_Table = {
            name: data.name,
            number: data.number,
            imgUrl: 'https://logo.com'
        }
        const url = `${BASE_API_URL}/tables`

        const params ={
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_Table)
            //!body: formData
        }
        const response = await fetch(url, params);
        const result = await response.json();
        if(result.statusCode!==201){
            throw Error(result.message)
        }
        return result;
    }catch(error){
        throw error
    }
}

export const updateTableApi = async(id, data, token) => {
    try {
        const url =`${BASE_API_URL}/tables/${id}`
        const new_data = {
            name: data.title,
            number: data.number,
        }
        const params = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_data)
        }
        const response = await fetch(url, params);
        const result = await response.json()
        if(result.statusCode!==200){
            throw Error(result.message)
        }
        return result;

    }catch(error){
        throw error
    }
}


export const deleteTableApi = async(id, token) => {
    try{
        const url = `${BASE_API_URL}/tables/${id}`
        const params = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const response = await fetch(url, params);
        const result = await response.json()
        if(result.statusCode!==200){
            throw Error(result.message)
        }
        return result;
    }catch(error){
        throw error
    }
}


export const getTableApi = async(id, token) => {
    try{

        const url = `${BASE_API_URL}/tables/${id}`;
        const params = {
            headers: {Authorization:`Bearer ${token}`}
        }

        const response = await fetch(url, params)
        const result = await response.json()

        if(result.statusCode!==200){
            throw Error(result.message)
        }
        return result.data;

    }catch(error){
        throw error
    }
}

export const getTablesByNumberApi = async(idTable)=>{
    try{
        const filterTable=`number=${idTable}`
        const url = `${BASE_API_URL}/tables?${filterTable}`;
        const response = await fetch(url)
        const result = await response.json()

        if(result.statusCode!==200){
            throw Error(result.message)
        }
        return result.data;

    }catch(error){
        throw error
    }
}