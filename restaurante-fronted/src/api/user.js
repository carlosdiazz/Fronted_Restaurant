import {BASE_API_URL} from '../config/config';

export const loginApi = async (formValues) => {
    try {
        const url = `${BASE_API_URL}/api/v1/auth/signin`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        };

        const response = await fetch(url, params);

        if(response.status !== 200) {
            throw new Error("Error al iniciar sesión");
        }

        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}


export const getMeApi = async(TOKEN) => {
    try{
        const url = `${BASE_API_URL}/api/v1/auth/me`;
        const params = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result.data;

    }catch(error){
        throw error;
    }
}