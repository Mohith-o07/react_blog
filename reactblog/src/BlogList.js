import { NavLink } from "react-router-dom";
const BlogList = ({blogs,title}) => {
   //const blogs=props.blogs;
   //console.log(props);
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <NavLink to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    </NavLink>
                    {/* <button onClick={()=>handleDelete(blog.id)}>delete blog</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;