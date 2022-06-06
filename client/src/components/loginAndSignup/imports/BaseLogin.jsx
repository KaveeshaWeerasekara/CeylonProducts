import React from 'react'
import{useLocation,useNavigate,Link} from 'react-router-dom';


export default function BaseLogin() {

const location=useLocation();
const navigate=useNavigate();

let defaultClass="nav-link link-btn btn-primary default-bg";
let active=" active"

const register=()=>navigate("/register")
const login=()=>navigate("/login")

  return (
    <div className='col-sm-5 bg-img align-self-center'>
        <div className='info'>
           <div className='logo clearfix'>
           <Link className='nav-brand' to='/'></Link>
         
            </div> 
            <div className='btn-section clearfix'>
                <button onClick={login} className={location.pathname==="/login"?defaultClass+ active : defaultClass}>Login</button>
                <button onClick={register} className={location.pathname==="/register"?defaultClass+active : defaultClass}>Register</button>
            </div>
        </div>
    </div>
  )
}
