import React, {useEffect, useState} from 'react'
import {HeaderPages, TableUser, AddEditUserForm} from '../../components/Admin'
import {useUser} from '../../hooks/'
import { Button, Loader } from 'semantic-ui-react';
import {ModalBasic} from '../../components/Common'
import {toast} from 'react-toastify'

export  function UsersAdmin() {


  const [titleModal, setTitleModal] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [contentModal, setContenModal] = useState(null)
  const [refetch, setRefetch] = useState(false)

  const {loading, users, getUsers, deleteUser} = useUser();

  const openCloseModal = () => setShowModal((prev) => !prev)
  const onRefetch = () => setRefetch((prev) => !prev);

  const addUser = () => {
    setTitleModal('Nuevo usuario')
    setContenModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch}/>)
    openCloseModal()
  }

  useEffect(() => getUsers(),[refetch]);

  const updateUser = (data) => {
    setTitleModal('Actualizar usuario')
    setContenModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} user={data}/>)
    openCloseModal()
  }

  const onDeleteUser = async (data) => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm(`Estas seguro que deseas eliminar el usuario: ${data.first_name}`);

    if(result){
      try {
        await deleteUser(data._id)
        toast.success(`Usuario eliminado`)
        //!Arreglar onRefetch()
      }catch(error){
        console.log(error)
        toast.error(error.message)
    }
    }
  }

    return (
    <>
        <HeaderPages title="Usuarios" btnTitle='Nuevo usuario' btnClick={addUser}/>
        {loading ? (
            <Loader active inline='centered'>Cargando</Loader>
        ): (
            <TableUser users={users} updateUser={updateUser} onDeleteUser={onDeleteUser}/>
        )
        }
        <ModalBasic show={showModal} title={titleModal} children={contentModal} onClose={openCloseModal}/>
    </>
  )
}
