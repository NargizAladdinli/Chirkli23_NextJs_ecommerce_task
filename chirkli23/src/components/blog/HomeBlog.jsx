import { BlogContext } from "@/context/blogContext";
import { useContext } from "react";
import Blogs from "./Blogs";

const HomeBlog = () => {
    const {blog} = useContext(BlogContext)
    return(
        <section id="blog">
            <div className="container">
                <h3>Latest News</h3>
                <div className="row">
                    {blog.slice(0,3).map((item) => {
                        return(
                            <Blogs key={item.id} items={item}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
export default HomeBlog;