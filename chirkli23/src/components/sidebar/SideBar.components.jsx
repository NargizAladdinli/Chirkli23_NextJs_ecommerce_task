import { SidebarContext } from "@/context/Sidebar";
import { useContext } from "react";
import { CartContext } from "@/context/cart.context";
import CartItem from "../products/CartItem";
import { FaArrowAltCircleRight, FaTrash} from "react-icons/fa";

const SideBar = () => {
  const { cart, clearCart, total } = useContext(CartContext);
  const { open, handleClose, itemAmount } = useContext(SidebarContext);
  return (
    <div className={open ? "sideopen" : "sideclose"}>
      <div className="items">
        <div className="sidebtn">
          <h4>Shopping Bag {itemAmount}</h4>
          <button onClick={handleClose}><FaArrowAltCircleRight/></button>
        </div>
        <div className="cartitem">
            {cart.map((item) => {
                return <CartItem item={item} key={item.id}/>;
            })}
        </div>
      </div>
        <div className="sidebarbottom">
          <div className="total"><span>Total:</span> $ {parseFloat(total).toFixed(2)}</div>
          <div onClick={clearCart} className="trash"><FaTrash/></div>
        </div>
    </div>
  );
};
export default SideBar;
