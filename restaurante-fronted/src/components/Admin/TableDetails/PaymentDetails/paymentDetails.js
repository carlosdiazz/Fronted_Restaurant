import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {usePayment, useOrder} from '../../../../hooks'
import './paymentDetails.scss'
import {toast} from 'react-toastify'

export function PaymentDetails(props) {

    const {payment, orders, openCloseModal, onReloadOrders} = props
    const {closePayment} = usePayment()
    const {closeOrder} = useOrder()

    const getIconPayment = (key) => {
        if(key === 'CARD') return "credit card"
        if(key === "CASH") return "money bill alternate"
        return null
    }


    const onCloseTable = async () => {
        const result = window.confirm("Estas seguro que deseas cerrar la mesa? ")
        try{
            if(result){
                await closePayment(payment._id)
                for await(const order of orders){
                    await closeOrder(order._id)
                }
                onReloadOrders()
                openCloseModal()
                toast.success('Pago cerrado')
            }
        }catch(error){
            toast.error(error.message)
            console.log(error)
        }
    }


    return (
    <div className='payment-detail'>
        <Table striped>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Mesa: </Table.Cell>
                    <Table.Cell>{payment?.id_table?.number}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Total: </Table.Cell>
                    <Table.Cell>{payment?.total_Payment} $RD</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Forma de pago:</Table.Cell>
                    <Table.Cell><Icon name={getIconPayment(payment?.payment_Type)} className="logo"/></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>

        <Button primary fluid onClick={onCloseTable} >
            Marcar como pagado y cerrar mesa
        </Button>

    </div>
  )
}
