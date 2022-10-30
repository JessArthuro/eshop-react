import { useEffect, useState } from "react";
import axios from "axios";

// customHook para manejar toda la logica de la obtencion de datos en la API
const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return products;
};

export default useGetProducts;
