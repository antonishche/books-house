import React from 'react'
import './SignUp.scss'
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp(props) {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [name , setName] = useState("")

  useEffect(() => { 
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'visible'
  }, [])

  function getRegistrData(event) {
    event.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password).then(user => {
      console.log(user);
      props.hideSignUp()
    }).catch((e) => console.log(e))
  }

  return (
    <div className='signup_container'>
        <div className="signup_box">
            <h2>Sign Up</h2>
            <form action="" onSubmit={getRegistrData}>
                <p>Looks like you don't have an account.</p>
                <p>Let's create a new account for you.</p>
                <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} required/>
                <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <p>By selecting Create Account below, I agree to</p>
                <h4>Terms of Service & Privacy Policy</h4>
                <button type='submit'>Create</button>
                <p className='center_p'>Already have an account?</p>
                <h4 onClick={props.hideSignUp}>-Log in</h4>
            </form>
        </div>
    </div>
  )
}
