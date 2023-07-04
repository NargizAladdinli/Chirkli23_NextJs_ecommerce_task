import { BlogContext } from "@/context/blogContext";
import Link from "next/link";
import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";
import Blogs from "./Blogs";

const BlogPage = () => {
  const { blog } = useContext(BlogContext);
  return (
    <section id="blog">
      <div className="container">
        <div className="row g-4">
          {blog.map((item) => {
            const { id, img, title, body } = item;
            return (
              <Blogs items={item}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BlogPage;
