
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Blogs = ({items}) => {
    const { id, img, title, body } = items;
    return(
        <div key={id} className="col-lg-4">
                <div className="blog-cart">
                  <div className="img">
                    <Link href={{
                        pathname: "/blog/[blogId]",
                        query: {blogId: id},
                    }}>
                    <img src={img} alt="" />
                    </Link>
                  <div className="title">
                    <h3>
                    <Link href={{
                      pathname: "/blog/[blogId]",
                      query: {blogId: id},
                    }}>{body}</Link>
                    </h3>
                    <p>{title}</p>
                    <Link className="read" href={{
                      pathname: "/blog/[blogId]",
                      query: {blogId: id}
                    }}>Read More <FaAngleRight/></Link>
                  </div>
                  </div>
                </div>
              </div>
    );
}
export default Blogs;