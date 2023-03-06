import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const Form = ()=> {

    return(
        <div className="Container">
            <Link to="/final">
            <button>Purchase</button>
            </Link>
        </div>
        
    )
}
export default Form