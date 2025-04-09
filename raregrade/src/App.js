import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from "./Components/NavBar/Navigation.jsx";
import IntroSection from "./Components/Introduction-Page/Intro-Section.jsx";
import ServicesSection from "./Components/ServiceP/ServicesSection.jsx";
import Clientportal from "./Components/ClientRegister/ClientPortalRegistration.jsx";
import CompanyInfor from "./Components/CompanyInfor/CompanyInforPage.jsx";
import FooterSection from "./Components/FooterSection/FooterSection.jsx"
import UserFomr from "./Components/EmailForm/EmailFomr.jsx"


function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
       </div>
   
      <header className="App-header">

        <div className="Intro-Section-Front">
          <IntroSection/>
        </div> 

        {/* <div className="USerForm-Section-Front">
          <UserFomr/>
        </div> */}

        <div className="Service-Section-Front">
          <ServicesSection/>
        </div>

        <br/>

        <div className="Cleint-Portal-Front">
          <Clientportal/>
        </div>

        <br/>

        <div className="CompanyInfor-Section-Front">
          <CompanyInfor/>
        </div>

        <div className="Footer-Section-Front">
            <FooterSection/>
        </div>


      </header>

      
     
    </div>
  );
}

export default App;
