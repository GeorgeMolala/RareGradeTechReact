import React from "react";
import "../Introduction-Page/Intro-Section.css";

const IntroSection = () =>{
    return (

        <div className="Intro-Section" id="Home-Section" >
        <div className="Intro-Section-Support">  

            <div className="Catchy-Phrase">
                <br/>
                <br/>
              <span>
                 Revolutionizing Brands with Digital Innovation!
              </span>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="catchy-section-styling">
                <span className="raregrade-image">
                    <img src="/Imags/Untitled-design-1024x1024.webp" alt="Background"></img>
               </span>

              <div className="Supporting-Catchy-Phrase">              
                <span className="Supporting-Catchy-Phrase-Supporting">
                Whether you're a startup, an established business, or an individual, Rare Grade Tech’s team is dedicated to providing solutions that fuel growth, 
                enhance operations, and leave a lasting impact.
                <br/>
                <br/>
                
                <div className="Wrapping-Catchy-Phrase">
                    <span className="">
                    Let us turn your imagination to reality
                
                    <br/>
                 
                    <a id="BookAppointment-button" href="https://raregradetech.com/book-appointment/"> Book An Appointment</a>
                    <a id="Email-button" href="https://raregradetech.com/book-appointment/">Tell Us Your Idea</a>
                  </span>
                </div>
                </span>             
              </div>
               
               <br/>
               <br/>
               <br/>
             
            </div>

          

           
        </div>


        </div>
    )
}
export default IntroSection