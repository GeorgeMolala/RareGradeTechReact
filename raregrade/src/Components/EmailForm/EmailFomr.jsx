import React, { useRef } from "react";
import "../EmailForm/EmailForm.css";
// import ModalVisibility from "../ModelScripts/ModalVisibility.js"
import emailjs from '@emailjs/browser';

const EmailForm=({ ModalVisibilitys, CloseModal})=>{
    
    
    const form = useRef();
    
    if (!ModalVisibilitys) {
        return null; 
      }
      
      

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8mzs068', 'template_jh826kf', form.current, {
            publicKey: 'tHwWRQDNmHJ2Ns7hM',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Successfully sent");
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert("Failed, try again later");
            },
          );
         
      };
 
    return(
        <div className="Form" id="Model-Show-Visible" >
            
            <form className="User-Form" ref={form} onSubmit={sendEmail}>
                <div className="UserName">
                    <label>Name </label>
                    <input type="text" name="user_name" required pattern="[A-Za-z]+" title="Provide valid Name"/>
                </div>

                <div className="UserEmail">
                    <label>Email</label>
                    <input type="email" name="user_email" required title="Provide valid Email"/>
                    <br/>
                </div>

                <div className="MEssage-Field">
                    <textarea type="text" placeholder="Talk to us" name="message" required title="Field can not be empty"/>
                </div>

                <div className="Buttons-Clickable">
                    <button type="submit">
                        Send
                    </button>

                    <button type="button" onClick={CloseModal} >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )

}
export default EmailForm;
