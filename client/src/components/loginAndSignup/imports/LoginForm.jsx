import React from 'react'

export default function LoginForm(props) {
  
  let{
    handleSubmit,
    setEmail,
    setPassword
  }=props.loginState;
  
  
  return (
    <div className='col-sm-7 bg-color align-self-center'>
    <div className="form-section">
        <div className="title">
        <h3>Welcome to <br/>Ceylon Products</h3>
        </div>
        <div className="login-inner-form">
            <form method="POST" onSubmit={handleSubmit}>


            <div className="form-group form-box">
              <i className='icon email'></i>
                <input type="text" id="email" onChange={e=>setEmail(e.target.value)} className="input-text" placeholder="Email"/>
            </div>


            <div className="form-group form-box">
            <i className='icon lock'></i>
                <input type="text" id="password" onChange={e=>setPassword(e.target.value)} className="input-text" placeholder="password"/>
            </div>

            <div className="form-group ">
            <button className='btn primary-btn'>Login</button>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}
