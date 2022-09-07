import React from 'react';
//helper
import { shorten } from '../../helper/shorten'

const Product = ({productdetails}) => {
  return (
    <div>
        <img src={productdetails.image} alt="productimage" style={{width:"200px"}} />
        <h3>{shorten(productdetails.title)}</h3>
        <p>{productdetails.price}</p>
        <div>
            <a href="#">Details</a>
            <div>
                <button>add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product