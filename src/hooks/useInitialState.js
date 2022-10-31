import { useState } from "react";

const initialState = {
  cart: [],
};

// Custom hook para ser compartido a todos los componentes y obtener sus datos
const useInitialState = () => {
  // El estado inicial del carrito sera un array vacio
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      // En el arreglo cart quiero conservar los valores que tiene iniciados y ademas agregar los nuevos (productos = payload) que se van agregando
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      // El metodo filter condiciona que los elementos añadidos al carrito que no sean igual al indexValue que se selecciono se quedan pero el que coincide lo remueve 
      cart: state.cart.filter((_, index) => index !== indexValue),
    });
  };

  // Retornamos el valor de state y la funcion de añadir al carrito para que pueda ser accedida por cualquier componente
  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
