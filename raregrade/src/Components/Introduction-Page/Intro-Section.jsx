import React, { useState } from "react";
import "../Introduction-Page/Intro-Section.css";
import UserFomr from "../EmailForm/EmailFomr.jsx"
// import ModalVisibility from "../ModelScripts/ModalVisibility.js"

const IntroSection = () =>{
     
  const [ModalVisibilitys, setModalState] = useState(false);

  const OpenModal =()=>setModalState(true);
  const CloseModal = () => setModalState(false)


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

                    <a id="Email-button" href="#" onClick={OpenModal}>Tell Us Your Idea</a>

                  </span>
                </div>
                </span> 



              </div>
               
              <div className="Modal-PopUp" id="Model-Show">
                
                  <UserFomr ModalVisibilitys={ModalVisibilitys} CloseModal={CloseModal} />
                  
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