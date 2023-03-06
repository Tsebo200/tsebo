import React from "react";
import './index.css';
import { Link } from "react-router-dom";

const FinalForm = () => {
    return(
        <div className="final-container">
            <div className="space-breaker"></div>
            <div className="final-image-block"></div>

            <br></br>
            <hr></hr>

            <h3>Final Price</h3>
            <h2>R 450.00</h2>

            <p className="thank-you-msg">Thank you test student or purchasing 3 tickest. We sent your tickets to <br></br> 
             test@openwindow.co.za.
            </p>

            <Link to="/">
            <center><button>One More Ticket🙂</button></center>
            </Link>
        </div>
        
    )
}

export default FinalForm