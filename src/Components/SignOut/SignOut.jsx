import React from 'react'
import "./SignOut.scss"
import NavPanel from '../NavPanel/NavPanel'
import Time from '../Time/Time'

import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export default function SignOut() {

    const navigate = useNavigate()
    const auth = getAuth()

    function logOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <div className="navigation">
                <div className="navigation__leftitem">
                    <Time />
                </div>
                <div className="navigation__rightitem">
                    <img src="../../public/Set.svg" alt="#" />
                    <img src="../../public/Wifi.svg" alt="#" />
                    <img src="../../public/Battery.svg" alt="#" />
                </div>
            </div>
            <div onClick={() => navigate(-1)} className="back">
                <a href="#">
                    <img src="../../../public/arrow-left.png" alt="#" />
                </a>
                <p>Back</p>
            </div>
            <div className="title">
                <p>Log out?</p>
            </div>
            <div className="future_way-btn">
                <button onClick={() => navigate(-1)} className='cancel btn'>Cancel</button>
                <button onClick={() => logOut()} className='log_out btn'>Log out</button>
            </div>
        </div>
    )
}
