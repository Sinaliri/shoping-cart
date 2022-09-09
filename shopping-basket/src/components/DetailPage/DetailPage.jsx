import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductConttextProvider";
import { Link } from "react-router-dom";

const DetailPage = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  console.log(product);
  const { image,title, price, description, category } = product;
  return (
    <div>
      DetailPage - {id}
     <img src={image} alt="sss" />
     <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><span>category:</span>{category}</p>
        <div>
          <span>{price} $</span>
          <Link to="/products">Back to shop</Link>
        </div>
     </div>
    </div>
  );
};

export default DetailPage;
