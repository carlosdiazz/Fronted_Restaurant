import React,{useState, useEffect} from 'react'
import {HeaderPages, TableInventoryAdmin } from '../../components/Admin'
import {Loader} from 'semantic-ui-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable';

import { useProduct } from '../../hooks'



export function InventoryAdmin() {


  const [refetch,setRefetch] = useState(false)


  const {loading, products, getProducts, updateProductInventory} = useProduct()

  const generatePDF = () => {
    let doc = new jsPDF('p', "pt", "a4");
    //doc.text('Reporte')
    doc.autoTable({html: '#Inventario', })
    doc.save("reporte.pdf")
  }

  useEffect(() => {
    try{
      getProducts()
    }catch(error){
      console.log(error)
    }
  }, [refetch])

  const onRefetch = () => setRefetch((prev) => !prev)


  return (
    <>
      <HeaderPages title="Inventario" btnTitleTwo="Imprimir PDF" btnClickTwo={generatePDF} />
        {
          loading
          ? (<Loader active inline='centered'>Cargando...</Loader>)
          : <TableInventoryAdmin
              products={products}
              updateProductInventory={updateProductInventory}
              refetch={onRefetch}
            />
        }
    </>
  )
}
