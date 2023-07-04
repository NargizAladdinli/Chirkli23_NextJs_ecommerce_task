import { useContext } from "react";
import { ProductContext } from "@/context/product.context";
import Hoodies from "./Hoodies";


const HoodieItems = () => {
    const {product} = useContext(ProductContext);

    return(
        <section id="products">
      <div className="container">
        <div className="col-lg-8">
        <div className="row g-3">
          {product.map((products) => {
            return (
              <Hoodies products={products}/>
            );
          })}
        </div>
        </div>
      </div>
    </section>
    )
}
export default HoodieItems;