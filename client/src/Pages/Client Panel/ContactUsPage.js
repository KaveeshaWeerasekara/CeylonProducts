import React from "react";

import Nav from '../../components/Client Panel/Nav'
import ContactUs from "../../components/Client Panel/contactUs/imports/ContactUs";
import ContactCeylon from "../../components/Client Panel/contactUs/imports/ContactCeylon";

export default function ContactUsPage(props) {
 
  return (
  <div >
        <div className="image"></div>
      
    <div>
      
        <div className="split right">
          <div className="centered">
            <ContactUs/>
            </div>
        </div>
        
        <div className="split left">
            <div className="centered">
                <ContactCeylon/>
            </div>
        </div>
    </div>
    
</div>

  )
}


