import { ProductContext } from "@/context/product.context";
import { useContext } from "react";
import Product from "./Product";

const Products = () => {
  const { product } = useContext(ProductContext);

  return (
    <section id="products">
      <div className="container">
        <h3>New Product</h3>
        <div className="row g-3">
          {product.slice(4,8).map((products) => {
            return(
              <Product product={products}/>
            )
          })}
        </div>
      </div>
    </section>
  );
};
export default Products;
