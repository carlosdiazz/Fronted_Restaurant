import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {map} from 'lodash'
import './TableTablesAdmin.scss'

export function TableTablesAdmin(props) {

  const {tables, updateTable, deleteTables} = props

  return (
    <Table className='table-tables-admin'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre mesa</Table.HeaderCell>
            <Table.HeaderCell>Numero de mesa</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

      <Table.Body>
        {
          map(tables, (table, index) => (
            <Table.Row key={index}>
                <Table.Cell>{table.name}</Table.Cell>
                <Table.Cell>{table.number}</Table.Cell>
                <Actions table={table} updateTable={updateTable} deleteTables={deleteTables}></Actions>
            </Table.Row>
          ))
        }
      </Table.Body>

    </Table>
  )
}


const Actions = (props) => {
  const {table, updateTable, deleteTables} = props
  return (
    <Table.Cell textAlign='right'>
      <Button icon onClick={() => updateTable(table)}>
        <Icon name='pencil'/>
      </Button>

      <Button icon negative onClick={() => deleteTables(table)}>
        <Icon name='close'/>
      </Button>
    </Table.Cell>
  )


}