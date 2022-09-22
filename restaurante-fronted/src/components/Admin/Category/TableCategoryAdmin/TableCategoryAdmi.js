import React from 'react'
import { Table, Image,  Button, Icon, Tab} from 'semantic-ui-react';
import {map} from 'lodash'
import './TableCategoryAdmi.scss'


export  function TableCategoryAdmi(props) {
  
  const {categories} = props;
  //!Borrar
    console.log(categories)
    return (
        <Table className='table-category-admin'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                    <Table.HeaderCell>Categoria</Table.HeaderCell>
                    <Table.HeaderCell>Descripcion</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {map(categories, (category, index) => (
                    <Table.Row key={index}>
                        <Table.Cell width={2}>
                            <Image src={category.imgUrl} />
                        </Table.Cell>
                        <Table.Cell>{category.name}</Table.Cell>
                        <Table.Cell>{category.description}</Table.Cell>
                        <Action category={category}/>
                    </Table.Row>
                ))}
            </Table.Body>

        </Table>
  )
}

const Action = (props) => {
    const {category} = props;

    return (
        <Table.Cell textAlign='right'>
            <Button icon onClick={()=>console.log("Actualizar Categoria")}>
                <Icon name ='pencil'></Icon>
            </Button>
            <Button icon negative onClick={()=>console.log("Elimar Categoria")}>
                <Icon name='close'></Icon>

            </Button>
        </Table.Cell>
    )
}