import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useOrder} from '../../hooks'
import {Loader} from 'semantic-ui-react'
import {HeaderPages} from '../../components/Admin'
import {ListOrderAdmin} from '../../components/Admin/TableDetails'

export function TableDetailsAdmin() {

  const {id} = useParams()

  const {loading, orders, getorderByTable} = useOrder()

  useEffect(() => {
    getorderByTable(id, "", "orderStatus=asc&orderDate=desc")

  }, [])

  return (
    <>
      <HeaderPages title={`Mesa `} />
        { loading
          ? (<Loader active inline='centered'>Cargando</Loader>)
          : <ListOrderAdmin orders={orders}/>
        }
    </>
  )
}
