import React,{useState, useEffect} from 'react';
import {useOrder, useTable} from '../../hooks'
import {map, size, forEach} from 'lodash'
import {useParams} from 'react-router-dom'
import {Loader} from 'semantic-ui-react'
import {OrderHistoryItems} from '../../components/Client'
import {Button} from 'semantic-ui-react'
export function OrdersHistory() {

  const {getorderByTable, loading, orders} = useOrder()
  const {getTableByNumber} = useTable();
  const {tableNumber} = useParams()

  useEffect(() => {
    try{
      ( async ()=> {
        const table = await getTableByNumber(tableNumber)
        const idTable = table[0]._id
        getorderByTable(idTable, "", "orderStatus=asc&orderDate=asc")
      }
      )()
    }catch(error){
      console.log(error)
    }
  }, [])


  return (
    <div>
      <h1>Historial de pedido</h1>
      {
        loading
          ? (<Loader active inline='centered'>Cargando</Loader>)
          : (
            <>
            {
              size(orders) > 0 && (
                <Button primary fluid>
                  Pedir la cuenta
                </Button>
              )
            }


            {
              map(orders, (order) => (
                <OrderHistoryItems key={order._id} order={order}/>
              ))
            }
            </>
          )
    }
    </div>
  )
}
