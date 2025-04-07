import React from "react";
import "../ClientRegister/ClientPortalRegistration.css"


const ClientPortalRegistration = () => {
  
    return(
    <div className="Client-Portal">

        <div className="Client-Portal-Wrapper"> 
            <img src="/LogInSection/LogIn-Section.png" alt="image"/>
        </div>

        <div className="Clients-Portals-Catchy-Phrase"> 
          <span>  Log In or Register  </span>
         
          <div className="Supporting-Clients-Portals-Catchy-Phrase">
            <span>
            Registering on our business portal gives you access to a personalized client dashboard, where you can easily manage invoices, 
            track project progress, view proposals, access contracts, and get instant quotations. 
            This streamlined platform ensures seamless communication and keeps you updated on all aspects of your business interactions with us.
            </span>
          </div>


        </div>

        <div className="CLient-Button">
            <a href="https://dashboard.raregradetech.com/authentication/login">
                SignUp/LogIn
            </a>
          </div>

    </div>  
    )

}

export default ClientPortalRegistration;