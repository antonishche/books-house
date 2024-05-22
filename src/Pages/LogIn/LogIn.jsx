import React from 'react'
import "./LogIn.scss"
import { useState, useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LogIn() {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [error , setError] = useState(false)

  const navigate = useNavigate()

  useEffect(() => { 
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0);
    return () => document.body.style.overflow = 'visible'
  }, [])

  function getLoginData(event) {
    event.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      console.log(user);
      navigate("/")
    }).catch((e) => {
      setError(true)
      console.log(e);
    })
  }

  return (

    <div className='login_container'>
        <div className="login_box">
            <h2>Log in</h2>
            <form action="" onSubmit={getLoginData}>
              {error && <p className='err_text'>Incorrect password or email</p>}
                <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} required/>
                <button type='submit'>Continue</button>
                <p className='center_p'>Don't have an account?</p>
                <Link to="/signup" className='to_signup'>-Sign up</Link>
            </form>
        </div>
    </div>
  )
}
