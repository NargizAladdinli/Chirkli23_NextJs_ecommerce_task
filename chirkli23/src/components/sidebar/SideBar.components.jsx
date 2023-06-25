import { SidebarContext } from "@/context/Sidebar";
import { useContext } from "react";
import { CartContext } from "@/context/cart.context";
import CartItem from "../products/CartItem";
import { FaArrowAltCircleRight} from "react-icons/fa";

const SideBar = () => {
  const { cart } = useContext(CartContext);
  const { open, handleClose } = useContext(SidebarContext);
  return (
    <div className={open ? "sideopen" : "sideclose"}>
      <div className="items">
        <div className="sidebtn">
          <h4>Shopping Bag (0)</h4>
          <button onClick={handleClose}><FaArrowAltCircleRight/></button>
        </div>
        <div className="cartitem">
            {cart.map((item) => {
                return <CartItem item={item} key={item.id}/>;
            })}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
