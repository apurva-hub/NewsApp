import React from "react"; 
import { useState } from 'react';

function Navbar(props){
    const[currentCountry, setcurrentCountry] = useState("IN");

    return(
        

    <nav className="navbar">
    <div className="navbar_logo">
    <h1 className="logo_title">TIMES OF</h1>
      <select className="logo_dropdown" onChange={(event) => setcurrentCountry(event.target.value) }>
      <option value="IN">INDIA</option>
      <option value="US">US</option>
      </select>
      
    </div>
    <div className="navbar_category">
      <input className="nav_content" type="button" value="Business" onClick={() => props.fetch(currentCountry,"business")} />
      <input className="nav_content" type="button" value="Health" onClick={() => props.fetch(currentCountry,"health")} />
      <input className="nav_content" type="button" value="General" onClick={() => props.fetch(currentCountry,"general")} />
    </div>
    </nav>

    );
}



export default Navbar;