import { BlogContext } from "@/context/blogContext";
import Link from "next/link";
import { useContext } from "react";

const BlogPage = () => {
  const { blog } = useContext(BlogContext);
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          {blog.map((item) => {
            const { id, img, title, body } = item;
            return (
              <div key={id} className="col-lg-4">
                <div className="blog-cart">
                  <div className="img">
                    <img src={img} alt="" />
                  </div>
                  <div className="title">
                    <Link href="#">
                        <h3>{body}</h3>
                    </Link>
                    <p>{title}</p>
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
