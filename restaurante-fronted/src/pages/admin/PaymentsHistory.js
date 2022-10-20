import React,{useEffect} from 'react'
import { HeaderPages, TablePayments } from '../../components/Admin'
import {usePayment} from '../../hooks'
import {Loader}from 'semantic-ui-react'

export function PaymentsHistory() {

  const {loading, payments, getPayments} = usePayment()

  useEffect(() => {
    try{
      getPayments()
    }catch(error){
      console.log(error)
    }

  }, [])

  return (
    <>
      <HeaderPages title="Historial de pagos" btnTitle="Generar Reporte"/>
      {
        loading
          ? (<Loader active inline='centered'>Cargando</Loader>)
          : (<TablePayments payments={payments}/>)
      }
    </>
  )
}
