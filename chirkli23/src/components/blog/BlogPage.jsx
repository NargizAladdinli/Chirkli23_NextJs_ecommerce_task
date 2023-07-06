import { BlogContext } from "@/context/blogContext";
import { useContext } from "react";
import Blogs from "./Blogs";

const BlogPage = () => {
  const { blog } = useContext(BlogContext);
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
          <div className="row g-4">
          {blog.map((item) => {
            return (
              <Blogs key={item.id} items={item}/>
            );
          })}
        </div>
          </div>
          <div className="col-lg-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse corrupti ut, aut velit nemo commodi adipisci dolor et sed voluptatibus a mollitia labore facilis ipsum deserunt earum ab temporibus distinctio laborum provident alias eius. Non laboriosam soluta voluptatum accusantium. Totam quasi cumque corporis saepe laboriosam, voluptatibus alias unde quibusdam? Architecto magnam impedit explicabo natus eos ad dolorum adipisci omnis voluptas debitis deleniti laudantium minus fuga a eum alias deserunt aspernatur consequuntur unde sit sed, provident aliquam. Delectus nesciunt recusandae ipsa repellat mollitia consequatur corporis quis enim, deleniti ratione amet sint quia deserunt dolorem. Expedita eum aut, dolorum recusandae corrupti ipsum aspernatur sapiente voluptatem repellendus hic excepturi, accusantium amet consequatur molestiae architecto iure. Deserunt illum similique ipsam ut, harum repudiandae. Itaque, dolorum obcaecati.
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogPage;
