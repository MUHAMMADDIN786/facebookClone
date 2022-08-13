import React from 'react'
import { Button } from '@mui/material'
import './Login.css'
import {auth, provider} from "./firebase"
import { useNavigate } from 'react-router-dom'


function Login() {
    const SignIn= async ()=>{
        auth.signInWithPopup(provider)
        .then((res)=>{
          console.log(res.additionalUserInfo);
          sessionStorage.setItem("facebookuser", JSON.stringify(res.additionalUserInfo))
        })
        .catch((err)=>{alert(err.message)})
    }
  return (
    <div className='login'>
      <div className='login__logo'>
        <img  src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'></img>
        <img    src='https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png'></img>
      </div>
      <Button type='submit' onClick={SignIn}>SignIn
      </Button>
    </div>
  )
}

export default Login
