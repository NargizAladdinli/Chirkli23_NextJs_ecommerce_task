import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    

    const addToCart = (products, id) => {
        const newItem = {...products, amount: 1};
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if(cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount +1};
                } else  {
                    return item;
                }
            });
            setCart(newCart);
        } else{
            setCart([...cart, newItem]);
        }
    };

    const removeCart = (id) =>{
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    }
    
    return(
        <CartContext.Provider value={{cart, addToCart, removeCart}}>{children}</CartContext.Provider>
    )
}

export default CartProvider