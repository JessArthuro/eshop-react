import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "../context/AppContext";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

function MyOrder() {
  const {
    state: { cart },
  } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    // El metodo reduce ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor.
    const sum = cart.reduce(reducer, 0);
    // El valor inicial sera cero y dependiendo del acumulador se ira sumando el valor
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((product, index) => (
          <OrderItem indexValue={index} key={index} product={product} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
}

export default MyOrder;
