import { ProductContext } from "@/context/product.context";
import Link from "next/link";
import { useContext } from "react";

const Products = () => {
  const { product } = useContext(ProductContext);

  return (
    <section id="products">
      <div className="container">
        <div className="row">
          {product.slice(4, 8).map((cart) => {
            return (
              <div key={cart.id} className="col-lg-3">
                <div className="carts">
                  <div className="img">
                    <Link href="#">
                      <img className="pos-one" src={cart.img} alt="" />
                      <img className="pos-two" src={cart.imgUrl} alt="" />
                    </Link>
                  </div>
                  <div className="content">
                    <Link href="#"><p>{cart.title}</p></Link>
                  </div>
                  <div className="add-cart">
                    <Link href="#">
                    <p>{cart.price}</p>
                    <button>Add to Card</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Products;
