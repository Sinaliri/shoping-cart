import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductConttextProvider";
import { Link } from "react-router-dom";
//css file
import styles from "./Detailpage.module.css"
//react bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const DetailPage = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  console.log(product);
  const { image,title, price, description, category } = product;
  return (
    <Container className={styles.Container }>
      <Row>
    <Col xs={{span:10 , offset:1}} md={4} lg={4} className="mr-5 mb-xs-4">
     <img className={styles.imgfluid} src={image} alt="sss" fluid/>
    </Col>
<Col xs={12} lg={{ span: 5, offset: 1 }} md={{ span: 6, offset: 2 }} className="mt-5 mt-lg-5" >
     <div className="mt-xs-5">
        <h3 className={`${styles.title} mb-4`}>{title}</h3>
        <p>{description}</p>
        <p><span >Category :</span>{category}</p>
        <div>
          <span>{price} $</span>
          <br />
          <Link to="/products" className={styles.BTS}>Back to shop</Link>
        </div>
        
     </div>
</Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
