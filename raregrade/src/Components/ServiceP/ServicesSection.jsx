import React from "react";
import "../ServiceP/ServicesSection.css";
import datas from "../DataArray/ClientsLog.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ServicesSection =() =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        <div className="Services-Section" id="Services">
            <div className="Service-Section-Catchy-Phrase">             
                <span>
                   Empower your organisation with our services
                </span>                            
            </div>

            <br/>

            <div className="Service-Section-Catchy-Phrase-Supporting">
                <span>
                Give your brand the makeover it deserves – We’ll help you stand out with a look and service that catches eyes and wins hearts.
                </span>
            </div>
            
            <br/>
            <br/>
            <div className="Services-Section-Carousal">
                <div className="card">
                    <div className="Card-Image-warpper">
                         <img src="/servicescards/softwareSolutions.jfif" alt="card-image" />
                    </div>
                    

                    <div className="card-body">
                        <h3 className="card-title"> Software Solutions</h3>
                        <div className="card-supporting-data">
                           <span>- System Automation</span>  
                           <span>- Tailored Solution</span>  
                           <span>- Cloud-Based Solution</span>  
                           <span>- Intergration Capabilities</span>  
                           <span>- User-Friendly interfaces</span>                             
                        </div>
                       
                    </div>
                </div>


                    {/* Second Card */}
                <div className="card">
                    <div className="Card-Image-warpper">
                         <img src="/servicescards/WebApplication.jfif" alt="card-image" />
                    </div>
                    

                    <div className="card-body">
                        <h3 className="card-title"> Web & Mobile Apps</h3>
                        <div className="card-supporting-data">
                           <span>- App Development</span>  
                           <span>- Web Development</span>  
                           <span>- Application Integration</span>  
                           <span>- User Centric Design</span>  
                           <span>- Agile Development</span>                             
                        </div>
                       
                    </div>
                </div>



                    {/* Third Card */}
                <div className="card">
                    <div className="Card-Image-warpper">
                         <img src="/servicescards/GraphicDesign.jfif" alt="card-image" />
                    </div>
                    

                    <div className="card-body">
                        <h3 className="card-title"> Graphic Design</h3>
                        <div className="card-supporting-data">
                           <span>- Brand Identity</span>  
                           <span>- Digital Marketing Assets</span>  
                           <span>- Creative Direction</span>  
                           <span>- Sign and Typography</span>  
                           <span>- Print Materials</span>                             
                        </div>
                       
                    </div>
                </div>


                    {/* Fourth Card */}
                <div className="card">
                    <div className="Card-Image-warpper">
                         <img src="/servicescards/HardwareRepair.jfif" alt="card-image" />
                    </div>
                    

                    <div className="card-body">
                        <h3 className="card-title"> PC Repair</h3>
                        <div className="card-supporting-data">
                           <span>- Hardware Repair</span>  
                           <span>- Software Diagnostic</span>  
                           <span>- System Upgrade</span>  
                           <span>- Screen Replacement</span>  
                           <span>- Sell refurbished devices</span>                             
                        </div>
                       
                    </div>
                </div>

              

                
            </div>

            <div className="Clients-introduction">
                <div className="Clients-Catchy-Phrase">
                    <br/>
                    <br/>
                    <span>
                        Our Clients
                    </span>
                </div>

                <div className="Clients-Catchy-Phrase-supporting">
                    <br/>
                    <span>
                         Trusted by 47+ companies nationwide to deliver exceptional digital products & solutions
                    </span>
                    <br/>
                    <br/>
                </div>


            </div>

            <div className="Carousal-Positioning">
            <div className="Client-Carousal">
                    <br/>

                    <div className="slider">        
                        <Slider {...settings}>
                        {datas.map((d)=>(
                            <div className="client-logo-formatting">
                                <img src={d.image} alt="" />
                            </div>
                        ))}
                        </Slider>             
                        <br/>
                        <br/> 
                    </div>
            </div>
          
            </div>


        </div>
    )
}
export default ServicesSection