import React from 'react'
import { Table, Image,  Button, Icon, Tab} from 'semantic-ui-react';
import {map} from 'lodash'

import './TableCategoryAdmi.scss'


export  function TableCategoryAdmi(props) {
  
  const {categories} = props;
    console.log(categories)
    return (
        <Table className='table-category-admin'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                    <Table.HeaderCell>Categoria</Table.HeaderCell>
                    <Table.HeaderCell>Descripcion</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {map(categories, (category, index) => (
                    <Table.Row key={index}>
                        <Table.Cell width={2}>
                            <Image src={'https://img.freepik.com/vector-premium/composicion-comida-rapida-vector-sobre-fondo-blanco_515421-407.jpg?w=2000'} />
                        </Table.Cell>
                        <Table.Cell>{category.name}</Table.Cell>
                        <Table.Cell>{category.description}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>

        </Table>
  )
}

const Action = (props) => {
    const {} = props;

    //return ()
}