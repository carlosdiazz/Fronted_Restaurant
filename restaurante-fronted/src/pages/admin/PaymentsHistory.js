import React,{useEffect, useState} from 'react'
import {Loader}from 'semantic-ui-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import { map } from 'lodash';

import { HeaderPages, TablePayments, PaymentModal } from '../../components/Admin'
import {ModalBasic} from '../../components/Common/ModalBasic'
import { usePayment, useTable } from '../../hooks'


export function PaymentsHistory() {

  const { loading, payments, getPayments } = usePayment()
  const { getTables, tables } = useTable()
  const [showModal, setshowModal] = useState(false)
  const [tablesModal, setTablesModal] = useState([])

  const openCloseModal = () => setshowModal((prev) => !prev)

  useEffect(() => {
    try{
      getTables()
      setTablesModal(formatDropdownData2(tables))
    }catch(error){
      console.log(error)
    }

  }, [showModal])

  const generarReporte = () => {
    openCloseModal()
  }

const generatePDF = () => {
  let doc = new jsPDF('p', "pt", "a4");
  //doc.text('Reporte')
  doc.autoTable({html: '#payment', })
  doc.save("reporte.pdf")
}

  return (
    <>
      <HeaderPages title="Pagos" btnTitle="Generar Reporte" btnClick={generarReporte} btnTitleTwo='Imprimir Reporte' btnClickTwo={generatePDF } />
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={'Historial de Pagos'}
        children={<PaymentModal
          nombreMesas={tablesModal}
          openCloseModal={openCloseModal}
          getPayments={getPayments}
        />}
      />
      {
        loading
          ? (<Loader active inline='centered'>Cargando</Loader>)
          : (<TablePayments payments={payments}/>)
      }
    </>
  )
}

const formatDropdownData2 =(data) => {
  return map(data,(item, index) => ({
      key: item?._id || index,
      text: item?.name,
      value: item?._id
  }))
}