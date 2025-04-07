import React from "react";
import "../NavBar/Navigation.css";
import platform from "../NavBar/MediaPlatforms/platforms.jsx";
import navLink from "../NavigationScripts/NavScript.js"


const Navigation = () =>{
    return (
        <div className="Nav-Wrapper">
           
            <div className="Nav-Itmes">  
             
                    <a href="#Home-Section"><img src="/icons/website-logo.png" className="ImageSizing"></img></a>                                       

                    <a href="#Services"  className="left-Items">Services</a>
                    <a href="#About" className="left-Items">About</a>
                    <a href="#Contacts"  className="left-Items">Contacts</a>       
              
            </div> 


        </div>
    )
}

export default Navigation