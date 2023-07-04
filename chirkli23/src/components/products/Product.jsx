import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/cart.context";

const Product = ({product}) => {
  const {addToCart} = useContext(CartContext);
    const {img, id, price,imgUrl, title} = product;
    return(
        <div key={id} className="col-sm-6 col-md-4 col-lg-3">
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
                     <button onClick={() => addToCart(product, id)}>Add to Card</button>
                     </Link>
                   </div>
                 </div>
               </div>
    );
}
export default Product;