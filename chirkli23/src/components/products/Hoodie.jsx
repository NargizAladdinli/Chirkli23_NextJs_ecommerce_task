import { useContext } from "react";
import { ProductContext } from "@/context/product.context";
import { CartContext } from "@/context/cart.context";
import Link from "next/link";

const HoodieItems = () => {
    const {product} = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);

    return(
        <section id="products">
      <div className="container">
        <div className="row g-3">
          {product.map((products) => {
            const {id, img, imgUrl, title, price} = products
            return (
              <div key={id} className="col-sm-6 col-md-4 col-lg-3 pb-4">
                <div className="carts">
                  <div className="img">
                    <Link href="#">
                      <img className="pos-one" src={img} alt="" />
                      <img className="pos-two" src={imgUrl} alt="" />
                    </Link>
                  </div>
                  <div className="content">
                    <Link href="#"><p>{title}</p></Link>
                  </div>
                  <div className="add-cart">
                    <Link href="#">
                    <p>${price}</p>
                    <button onClick={() => addToCart(products, id)}>Add to Card</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    )
}
export default HoodieItems;