import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import className from 'classnames'
import { Label } from 'semantic-ui-react'
import {size} from 'lodash'
import {ReactComponent as IcTable} from '../../../../assets/table.svg'
import {ORDER_Status} from  '../../../../utils/constansts'
import './TableAdmin.scss'
import {getOrderByTableApi} from '../../../../api/orders'
import {toast} from 'react-toastify'

export function TableAdmin(props) {

  const {table, reload} = props
  const [orders, setOrders] = useState([])
  const [tableBusy, setTableBusy] = useState(false)

  useEffect(() => {
    (async () => {
      try{
        const response = await getOrderByTableApi(table._id, ORDER_Status.PENDING , "")
        setOrders(response)
      }catch(error){
        console.log(error)
        toast.error(error.message)
      }
    })();
  }, [reload])

  useEffect(() => {
    (async () => {
      try{
        const response = await getOrderByTableApi(table._id, ORDER_Status.DELIVERED , "")
        if(size(response) > 0) setTableBusy(response)
        else setTableBusy(false)

      }catch(error){
        console.log(error)
        toast.error(error.message)
      }
    })();
  }, [reload])



  return (
    <Link className='table-admin' to={`/admin/table/${table._id}`}>
        {
          size(orders) > 0 ? (<Label circular color='orange'>{size(orders)}</Label>) : null
        }
        <IcTable className={className({
          pending: size(orders) > 0,
          busy: tableBusy,

        })}/>
        <p>Mesa {table.number}</p>
    </Link>
  )
}
