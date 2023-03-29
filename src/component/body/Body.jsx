import React, { useEffect, useState } from "react";
import Product from "../product/product";
import "./body.css";

import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart,  } from "../facedb";

const Body = () => {
  const [products, setproduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  useEffect( () => {
const storeCart = getShoppingCart() ;
const savecart = [];
for(const id in storeCart){
const addedProduct = products.find(product => product.id === id);
if(addedProduct){
  const quantity = storeCart[id];
  addedProduct.quantity=quantity;
  savecart.push(addedProduct);
}
console.log('added product',addedProduct)
}
setCart(savecart);
  },[products])
  
  const handelAdd = (product) => {
    // cart.push(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAdd={handelAdd}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Body;
