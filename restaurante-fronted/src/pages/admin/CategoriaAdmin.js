import React, {useEffect} from 'react'
import {HeaderPages} from '../../components/Admin'
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
            loading ? (<Loader active inline='centered'>Cargando...</Loader>) : (<h2>Lista de categorias</h2>)
        }
    </>
  )
}
