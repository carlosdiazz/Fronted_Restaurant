import React from "react";
import {getMeApi} from '../api/user'

export const useUser = () => {

    const getMe = async(token) => {
        try{
            const response = await getMeApi(token)
            return response
        }catch(error){
            console.log(error)
            throw error
        }
    };

    return {
        getMe,
    };
};