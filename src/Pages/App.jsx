import "../Style/App.scss";
import Account from "./Account";
import HomeScreen from "../Components/HomeScreen/HomeScreen";
import Genres from "../Components/Genres/Genres";
import NavPanel from "../Components/NavPanel/NavPanel";
import Prime from "../Components/Prime/Prime";
import Hearing from "../Components/Hearing/Hearing";
import Catalog from "../Components/Catalog/Catalog";


import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

import { useState, useCallback, useEffect } from 'react';
import { getAuth } from 'firebase/auth';


import Payment from "../Components/Payment/Payment";

function App() {

  const [showLogIn , setShowLogIn] = useState(true)
  const [showSignUp , setShowSignUp] = useState(false)

  const handleHideLogIn = useCallback(() => setShowLogIn(false), []);
  const handleHideSingUp = useCallback(() => setShowSignUp(false), []);
  const handleShowLogIn = useCallback(() => setShowLogIn(true), []);
  const handleShowSingUp = useCallback(() => setShowSignUp(true), []);

  // useEffect(() => {
  //   const unscribe = getAuth().onAuthStateChanged(async ()=>{
  //     unscribe
  //     const {currentUser} = getAuth()
  //     if (!currentUser) {
        
  //     }
  //   } )
  // })

  return (
    <>
      {/* <Account /> */}
      {/* <div className="container">
        <HomeScreen />
        <Genres />
        <Prime />
        <Catalog />
        <Hearing />
        <NavPanel />

      </div>
      {showLogIn && <LogIn hideLogIn={handleHideLogIn} showSignUp={handleShowSingUp}/>}
      {showSignUp && <SignUp hideSignUp={handleHideSingUp} showLogIn={handleShowLogIn}/>}

      </div> */}
      <Payment/>

    </>
  );
}

export default App;
