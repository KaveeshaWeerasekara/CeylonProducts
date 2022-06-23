import React from "react";

import Nav from "../../components/Client Panel/Nav";

import Footer from "../../components/Client Panel/Footer";

import ContactCeylon from "../../components/Client Panel/contactUs/imports/ContactCeylon";
import ContactusCeylon from "../../components/Client Panel/contactUs/imports/ContactusCeylon";

export default function ContactUsPage(props) {
  return (
    <div>
      <Nav />

      <div>
        <div className=" grid grid-flow-row grid-cols-2 grid-rows-1">
          <div className=" col-start-1">
            <ContactCeylon />
          </div>
          <div className=" col-start-2 ">
          <ContactusCeylon />
        </div>
          
        </div>

       
      </div>
    </div>
  );
}
