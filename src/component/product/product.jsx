import React from "react";
import "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
  import { faDollar } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
  const { picture, name, gender, price } = props.product;
const handelAdd = props.handelAdd;
 

  return (
    <div className="product">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <h2>{gender}</h2>
      <h3>{price} <FontAwesomeIcon icon={faDollar} /></h3>
      <button onClick={() => handelAdd (props.product)} >Buy now <FontAwesomeIcon icon={faCartPlus} /></button>
    </div>
  );
};

export default Product;
