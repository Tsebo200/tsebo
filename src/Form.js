import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const Form = ()=> {

    return(
        <div className="container">
            <div className="image-block"></div>
            <h1>Purchase Ticket</h1>
            <p className="introduction-text">Fill out the form below to purchase your ticket for the Open window Festival 2022</p>
            
            <Link to="/final">
            <button>Purchase</button>
            </Link>
        </div>
        
    )
}
export default Form