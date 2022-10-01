import { orderBy } from 'lodash';
import React from 'react'
import {Button, Image} from 'semantic-ui-react'
import className from 'classnames'
import moment from 'moment'
import "moment/locale/es"
import './OrderItemAdmin.scss'
import {ORDER_Status} from '../../../../utils/constansts'
import {useOrder} from '../../../../hooks'
import {toast} from 'react-toastify'

export function OrderItemAdmin(props) {

  const {order, onReloadOrders} = props;

  const {checkDeliveredOrder} = useOrder()

    const onCheckDeliveredOrder = async() => {
        try{
            await checkDeliveredOrder(order._id)
            onReloadOrders()
            toast.success("Producto entregado")
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const {img_url, name} = order.id_product
    //const {img_url, name} = order.id_product[0]

    return (
    <div className={className("order-item-admin",{
        [order.status.toLowerCase()]:true
    })}>
        <div className='order-item-admin__time'>
            <span>{moment(order.createdAt).format("HH:mm")}</span>{" - "}
            <span>{moment(order.createdAt).startOf('secods').fromNow()}</span>
        </div>
        <div className='order-item-admin__product'>
            <Image src={img_url} />
            <p>{name}</p>
        </div>

        {
            order.status === ORDER_Status.PENDING
            ? (<Button primary onClick={onCheckDeliveredOrder }> Marcar entregado </Button>)
            : (<h1>Entregado</h1>)
        }

    </div>
  )
}
