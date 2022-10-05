import React, {useState} from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {map} from 'lodash'
import moment from 'moment'
import {ModalBasic} from '../../../Common'
import {PaymentProductList} from '../../../Admin'
import './TablePayments.scss'

export function TablePayments(props) {

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)

    const {payments} = props

    const getIconPaymentName = (key) => {
        if(key === 'CARD') return "credit card"
        if(key === 'CASH') return "money bill alternate"
        return null
    }

    const openCloseModal = () => setShowModal((prev) => !prev)

    const showDetails = (payment) => {

        setTitleModal(`Pedidos de la mesa #${payment?.id_table?.number}`)
        setContentModal(<PaymentProductList payment={payment}/>)
        openCloseModal()
    }

  return (
    <>
    <Table className='table-payments-admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Mesa</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
                <Table.HeaderCell>Tipo de pago</Table.HeaderCell>
                <Table.HeaderCell>Fecha - Hora de pago</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Informacion</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                map(payments, (payment, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{payment._id}</Table.Cell>
                        <Table.Cell>{payment?.id_table?.number}</Table.Cell>
                        <Table.Cell>{payment.total_Payment} $RD</Table.Cell>
                        <Table.Cell>
                            <Icon name={getIconPaymentName(payment.payment_Type)} />
                            {payment.payment_Type}
                        </Table.Cell>
                        <Table.Cell>{moment(payment.createdAt).format("DD/MM/YYYY - LT")}</Table.Cell>
                        <Table.Cell textAlign='right'>
                            <Button icon onClick={() => showDetails(payment)}>
                                <Icon name='eye'></Icon>
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                ))
            }
        </Table.Body>

    </Table>

    <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
    />
    </>
  )
}
