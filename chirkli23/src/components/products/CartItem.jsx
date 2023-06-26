import Link from "next/link";
import { FaMinus, FaPlus, FaWindowClose } from "react-icons/fa";
import { CartContext } from "@/context/cart.context";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const {removeCart} = useContext(CartContext)
  const { id, title, price, img, amount } = item;
  return (
    <div className="flex">
      <div className="carts d-flex">
        <div className="img">
          <Link href="#">
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="content">
          <Link href="#">{title}</Link>
          <div className="boxing d-flex align-items-center">
            <div className="title">
              <button className="toggle">
                <FaMinus />
              </button>
              <span>{amount}</span>
              <button className="toggle">
                <FaPlus />
              </button>
            </div>
            <div className="price">
              <span className="first-price">${price}</span>
              <span className="total-price ">{`$${parseFloat(price * amount).toFixed(2)}`}</span>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => removeCart(id)} style={{ background: "none" }}>
        <FaWindowClose />
      </button>
    </div>
  );
};
export default CartItem;
