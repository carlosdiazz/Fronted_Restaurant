import React from 'react'
import {Image, Button, Icon} from 'semantic-ui-react'
import {map} from 'lodash'
import {addProductCart} from '../../../api/cart'
import {toast} from 'react-toastify'
import './ListProducts.scss'

export function ListProducts(props) {

  const {products} = props

    const addCart = (product) => {
      addProductCart(product._id);
      toast.success(`${product.name} anadido correctamente`)
    }



  return (
    <div className="list-product-cart">
      {map(products, (product, index) => (
        <div key={index} className="list-product-cart__product">
          <div>
            <Image src={product.img_url} size='small' />
          </div>
          <span>{product.name}</span>
          <span>{product.price} €</span>
          <Button primary icon onClick={() => addCart(product)}>
            <Icon name='add'/>
          </Button>
        </div>
      ))}

      <Button primary fluid onClick={()=>console.log('d')}>
        Realizar pedido 
      </Button>
    </div>
  );
}