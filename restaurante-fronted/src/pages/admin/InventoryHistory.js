import React,{useEffect, useState} from 'react'
import {Loader}from 'semantic-ui-react'
import jsPDF from 'jspdf'
import { map } from 'lodash';
import 'jspdf-autotable';

import {} from '../../components/Admin'
import { HeaderPages, TableInventoryHistoryAdmin, InventarioModal } from '../../components/Admin'
import {useInventory, useProduct} from '../../hooks'
import {ModalBasic} from '../../components/Common/ModalBasic'

export function InventoryHistory() {

  const [showModal, setshowModal] = useState(false)
  const { loading, inventory, getInventoryByTables } = useInventory()
  const { products, getProducts } = useProduct()
  const [tablesModal, setTablesModal] = useState([])


  const openCloseModal = () => setshowModal((prev) => !prev)

  useEffect(() => {
    try {
      getProducts()
      setTablesModal(formatDropdownData2(products))
      //getInventoryByTables()
    }catch(error){
      console.log(error)
    }

  }, [showModal])

  const generatePDF = () => {
    let doc = new jsPDF('p', "pt", "a4");
    doc.autoTable({html: '#content', useCss: true, })
    doc.save("Inventario.pdf")
  }
  const generarReporte = () => {
    openCloseModal()
  }

  return (
    <>
      <HeaderPages title="Inventarios" btnTitle="Generar Reporte" btnClick={generarReporte} btnTitleTwo="Imprimir PDF" btnClickTwo={generatePDF} />

      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={'Historial de Inventarios'}
        children={<InventarioModal
          nombreProducto={tablesModal}
          openCloseModal={openCloseModal}
          getPayments={getInventoryByTables}
        />}
      />


        {
        loading
          ? (<Loader active inline='centered'>Cargando</Loader>)
          : (<TableInventoryHistoryAdmin inventarios={inventory}/>)
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