import React from 'react'
import { Table, Image,  Button, Icon} from 'semantic-ui-react';
import {map} from 'lodash'
import './TableCategoryAdmi.scss'


export  function TableCategoryAdmi(props) {
  
  const {categories, updateCategory, deleteCategory} = props;

    return (
        <Table className='table-category-admin' color='teal'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                    <Table.HeaderCell>Categoria</Table.HeaderCell>
                    <Table.HeaderCell>Descripción</Table.HeaderCell>
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
                        <Action category={category} updateCategory={updateCategory} deleteCategory={deleteCategory}/>
                    </Table.Row>
                ))}
            </Table.Body>

        </Table>
  )
}

const Action = (props) => {
    const {category, updateCategory, deleteCategory} = props;

    return (
        <Table.Cell textAlign='right'>
            <Button icon onClick={()=>updateCategory(category)}>
                <Icon name ='pencil'></Icon>
            </Button>
            <Button icon negative onClick={()=>deleteCategory(category)}>
                <Icon name='close'></Icon>

            </Button>
        </Table.Cell>
    )
}