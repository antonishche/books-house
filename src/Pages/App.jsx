import "../Style/App.scss";

import Account from "./Account";
import Explore from "./Explore";

import HomeScreen from "../Components/HomeScreen/HomeScreen";
import Payment from '../Components/Payment/Payment.jsx';
import Profile from '../Components/Profiledetails/Profile';
import SignOut from "../Components/SignOut/SignOut";

import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";


import { useState, useCallback, useEffect } from 'react';
import { getAuth , onAuthStateChanged } from 'firebase/auth';
import { Routes , Route , useNavigate } from "react-router-dom";

function App() {
  
  const navigate = useNavigate()
  const auth = getAuth()

  const [user , setUser] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth , (currentUser)=>{
      if (!currentUser) {
        navigate("/login")
        setUser({
          displayName: null,
          email: null
        })
        return
      }
      setUser({
        displayName: currentUser.displayName,
          email: currentUser.email
      })
    })
  }, [])

  if (!user) {
    return <h1>Loading...</h1>
  }

  return (
    <>
    <Routes>
      <Route path="/login" element={<LogIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/account/*" element={<Account />} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/exit" element={<SignOut/>} />
    </Routes>
    </>
  );
}

export default App;
