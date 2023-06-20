import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const value = {open, setOpen, handleClose}
    return(
        <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
    );
}
export default SidebarProvider