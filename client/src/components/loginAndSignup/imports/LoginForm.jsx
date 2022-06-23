import React from 'react'

export default function LoginForm(props) {
  
  let{
    handleSubmit,
    setEmail,
    setPassword
  }=props.loginState;

  //const [loading,setLoading]=useState(false);
  // const [email,setEmail]=useState();

  // const submitHandler=async()=>{
  //   setLoading(true);
  //   if(!email||!password){
  //     alert("Please Fill the fields");
  //   }
  // }
  
  
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
                <input type="password" id="password" onChange={e=>setPassword(e.target.value)} className="input-text" placeholder="password"/>
            </div>

            <div className="form-group ">
            <button className='btn primary-btn' >Login</button>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}
