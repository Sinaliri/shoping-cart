import React from 'react';
import { Link } from 'react-router-dom';
//helper
import { shorten } from '../../helper/shorten'

const Product = ({productdetails}) => {
  return (
    <div>
        <img src={productdetails.image} alt="productimage" style={{width:"200px"}} />
        <h3>{shorten(productdetails.title)}</h3>
        <p>{productdetails.price}</p>
        <div>
            <Link to={`/products/${productdetails.id}`}>Details</Link>
            <div>
                <button>add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product