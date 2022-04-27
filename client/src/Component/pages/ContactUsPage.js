import React from "react";

import ContactUs from "../buyer/ContactUs";
import ContactCeylon from "../buyer/ContactCeylon";

import HeaderImage from "../buyer/HeaderImage";



export default function ContactUsPage(props) {
  return (

    <div>
      <div className="image">
       
          <HeaderImage/>
          
      </div>
      
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
