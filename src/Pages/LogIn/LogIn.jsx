import React from 'react'
import "./LogIn.scss"
import { useState, useEffect } from 'react';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LogIn(props) {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const {hideLogIn} = props.hideLogIn
  // console.log(props.hideLogIn);
  // console.log(hideLogIn);
  const {showSignUp} = props.showSignUp

  const [error , setError] = useState(false)

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
      props.hideLogIn()
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
                <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} required/>
                <button type='submit'>Continue</button>
                <p className='center_p'>Don't have an account?</p>
                <h4 onClick={props.showSignUp}>-Sign up</h4>
            </form>
        </div>
    </div>
  )
}
