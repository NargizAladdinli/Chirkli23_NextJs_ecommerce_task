import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] =useState(0);
    
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumlator, currenItem) => {
                return accumlator + currenItem.amount;
            },0);
            setItemAmount(amount);
        }
    })
    

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

    const increaseAmount = (id) => {
        const item = cart.find((item) => item.id === id);
        addToCart(item, id);
    }
    
    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => {
            return item.id === id;
        });
        if(cartItem) {
          const newCart = cart.map(item => {
            if(item.id === id){
                return {...item, amount: cartItem.amount - 1}
            } else{
                return item;
            }
            });
            setCart(newCart);
        } 
            
        if(cartItem.amount < 2){
                removeCart(id);
            }
        
    }

    const clearCart = () => {
        setCart([])
    }
    return(
        <CartContext.Provider value={{cart, addToCart, removeCart, increaseAmount, decreaseAmount, clearCart, itemAmount}}>{children}</CartContext.Provider>
    )
}

export default CartProvider