import React from 'react';

export default function ContactUs(props) {
  return (
    <div className='App1'>
    <div className="full-title">
    <div className="container">
			        <h1 className="mt-4 mb-3">Getting touch</h1>
              <h1 className="mt-4 mb-3">Drop a message</h1>
              <h2 className="mt-4 mb-3">-------------</h2>
		        </div>
	        </div>
      

          <div className="container">
		
		</div>
<div className='App'>
      <div className="row">
        <div className="address">
          <p/> No. 45/102A, New Street, Colombo. <p/>
         
         <p>
            <abbr title="Phone">Phone</abbr>: (011)-2236368
          </p>

          <div className='email'>
          <p> <abbr title="Email">Email </abbr>:
            <a href=" ceylonproducts@gmail.com"> ceylonproducts@gmail.com </a></p>
          <i className='icon email'></i>
          <br />
         </div>
         </div> 
        </div>
      </div>
      

<div className='app3'>    
      <div className="row">
        <div className="col-lg-8 mb-4 contact-left">
          <h6>Contact <b>CeylonProducts</b></h6>
          
          <div className='form-section2' >
          </div> 
        
          
          <form id="formal" name="formal" method="post" action="contactus.php">
           
          <div className="form-group form-box">
              <input type="text" id="name" className="input-text" placeholder="Name" required/>
          </div>

            <div className="form-group form-box">
              <input type="text" id="email" className="input-text" placeholder="Email" required/>
            </div>

            <div className="form-group form-box-area">
              <textarea className="text_field_contact_form_message"  id='message' placeholder='Type your message' cols="50" rows="5">
              <input type="text-area" id="message" className="input-text-area" placeholder="Message" required/>
              </textarea>
            </div>
         
            <div className="form-group form-box">
            <button type="button" class="btn primary-btn">Submit</button>
            </div>

          </form>
        </div>
      </div>
      </div>
  </div>
  )
}

