import {useState} from 'react';
import {getTablesApi, addTableApi, updateTableApi, deleteTableApi} from '../api/table';
import {useAuth} from './';

export const useTable = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tables, setTables] = useState(null);


    const {auth} = useAuth()

    const getTables = async() => {
        try{
            setLoading(true);
            const response = await getTablesApi(auth.token);
            setLoading(false);
            setTables(response);
        }catch(error){
            setLoading(false);
            setError(error);
            throw error
        }
    }

    const addTable = async(data) => {
        try{
            setLoading(false);
            await addTableApi(data, auth.token);
            setLoading(false);
        }catch(error){
            setLoading(false);
            setError(error);
            throw error;
        }
    }

    const updatetable = async(id, data) => {
        try{
            setLoading(false)
            await updateTableApi(id, data, auth.token)
            setLoading(false);
        }catch(error){
            setLoading(false);
            setError(error);
            throw error;
        }
    }

    const deleteTable = async(id) => {
        try{
            setLoading(true);
            await deleteTableApi(id, auth.token )
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
        tables,
        getTables,
        addTable,
        updatetable,
        deleteTable
    }

}