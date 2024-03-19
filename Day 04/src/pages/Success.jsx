import React from "react";
import '../assets/css/Success.css';
import { Link } from "react-router-dom";
export default function Success(){
    
    return(
        <div className="success">
            <div className="success-msg ">
                <p>Success! <br/>Your form has been submitted.<br/>Redirect to Billing Page ? </p>
             <Link to='/billing'>   <button type="submit" className="book_sub">Yes</button>&nbsp; </Link>
             <Link to='/service'>   <button type="submit" className="book-sub">No</button> </Link>
              </div>
              </div>  
    );
}