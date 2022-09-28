import React from 'react'
import {Table, Image, Button, Icon} from 'semantic-ui-react'
import {map} from 'lodash'
import './TableProductAdmin.scss'

export  function TableProductAdmin(props) {

  const {products, updateProduct, deleteProduct} = props;

  return (
    <Table className='table-product-admin'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Imagen</Table.HeaderCell>
          <Table.HeaderCell>Producto</Table.HeaderCell>
          <Table.HeaderCell>Descripcion</Table.HeaderCell>
          <Table.HeaderCell>Precio</Table.HeaderCell>
          <Table.HeaderCell>Categoria</Table.HeaderCell>
          <Table.HeaderCell>Stock</Table.HeaderCell>
          <Table.HeaderCell>Activo</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(products, (product, index )  => (
          <Table.Row key={index}>
            <Table.Cell width={2}>
              <Image src={product.img_url} />
            </Table.Cell>
            <Table.Cell>{product.name}</Table.Cell>
            <Table.Cell>{product.description}</Table.Cell>
            <Table.Cell>{product.price} $RD</Table.Cell>
            <Table.Cell>{product.id_category?.name || 'Null'}</Table.Cell>
            <Table.Cell>{product.stock}</Table.Cell>
            <Table.Cell className='status'>
                {product.is_active ? <Icon name='check'/> : <Icon name="close" />}
            </Table.Cell>
            <Actions product={product} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
          </Table.Row>
        ))}

      </Table.Body>
    </Table>
  );
}

const Actions = (props) => {

  const {product, updateProduct, deleteProduct} = props;

  return (
    <Table.Cell textAlign='right'>
      <Button icon onClick={() => updateProduct(product)}>
        <Icon name='pencil' />
      </Button>

      <Button icon negative onClick={() => deleteProduct(product)}>
        <Icon name='close' />
      </Button>
    
    </Table.Cell>
  )


}