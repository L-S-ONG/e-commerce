import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Products from "./Products";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const getProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="min-h-screen">
        {isLoading ? (
          <div className="loader animate-spin"></div>
        ) : (
          <Products products={products}></Products>
        )}
      </div>
    </>
  );
};

export default Shop;