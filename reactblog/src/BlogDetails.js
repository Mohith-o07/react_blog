import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog,error,isPending}=useFetch('http://localhost:8000/blogs/'+id);
    const navigate=useNavigate();
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method:"DELETE",
        }).then(()=>{
            navigate('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p><i>written by {blog.author}</i></p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;