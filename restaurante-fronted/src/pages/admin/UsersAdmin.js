import React, {useEffect} from 'react'
import {HeaderPages, TableUser} from '../../components/Admin'
import {useUser} from '../../hooks/'
import { Loader } from 'semantic-ui-react';

export  function UsersAdmin() {

  const {loading, users, getUsers} = useUser();

  useEffect(() =>{
    getUsers()
  },[])

    return (
    <>
        <HeaderPages title="Usuarios"/>
        {loading ? (
            <Loader active inline='centered'>Cargando</Loader>
        ): (
            <TableUser users={users}/>
        )


        }
    </>
  )
}
