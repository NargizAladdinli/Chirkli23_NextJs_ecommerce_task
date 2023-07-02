import { createContext, useEffect, useState } from "react";


export const BlogContext = createContext();

const BlogProvider = ({children}) => {
    const [blog, setBlog] = useState([]);
    const value = {blog, setBlog};

    useEffect(() => {
        const blogProducts = async() => {
            const response = await fetch('https://json-server-tan-kappa.vercel.app/blogchirkli');
            const data = await response.json();
            setBlog(data);
        }
        blogProducts()
    }, [])

    return(
        <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    )
}
export default BlogProvider;