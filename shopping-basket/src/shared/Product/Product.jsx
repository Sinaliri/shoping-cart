import React from 'react';
import { Link } from 'react-router-dom';
//helper
import { shorten , isInCart ,quantitycount} from '../../helper/helper'
//context
import { CartContext } from '../../context/CartContextProvider';
import { useContext } from 'react';
//icons
import trash from "../../assets/icons/trash.svg"
//react-bootstrap
import {Button , Card , Col} from 'react-bootstrap';
//scss file
import "./Product.scss"

const Product = ({productdetails}) => {
  const {state,dispatch}=useContext(CartContext)
  return (
    <Col  XS={12} sm={6} lg={4} xl={3}  className="mb-4 CardCol">
    <Card className='customCard rounded-4' style={{width : '265px',heigt:'auto'}} >
        <Card.Img  variant='top' fluid src={productdetails.image} alt="productimage" style={{width:"90%" , height:"200px"}} className='mx-auto my-4' />
        <Card.Body className='rounded-4' style={{backgroundColor:"#C689C6" , color:"#fff"}}>

        <Card.Title className='mt-2 d-flex justify-content-start'>{shorten(productdetails.title)}</Card.Title>
        <p><span style={{color:"#FFE6F7"}}>Price: </span>{productdetails.price} $</p>
        <div>
            <Link className="d-block mb-3" style={{
              textDecoration:0,
              color:"#FFABE1"

            }} to={`/products/${productdetails.id}`}>Details</Link>
            <div className="Buttongroup">
                {quantitycount(state,productdetails.id)> 1 && <Button className='buttonDecrease' onClick={()=>{dispatch({type:"DECREASE",payload:productdetails})}}>-</Button>}  
                {quantitycount(state,productdetails.id)===1 && <Button className='removeButton' onClick={()=>{dispatch({type:"REMOVE-ITEM",payload:productdetails})}}><img src={trash} alt="trashicon" fluid style={{height:"28px"}}/></Button>}  
                {quantitycount(state,productdetails.id)>0 && <span className='productCounterSpan'>{quantitycount(state,productdetails.id)}</span>}  
                {
                  isInCart(state,productdetails.id) ?
                  <Button className='increaseButton' onClick={()=>{dispatch({type:"INCREASE",payload:productdetails})}}>+</Button> :
                  <Button className="addToCard" onClick={()=>{dispatch({type:"ADD-ITEM",payload:productdetails})}}>add to cart</Button> 
                }
                

            </div>
        </div>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default Product