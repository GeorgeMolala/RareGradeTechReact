import React from "react";
import "../NavBar/Navigation.css";
import platform from "../NavBar/MediaPlatforms/platforms.jsx";
import navLink from "../NavigationScripts/NavScript.js"


const Navigation = () =>{


    return (
        <div className="Nav-Wrapper">
           
            <div className="Nav-Itmes">  
             
                    <a href="#Home-Section"><img src="/icons/website-logo.png" className="ImageSizing"></img></a>                                       

                    <a href="#" onClick={()=>navLink('Services')}  className="left-Items">Servicess</a>
                    <a href="#" onClick={()=>navLink('About')}  className="left-Items">About</a>
                    <a href="#" onClick={()=>navLink('Contacts')} className="left-Items">Contacts</a>       
              
            </div> 


        </div>
    )
}

export default Navigation