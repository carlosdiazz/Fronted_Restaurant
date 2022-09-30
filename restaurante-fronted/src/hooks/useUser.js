import {useState} from "react";
import {getMeApi, getUsersApi, addUserApi, updateUserApi, deleteUserApi} from '../api/user'
import {useAuth} from '.'

export const useUser = () => {

    const [loading, setLoading]= useState(true)
    const [error, setError] = useState(null)
    const [users, setUsers]= useState(null)
    const {auth} = useAuth();

    const getMe = async(token) => {
        try{
            const response = await getMeApi(token)
            return response
        }catch(error){
            throw error
        }
    };


    const getUsers = async()=> {
        try{
            setLoading(true);
            const response = await getUsersApi(auth.token);
            setLoading(false);
            setUsers(response)
        }catch(error){
            setLoading(false)
            setError(error)
        }
    }

    const addUser = async(data) => {
        try {
            setLoading(true);
            await addUserApi(data, auth.token);
            setLoading(false)
        }catch(error){
            setLoading(false)
            setError(error)
            throw error
        }
    }

    const updateUser = async(id, data) => {
        try{
            setLoading(true)
            await updateUserApi(id, data, auth.token)
            setLoading(false)

        }catch(error){
            setLoading(false)
            setError(error)
            throw error
        }
    }

    const deleteUser = async(id) => {
        try{
            setLoading(true)
            await deleteUserApi(id, auth.token)
            setLoading(false)

        }catch(error){
            setLoading(false)
            setError(error)
            throw error
        }
    }

    return {
        loading,
        error,
        users,
        getMe,
        getUsers,
        addUser,
        updateUser,
        deleteUser

    };
};