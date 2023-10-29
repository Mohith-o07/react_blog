import { NavLink } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry!</h2><br></br>
            <p><b>That page can't be found(error 404).</b></p><br></br>
            <NavLink to='/'>back to home page...</NavLink>
        </div>
    );
}
 
export default NotFound;