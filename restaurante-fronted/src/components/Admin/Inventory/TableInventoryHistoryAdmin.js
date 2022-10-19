import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'

export function TableInventoryHistoryAdmin() {
    return (
        <>
        <Table className='table-payments-admin'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Movimiento</Table.HeaderCell>
                    <Table.HeaderCell>Tipo de Movimiento</Table.HeaderCell>
                    <Table.HeaderCell>Fecha</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

        </Table>

        </>
      )
}
