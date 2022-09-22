import React, {useEffect, useState} from 'react'
import {HeaderPages, TableCategoryAdmi, AddEditCategoryForm} from '../../components/Admin'
import {useCategory} from '../../hooks'
import {Loader} from 'semantic-ui-react'
import {ModalBasic} from '../../components/Common'

export  function CategoriaAdmin() {

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const [refech, setRefech] = useState(false)


    const {loading, categories, getCategories} = useCategory()

    useEffect(() => {
        getCategories()
    }, [refech])

    const openCloseModal = () => setShowModal((prev) => !prev)
    const onRefetch = () => setRefech((prev)=>!prev)

    const addCategory = () => {
        setTitleModal('Nueva Categoria')
        setContentModal(<AddEditCategoryForm onClose ={openCloseModal} onRefetch={onRefetch}/>)
        openCloseModal()
    }

    const updateCategory = (data) => {
        setTitleModal('Actualizar categoria')
        setContentModal(
            <AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} category={data}/>)
            openCloseModal()
    }

    return (
    <>
        <HeaderPages
            title ='Categorias'
            btnTitle = 'Nueva Categoria'
            btnClick = {addCategory}
        />
        {
            loading
            ? (<Loader active inline='centered'>Cargando...</Loader>)
            : (<TableCategoryAdmi categories={categories} updateCategory={updateCategory}/>)
        }
        <ModalBasic
            show={showModal}
            onClose={openCloseModal}
            title={titleModal}
            children={contentModal}

        />
    </>
  )
}
