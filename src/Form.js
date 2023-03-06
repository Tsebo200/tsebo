import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const Form = ()=> {

    return(
        <div className="container">
            <div className="image-block"></div>
            <h1>Purchase Ticket</h1>
            <p className="introduction-text">Fill out the form below to purchase your ticket for the Open window Festival 2022</p>
            <form>
                <label>Your Name & Surname</label><br></br>
                <input type="text" placeholder="Test Student"></input><br></br><br></br>

                <label>Your Email</label><br></br>
                <input type="text" placeholder="test@openwindow.co.za"></input><br></br><br></br>

                <label>Ticket Amount</label><br></br>
                <input type="number" placeholder="3"></input><br></br><br></br>

                <label>Ticket type</label><br></br>
                <input type="text" placeholder="Kiddies"></input><br></br><br></br>
            </form>
            <Link to="/final">
            <button>Purchase</button>
            </Link>
        </div>
        
    )
}
export default Form