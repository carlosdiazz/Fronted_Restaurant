import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {map} from 'lodash'

import './TableUsers.scss'

export  function TableUser(props) {
  
  const {users} = props
  
  
    return (
    <Table className='table-users-admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Nickname</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Apellido</Table.HeaderCell>
                <Table.HeaderCell>Activo</Table.HeaderCell>
                <Table.HeaderCell>Staff</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                map(users, (user, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{user.nickname}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.first_name}</Table.Cell>
                        <Table.Cell>{user.last_name}</Table.Cell>
                        <Table.Cell className='status'>
                            {user.is_active ? <Icon name='check' /> : <Icon name='close' />}
                        </Table.Cell>
                        <Table.Cell className='status'>
                            {user.is_staff ? <Icon name='check' /> : <Icon name='close' />}
                        </Table.Cell>
                        <Table.Cell>
                            <Actions user={user} />
                        </Table.Cell>
                    </Table.Row>
                ))
            }
        </Table.Body>
    </Table>
  )
}


const Actions = (props) => {

    const {user} = props;

    return (
        <Table.Cell textAlign='right'>
            <Button icon onClick={() => console.log(user.email)}>
                <Icon name='pencil'/>
            </Button>
            <Button icon negative onClick={() => console.log("Eliminar")}>
                <Icon name='close'></Icon>
            </Button>
        </Table.Cell>
    )
}