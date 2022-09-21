import React, {useEffect, useState} from 'react'
import {HeaderPages, TableUser, AddEditUserForm} from '../../components/Admin'
import {useUser} from '../../hooks/'
import { Button, Loader } from 'semantic-ui-react';
import {ModalBasic} from '../../components/Common'

export  function UsersAdmin() {


  const [titleModal, setTitleModal] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [contentModal, setContenModal] = useState(null)


  const {loading, users, getUsers} = useUser();

  const openCloseModal = () => setShowModal((prev) => !prev)

  const addUser = () => {
    setTitleModal('Nuevo usuario')
    setContenModal(<AddEditUserForm />)
    openCloseModal()
  }

  useEffect(() => getUsers(),[])

    return (
    <>
        <HeaderPages title="Usuarios" btnTitle='Nuevo usuario' btnClick={addUser}/>
        {loading ? (
            <Loader active inline='centered'>Cargando</Loader>
        ): (
            <TableUser users={users}/>
        )
        }
        <ModalBasic show={showModal} title={titleModal} children={contentModal} onClose={openCloseModal}/>
    </>
  )
}
