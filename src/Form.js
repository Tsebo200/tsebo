import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const Form = ()=> {

    return(
        <div className="container">
                   <div className="space-breaker"></div>
            <div className="image-block"></div>
            <h1>Purchase Ticket</h1>
            <p className="introduction-text">Fill out the form below to purchase your ticket for the Open window Festival 2022</p>
           
            <form>
                <label>Your Name & Surname</label>
                <div className= "input-breaker"></div>
                <input className= "input-text-spacing" type="text" placeholder="Test Student"></input><br></br>

                <label>Your Email</label>
                <div className= "input-breaker"></div>
                <input className= "input-text-spacing" type="text" placeholder="test@openwindow.co.za"></input><br></br>

                <label>Ticket Amount</label>
                <div className= "input-breaker"></div>
                <input  className= "input-text-spacing" type="number" placeholder="3"></input><br></br>

                <label>Ticket type</label>
                <div className= "input-breaker"></div>
                <select placeholder="Kiddies">
                    <option>Kiddies</option>
                     <option>Adult</option>
                     <option>Teens</option>
                </select><br></br>
            </form>
            <Link to="/final">
            <button>Purchase</button>
            </Link>
        </div>
        
    )
}
export default Form