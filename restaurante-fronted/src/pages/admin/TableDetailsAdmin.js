import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useOrder, useTable, usePayment} from '../../hooks'
import {Loader} from 'semantic-ui-react'
import {HeaderPages, AddOrderForm} from '../../components/Admin'
import {ListOrderAdmin, PaymentDetails} from '../../components/Admin/TableDetails'
import {ModalBasic} from '../../components/Common'
import {toast} from 'react-toastify'
import {forEach, size} from 'lodash'

export function TableDetailsAdmin() {

  const {id} = useParams()
  const {table,getTable} = useTable()
  const {loading, orders, getorderByTable, addPaymentToOrder} = useOrder()
  const {createPayment, getPaymentByTable} = usePayment()


  const [reloadOrders, setReloadOrders] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [paymentData, setPaymentData] = useState(null)

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

  useEffect(() => {
    (async()=> {
      const response = await getPaymentByTable(id)
      if(size(response) >0) setPaymentData(response[0])
    })()
  }, [reloadOrders])



  const onCreatePayment = async() => {
    const result = window.confirm(`Estas seguro de generar la cuenta de la mesa? `)
    try{
      if(result){
        let totalPayment = 0
        forEach(orders, (order) => {
          totalPayment += order.id_product.price
        })
        const resultTypePayment = window.confirm(`Pagaras con tarjerta? `)

        const paymentData = {
          id_table: id,
          total_Payment: Number(totalPayment.toFixed(2)),
          payment_Type: resultTypePayment ? 'CARD' : 'CASH',
          status_Payment:"PENDING"
        }
        const payment = await createPayment(paymentData)
        for await(const order of orders) {
          await addPaymentToOrder(order._id, payment._id)
        }
        onReloadOrders()
        toast.success("Cuenta Generada")

      }
    }catch(error){
      toast.error(error.message)
      console.log(error)
    }

  }

  return (
    <>
      <HeaderPages
        title={`Mesa ${table?.number || ''}`}
        btnTitle={paymentData ? 'Ver Cuenta' : "Anadir pedido"}
        btnClick={openCloseModal}
        btnTitleTwo={!paymentData ? 'Generar Cuenta' : null}
        btnClickTwo={onCreatePayment}
      />
        { loading
          ? (<Loader active inline='centered'>Cargando</Loader>)
          : <ListOrderAdmin orders={orders} onReloadOrders={onReloadOrders}/>
        }

        <ModalBasic show={showModal} onClose={openCloseModal} title='Pedido nuevo'>
          {
          paymentData
            ? (<PaymentDetails
                payment={paymentData}
                orders={orders}
                openCloseModal={openCloseModal}
                onReloadOrders={onReloadOrders}
              />)

            : (<AddOrderForm
                idTable={id}
                openCloseModal={openCloseModal}
                onReloadOrders={onReloadOrders}
              />)
          }
        </ModalBasic>

    </>
  )
}
