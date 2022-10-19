import React,{useEffect} from 'react'
import { HeaderPages, TableInventoryHistoryAdmin } from '../../components/Admin'
import {useInventory} from '../../hooks'
import {Loader}from 'semantic-ui-react'

export function InventoryHistory() {


  const {loading, inventory, getInventoryByTables } = useInventory()

  useEffect(() => {
    try{
      getInventoryByTables()
    }catch(error){
      console.log(error)
    }

  }, [])


  return (
    <>
        <HeaderPages title="Historial de Inventarios" btnTitle="Generar Reporte"/>
        {
        loading
          ? (<Loader active inline='centered'>Cargando</Loader>)
          : (<TableInventoryHistoryAdmin inventarios={inventory}/>)
      }
    </>
  )
}
