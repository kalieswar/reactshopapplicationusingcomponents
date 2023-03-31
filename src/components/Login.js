import React, { useEffect, useRef } from 'react';
import "../../src/components/Login.css";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/LoginAction';
import { useNavigate } from 'react-router';
import { loginEmailSuccess, loginPasswordSuccess } from '../slices/loginSlice';
import { Link } from 'react-router-dom';


export const Login = () => {
  const [email, setEmail]= useState();
  const[password, setPassword] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const emaill = useRef()
  const passsword =useRef()
  const getData = JSON.parse(sessionStorage.getItem("dataKey"));


  const { emailErrorMsg, passwordErrorMsg} = useSelector(state => state.loginState);
  const loginHandler = (e) =>{
      e.preventDefault();
      let userData = ['test@gmail.com', 'test1234']
      if(emaill.current.value==="test@gmail.com" && passsword.current.value==="test1234"){
        sessionStorage.setItem("dataKey",JSON.stringify(userData))
      }
      dispatch(login({email,password}))
  }
  
  useEffect(()=>{
    if(getData){
      dispatch(loginEmailSuccess())
      dispatch(loginPasswordSuccess())
    }
    
  },[getData, dispatch])


  return (

    <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-md-6 text-center mb-5'>
        <h2 className='pt-5'>Login Page</h2>
      </div>
    </div>
    <div className='row justify-content-center'>
      <div className='col-md-6 col-lg-4'>
        <div className='login py-5'>
          <h3 className='text-center mb-0 text-white'>Welcome</h3>
          <p className='text-center text-white'>Sign in to go to next page</p>
          {getData ? navigate("/Home") :
          <form className='login-form' onSubmit={loginHandler}>
            <div className='form-group'>
              <input type="email" className='form-control' placeholder='Email' ref={emaill} value={email} onChange={e =>setEmail(e.target.value)}/>
            </div>
            <div>{emailErrorMsg}</div>
            <div className='form-group'>
                <input type="password" className='form-control mt-3' ref={passsword} placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>{passwordErrorMsg}</div>
            <div className='form-group d-md-flex'>
                <div className='w-100 text-md-right forgot mt-3'>
                    <Link>Forgot password ?</Link>
                </div>
            </div>
            <div className='form-group Buttons'>
                <button className='btn btn-primary form-control rounded px-3 mt-3'>Sign In</button>
            </div>
          </form>}
        </div>
      </div>
    </div>
  </div>
  )
}
