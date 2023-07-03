import { BlogContext } from "@/context/blogContext";
import Link from "next/link";
import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";

const BlogPage = () => {
  const { blog } = useContext(BlogContext);
  return (
    <section id="blog">
      <div className="container">
        <div className="row g-4">
          {blog.map((item) => {
            const { id, img, title, body } = item;
            return (
              <div key={id} className="col-lg-4">
                <div className="blog-cart">
                  <div className="img">
                    <Link href="#">
                    <img src={img} alt="" />
                    </Link>
                  <div className="title">
                    <h3>
                    <Link href="#">{body}</Link>
                    </h3>
                    <p>{title}</p>
                    <Link className="read" href="#">Read More <FaAngleRight/></Link>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BlogPage;
