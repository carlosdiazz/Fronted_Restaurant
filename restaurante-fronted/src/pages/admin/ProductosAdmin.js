import React, {useEffect} from 'react'
import {Loader} from 'semantic-ui-react'
import {HeaderPages, TableProductAdmin} from '../../components/Admin'
import {useProduct} from '../../hooks'

export function ProductosAdmin() {

  const {loading, products, getProducts} = useProduct()

  useEffect(() => {
    getProducts()
}, [])


  return (
    <div>
        <HeaderPages title='Productos' btnTitle='Nuevo Producto' />
        {
          loading
          ? (<Loader active inline='centered'>Cargando...</Loader>)
          : (<TableProductAdmin products={products}/>)
        }
    </div>
  )
}
