import React, { useContext } from 'react'
 //constext
 import { CartContext } from '../../context/CartContextProvider'

 //FUNCTION
 import { shorten } from '../../helper/helper';
 //icon
 import trashIcon from "../../assets/icons/trash.svg"
 //react-bootstrap
 import { Container , Row , Col , Button  } from 'react-bootstrap';
 //scss file
 import "./Cart.scss"
const Cart = (props) => {
    const {dispatch}=useContext(CartContext);
    const {image , title , price , quantity } = props.data
  return (
    <Container>
        <Row className=''>
                <Col xs={12} >
                <div className='d-flex justify-content-center align-items-center CartContainer my-2 flex-wrap rounded-5 p-3'>
                    <Col xs={2}  md={2} lg={{span:2}} >
                    <img src={image} alt="" fluid className='rounded-3'/>
                    </Col>
                    <Col xs={{span:6 , offset:1}} md={5} lg={{span:6 , offset:1}}>
                    <div style={{color:"#fff"}}>
                            <h3>{shorten(title)}</h3>
                        <p>Price: {price} $</p>
                    </div>
                    <div >   
                        <span className='QuantityCounter'>Quantity: {quantity}</span>
                    </div>
                    </Col>
                    <Col xs={3} md={3} lg={2}>
                    <div className='cartButtonContainer'>
                        {quantity > 1 ?
                        <Button onClick={()=>dispatch({type:"DECREASE", payload:props.data})}>  -</Button> :
                        <Button onClick={()=>dispatch({type:"REMOVE-ITEM", payload:props.data})} className='d-flex justify-content-center align-items-center flex-wrap'> <img src={trashIcon} fluid alt="trash-icon" /></Button> 
                    }
                        <Button  onClick={()=>dispatch({type:"INCREASE" , payload: props.data})} className='ml-1'>+</Button>
                    </div>
                    </Col>
                </div>
                </Col>

        </Row>
    </Container>
  )
}

export default Cart