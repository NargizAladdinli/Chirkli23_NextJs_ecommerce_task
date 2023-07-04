

const BlogId = (page) => {
    // const { context, } = data;
    console.log(page.title);
    return(
        <section id="blogid">
        <div className="container">
            <div className="row">
                <div className="" dangerouslySetInnerHTML={{__html: page.content}}></div>
                {/* <div>{data.title}</div> */}
            </div>
        </div>
    </section>
    )
}
export default BlogId

