import React, {useState, useEffect} from 'react'
import {ReactComponent as IcTable} from '../../../../assets/table.svg'
import {ORDER_Status} from  '../../../../utils/constansts'
import './TableAdmin.scss'
import {getOrderByTableApi} from '../../../../api/orders'
import {toast} from 'react-toastify'

export function TableAdmin(props) {

  const {table} = props

  useEffect(() => {
    (async () => {
      try{
        const response = await getOrderByTableApi(table._id, ORDER_Status.PENDING , "")
        console.log(response)
      }catch(error){
        console.log(error)
        toast.error(error.message)
      }
    })();
  }, [])




  return (
    <div className='table-admin'>
        <IcTable />
        <p>Mesa {table.number}</p>
    </div>
  )
}
