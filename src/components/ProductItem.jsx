import React, { useContext } from "react";
import "@styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import addToCartImage from "@icons/bt_add_to_cart.svg";

function ProductItem({ product }) {
  const { addToCart } = useContext(AppContext);

  // Esta funcion recibe el producto añadido pero se manda con el valor de item para no generar conflicto con el parametro declarado en el componente
  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;
