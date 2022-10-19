import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {map} from 'lodash'
import moment from 'moment'

export function TableInventoryHistoryAdmin(props) {

    const {inventarios} = props

    return (
        <>
        <Table className='table-payments-admin' color='green'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Movimiento</Table.HeaderCell>
                    <Table.HeaderCell>Tipo de Movimiento</Table.HeaderCell>
                    <Table.HeaderCell>Fecha</Table.HeaderCell>
                </Table.Row>
            </Table.Header>


            <Table.Body>
            {
                map(inventarios, (inventario, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{inventario._id}</Table.Cell>
                        <Table.Cell>{inventario?.id_product?.name}</Table.Cell>
                        <Table.Cell>{inventario.movimiento}</Table.Cell>
                        <Table.Cell>{inventario.tipo_movimiento}</Table.Cell>
                        <Table.Cell>{moment(inventario.createdAt).format("DD/MM/YYYY - LT")}</Table.Cell>

                    </Table.Row>
                ))
            }
        </Table.Body>

        </Table>

        </>
      )
}
