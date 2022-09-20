import React , { useContext} from 'react'
import { Link } from "react-router-dom"
//shared
import Cart from '../Cart/Cart';
//context
import {CartContext} from '../../context/CartContextProvider'
const ShopCart = () => {
    const { state , dispatch }=useContext(CartContext);
    console.log(state.itemCounter)
  return (
    <div>
        <div>
            {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
        </div>
        
        {
          state.itemCounter > 0 && 
          <div>
            <p><span>Total Items:</span> {state.itemCounter}</p>
            <p><span>Total Payments:</span> {state.total}</p>
            <div>
              <button onClick={()=>dispatch({type:"CHECKOUT"})}>Check Out</button>
              <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
            </div> 
            </div> 

          
        }
        {
          state.checkOut && <div>
            <h4>checkout Successfully</h4>
            <Link to="/products">Buy more</Link>
          </div>
        }
        {
          !state.checkOut && state.itemCounter === 0 && <div>
            <h3>want to buy</h3>
            <Link to="/products">Buy more</Link>
          </div>
        }
    </div>
  ) 
}

export default ShopCart