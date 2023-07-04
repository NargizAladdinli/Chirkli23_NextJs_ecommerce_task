import { useContext } from "react";
import { CartContext } from "@/context/cart.context";
import Link from "next/link";

const Hoodies = ({products}) => {
    const {addToCart} = useContext(CartContext);
    
    const {id, img, imgUrl, title, price} = products

    return(
        <div key={id} className="col-sm-6 col-md-5 col-lg-4 pb-4">
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
            </Link>
            <button onClick={() => addToCart(products, id)}>Add to Card</button>
          </div>
        </div>
      </div>

    )
}

export default Hoodies;