import "../Style/App.scss";
import Account from "./Account";
import HomeScreen from "../Components/HomeScreen/HomeScreen";

import Genres from "../Components/Genres/Genres";
import NavPanel from "../Components/NavPanel/NavPanel";
import Prime from "../Components/Prime/Prime";
import Hearing from "../Components/Hearing/Hearing";
import Catalog from "../Components/Catalog/Catalog";
import Profile from "../Components/Profiledetails/Profile";



import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";


import { useState, useCallback, useEffect } from 'react';
import { getAuth , onAuthStateChanged } from 'firebase/auth';
import { NavLink , BrowserRouter , Routes , Route , useNavigate } from "react-router-dom";

import Payment from "../Components/Payment/Payment";


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
    </Routes>
      <Account />
      <div className="container">
        <HomeScreen />

      <Account />

      <Profile />
      <div className="container">
        <HomeScreen />
        <Genres />
        <Prime />
        <Catalog />
        <Hearing />
        <NavPanel />

      <div className="container">
        <HomeScreen />
      </div>
      <Payment/>

    </>
  );
}

export default App;
