import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <section className="w-11/12 mx-auto my-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </section>
  );
};

export default Products;