import React, { useState, useContext } from "react";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import "@styles/Header.scss";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "../context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.svg";

function Header() {
  // Usamos el contexto para poder acceder al hook en useInitialState y obtener el valor de cart. Desestructuramos las propiedades del objeto para poder acceder mas facil
  const {
    state: { cart },
  } = useContext(AppContext);

  // Estado para mostrar/ocultar el Menu
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Estado para mostrar/ocultar MyOrder
  const [toggleOrders, setToggleOrders] = useState(false);

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoppingCart} alt="shopping cart" />
            {/* Validacion para mostrar dependiendo de la longitud de la propiedad cart, la cantidad de elementos añadidos al carrito */}
            {cart.length > 0 ? <div>{cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder /> }
    </nav>
  );
}

export default Header;
