import React, { useContext } from 'react'
 //constext
 import { CartContext } from '../../context/CartContextProvider'

 //FUNCTION
 import { shorten } from '../../helper/helper';
 //icon
 import trashIcon from "../../assets/icons/trash.svg"
const Cart = (props) => {
    const {dispatch}=useContext(CartContext);
    const {image , title , price , quantity } = props.data
  return (
    <div>
        <img src={image} alt="" />
        <div>
            <h3>{shorten(title)}</h3>
            <p>{price} $</p>
        </div>
        <div>
            <span>{quantity}</span>
        </div>
        <div>
            {quantity > 1 ?
            <button>{()=>dispatch({type:"DECREASE", payload:props.data})}</button> :
            <button>{()=>dispatch({type:"REMOVE-ITEM", payload:props.data})}<img src={trashIcon} alt="trash-icon"/></button> 
            }
            <button onClick={()=>dispatch({type:"INCREASE" , payload: props.data})}>+</button>
        </div>
    </div>
  )
}

export default Cart