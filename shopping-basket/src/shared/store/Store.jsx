import React , {useContext} from 'react';

//context
import { ProductsContext } from '../../context/ProductConttextProvider';
//shared
import Product from '../Product/Product';
//react-bootstrap
import {Button , Card , Col , Container , Row} from 'react-bootstrap';
const Store = () => {
    const products=useContext(ProductsContext)
    console.log(products)
  return (
    <Container className='w-100' >
      <Row className='w-100'>
          <div className='d-flex justify-content-evenly align-items-center flex-wrap mt-5'  >
              {products.map(item => <Product key={item.id} productdetails={item} />)}
          </div>
      </Row>
    </Container>
  )
}

export default Store