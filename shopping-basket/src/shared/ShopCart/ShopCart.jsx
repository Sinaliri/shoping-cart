import React , { useContext} from 'react'
import { Link } from "react-router-dom"
//shared
import Cart from '../Cart/Cart';
//context
import {CartContext} from '../../context/CartContextProvider'
//react-bootstrap
import { Alert , Button, Col , Container , Row } from "react-bootstrap"
//import scss file
import "../ShopCart/ShopCart.scss"
const ShopCart = () => {
    const { state , dispatch }=useContext(CartContext);
    console.log(state.itemCounter)
  return (
<Container className='shopCartDetail'>
  <Row className='position-relative mt-4 '>

        
        {
          state.itemCounter > 0 && 
          <div>

          <Col xs={12} md={8} className="shopitem">
    
        <div>
            {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
        </div>
</Col>
      <Col md={{offset:1 , span:3}}  xs={12} className="sideCalculate rounded-5 border-danger d-flex justify-content-start align-items-start">
          <div className='sideCalculateMain d-flex justify-content-evenly align-items-start flex-column '>
            <p><span>Total Items:</span> {state.itemCounter}</p>
            <p><span>Total Payments:</span> {state.total}</p>
            <div className='checkoutButtonContainer w-100 d-block'>
              <Button className='me-1' onClick={()=>dispatch({type:"CHECKOUT"})}>Check Out</Button>
              <Button onClick={()=>dispatch({type:"CLEAR"})}>Clear</Button>
            </div> 
            </div> 


</Col>
          </div>
}
        {
          state.checkOut && <div>
            <Container className='mt-5'>
            <Col xs={12}>
            <Alert variant={"success"} style={{fontSize:'18px'}}>
              Checkout Successfully
            <br />
            <Link className='text-decoration-none' to="/products">Buy more</Link>
            </Alert>
            </Col>
            </Container>
          </div>
        }
        {
          !state.checkOut && state.itemCounter === 0 && 
          <Container className='mt-5'>
          <Col xs={12}>
          <Alert variant={"success"} style={{fontSize:'18px'}}>
            Want to buy
          <br />
          <Link className='text-decoration-none' to="/products">Buy more</Link>
          </Alert>
          </Col>
          </Container>
         
        }
    </Row>

    </Container>
  ) 
}

export default ShopCart