import { SidebarContext } from "@/context/Sidebar";
import { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";

const SideBar = () => {
    const {open, handleClose} = useContext(SidebarContext)
    return(
        <div className={ open ? "open" : "closes" }> 
            
        </div>
    );
}
export default SideBar;