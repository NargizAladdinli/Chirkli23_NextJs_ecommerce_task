import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();


const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        const fetchProducts = async () => {
            const response = await fetch('https://json-server-mx04u3baj-nargizaladdinli.vercel.app/cats');
            const data = await response.json();
            setProduct(data)
            console.log(data);
        }
        fetchProducts()
    }, [])
    return(
        <ProductContext.Provider value={{product}}>{children}</ProductContext.Provider>
    )
}

export default ProductProvider;