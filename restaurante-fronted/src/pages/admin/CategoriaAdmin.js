import React, {useEffect} from 'react'
import {HeaderPages, TableCategoryAdmi} from '../../components/Admin'
import {useCategory} from '../../hooks'
import {Loader} from 'semantic-ui-react'

export  function CategoriaAdmin() {

    const {loading, categories, getCategories} = useCategory()
    useEffect(() => {
        getCategories()
    }, [])

  return (
    <>
        <HeaderPages
            title ='Categorias'
            btnTitle = 'Nueva Categoria'
        />
        {
            loading
            ? (<Loader active inline='centered'>Cargando...</Loader>)
            : (<TableCategoryAdmi categories={categories}/>)
        }
    </>
  )
}
