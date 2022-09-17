import React from 'react';
import { Link } from 'react-router-dom';
//helper
import { shorten , isInCart ,quantitycount} from '../../helper/helper'
//context
import { CartContext } from '../../context/CartContextProvider';
import { useContext } from 'react';
//icons
import trash from "../../assets/icons/trash.svg"

const Product = ({productdetails}) => {
  const {state,dispatch}=useContext(CartContext)
  return (
    <div>
        <img src={productdetails.image} alt="productimage" style={{width:"200px"}} />
        <h3>{shorten(productdetails.title)}</h3>
        <p>{productdetails.price}</p>
        <div>
            <Link to={`/products/${productdetails.id}`}>Details</Link>
            <div>
                {quantitycount(state,productdetails.id)> 1 && <button onClick={()=>{dispatch({type:"DECREASE",payload:productdetails})}}>-</button>}  
                {quantitycount(state,productdetails.id)===1 && <button onClick={()=>{dispatch({type:"REMOVE-ITEM",payload:productdetails})}}><img src={trash} alt="trashicon"/></button>}  
                {
                  isInCart(state,productdetails.id) ?
                  <button onClick={()=>{dispatch({type:"INCREASE",payload:productdetails})}}>+</button> :
                  <button onClick={()=>{dispatch({type:"ADD-ITEM",payload:productdetails})}}>add to cart</button> 
                }
                

            </div>
        </div>
    </div>
  )
}

export default Product