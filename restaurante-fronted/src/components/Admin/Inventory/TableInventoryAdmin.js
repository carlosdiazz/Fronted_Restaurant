import React,{useState} from 'react'
import {Table, Image, Button, Icon, Input, Search} from 'semantic-ui-react'
import {map} from 'lodash'

export function TableInventoryAdmin(props) {

    const {products, updateProductInventory, refetch} = props

    const [stock, setstock] = useState()

    const [searchProduct, setSearchProduct] = useState('')


    const cambiar_input = (value) => {
      setstock(parseInt(value.target.value))
    }

    const cambiar_input_search = (value) => {
      setSearchProduct(value.target.value)
  }


    return (
        <Table className='table-product-admin' color='teal' >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Imagen</Table.HeaderCell>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Stock</Table.HeaderCell>
              <Table.HeaderCell>Activo</Table.HeaderCell>
              <Table.HeaderCell>Agregar</Table.HeaderCell>
              <Table.HeaderCell textAlign='right' width={1}>
                <Search value={searchProduct} showNoResults={false} onSearchChange={cambiar_input_search}  placeholder="Filtrar por productos" /> 
              </Table.HeaderCell>
              <Table.HeaderCell width={1}><Input  type='number' value={stock}  onChange={cambiar_input }  placeholder="Ingrese Cantidad" /></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        <Table.Body>

        {map(products, (product, index )  =>  product.name.includes(searchProduct) ? (
          <Table.Row key={index}>
            <Table.Cell width={3}>
              <Image src={product.img_url} />
            </Table.Cell>
            <Table.Cell>{product.name}</Table.Cell>
            <Table.Cell>{product.stock}</Table.Cell>
            <Table.Cell className='status'>
                {product.is_active ? <Icon name='check'/> : <Icon name="close" />}
            </Table.Cell>
            <Actions product={product} updateProductInventory={updateProductInventory} stock={stock} refetch={refetch}/>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          
        ):null)}

      </Table.Body>

        </Table>
      );
    }

    const Actions = (props) => {

        const {product, updateProductInventory, stock, refetch} = props;

        const update = async () => {
          if(stock >0){
            await updateProductInventory(product._id, stock)
            refetch()
          }

        }

        return (
          <Table.Cell >
            <Button icon onClick={update} color="green">
              <Icon name='add' />
            </Button>
          
          </Table.Cell>
        )
      
      
      }
