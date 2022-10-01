import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useOrder, useTable} from '../../hooks'
import {Loader} from 'semantic-ui-react'
import {HeaderPages, AddOrderForm} from '../../components/Admin'
import {ListOrderAdmin} from '../../components/Admin/TableDetails'
import {ModalBasic} from '../../components/Common'
import {toast} from 'react-toastify'
export function TableDetailsAdmin() {

  const {id} = useParams()
  const {table,getTable} = useTable()

  const {loading, orders, getorderByTable} = useOrder()

  const [reloadOrders, setReloadOrders] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const onReloadOrders = () => setReloadOrders((prev) => !prev)
  const openCloseModal = () => setShowModal((prev) => !prev)

  useEffect(() => {
    try{
      getorderByTable(id, "", "orderStatus=asc&orderDate=desc")
    }catch(error){
      toast.error(error.message)
      console.log(error)
    }
  }, [id, reloadOrders])

  useEffect(()=>{
    try{
      getTable(id)
    }catch(error){
      toast.error(error.message)
      console.log(error)
    }
  },[id])


  return (
    <>
      <HeaderPages title={`Mesa ${table?.number || ''}`} btnTitle='Anadir pedido' btnClick={openCloseModal}/>
        { loading
          ? (<Loader active inline='centered'>Cargando</Loader>)
          : <ListOrderAdmin orders={orders} onReloadOrders={onReloadOrders}/>
        }

        <ModalBasic show={showModal} onClose={openCloseModal} title='Pedido nuevo'>
          <AddOrderForm idTable={id} openCloseModal={openCloseModal} onReloadOrders={onReloadOrders}/>
        </ModalBasic>

    </>
  )
}
