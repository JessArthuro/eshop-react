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

  // Retornamos el valor de state y la funcion de añadir al carrito para que pueda ser accedida por cualquier componente
  return {
    state,
    addToCart,
  };
};

export default useInitialState;