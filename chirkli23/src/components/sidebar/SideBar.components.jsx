import { SidebarContext } from "@/context/Sidebar";
import { useContext } from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { CartContext } from "@/context/cart.context";

const SideBar = () => {
  const { cart } = useContext(CartContext);
  const { open, handleClose } = useContext(SidebarContext);
  return (
    <div className={open ? "sideopen" : "sideclose"}>
      <div className="items">
        <div className="sidebtn">
          <h4>Shopping Bag (0)</h4>
          <button onClick={handleClose}>X</button>
        </div>
        <div className="carItem">
          {cart.map((item) => {
            return <div>Cart </div>;
          })}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
