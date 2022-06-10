import React from "react";

import Nav from '../../components/Client Panel/Nav'
import ContactUs from "../../components/Client Panel/contactUs/imports/ContactUs";
import ContactCeylon from "../../components/Client Panel/contactUs/imports/ContactCeylon";

export default function ContactUsPage(props) {

  return (
    <div className=" ">
      <Nav />
   
      <div className=" grid grid-flow-row grid-cols-2 grid-rows-1">
     
           
         
         
            <div className=" col-start-1">
              <ContactCeylon />
            
          </div>
          <div className=" col-start-2 pl-10">
              <ContactUs />
            </div>

      </div>

       

      
    </div>

  )
}


