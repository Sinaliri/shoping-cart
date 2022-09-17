import React , {useContext} from 'react';

//context
import { ProductsContext } from '../../context/ProductConttextProvider';
//shared
import Product from '../Product/Product';

const Store = () => {
    const products=useContext(ProductsContext)
  return (
    <div style={{display:"flex" ,flexWrap:"wrap" , justifyContent:"space-around"}}>
        {products.map(item => <Product key={item.id} productdetails={item} />)}
    </div>
  )
}

export default Store