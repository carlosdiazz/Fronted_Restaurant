import React,{useState} from 'react'
import {Table, Search} from 'semantic-ui-react'
import {map} from 'lodash'
import moment from 'moment'

import './TableInventoryHistory.scss'

export function TableInventoryHistoryAdmin(props) {

    const {inventarios} = props

    const [searchProduct, setSearchProduct] = useState('')

    const cambiar_input = (value) => {
        setSearchProduct(value.target.value)
    }

    return (
        <>
        <Search value={searchProduct} showNoResults={false} onSearchChange={cambiar_input}  placeholder="Filtrar por productos" />
        <div id="content">
        <h3>Historial de Inventarios </h3>
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
                map(inventarios, (inventario, index) => inventario?.id_product?.name.includes(searchProduct) ? (
                    <Table.Row key={index}>
                        <Table.Cell>{inventario._id}</Table.Cell>
                        <Table.Cell>{inventario?.id_product?.name}</Table.Cell>
                        <Table.Cell>{inventario.movimiento}</Table.Cell>
                        <Table.Cell>{inventario.tipo_movimiento}</Table.Cell>
                        <Table.Cell>{moment(inventario.createdAt).format("DD/MM/YYYY - LT")}</Table.Cell>

                    </Table.Row>
                ):null)
            }
        </Table.Body>

        </Table>

        </div>
        </>
      )
}
