import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mohith');
    const [isPending,setisPending]=useState(false); //to display loading..
    const navigate=useNavigate();

    const handleSubmit=e=>{
        e.preventDefault();
        const blog={title,body,author};
        setisPending(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setisPending(false);
            //navigate.go(-1);
            navigate('/');
        })

    }
    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required
                value={title}
                onChange={e=>setTitle(e.target.value)} //anonymous function..
                /><br></br>
                <label>Blog body:</label>
                <textarea required
               value={body}
               onChange={e=>setBody(e.target.value)}
                ></textarea><br></br>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={e=>setAuthor(e.target.value)}
                >
                    <option value="mohith">mohith</option>
                    <option value="eswar">eswar</option>
                </select><br></br>
                {!isPending?<button>Add blog</button>:<button disabled>adding blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;