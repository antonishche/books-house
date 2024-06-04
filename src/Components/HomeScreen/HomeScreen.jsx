import Stories from "../Stories/Stories";
import "./HomeScreen.scss";
import Time from "../Time/Time";

import Genres from "../Genres/Genres";
import NavPanel from "../NavPanel/NavPanel";
import Prime from "../Prime/Prime";
import Hearing from "../Hearing/Hearing";

import React, { useState } from "react";
import { NavLink , BrowserRouter , Routes , Route , useNavigate } from "react-router-dom";

import Explore from "../../Pages/Explore";
import Catalog from "../Catalog/Catalog";
import Account from "../../Pages/Account";
import App from "../../Pages/App";



export default function HomeScreen() {

  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="navigation">
        <div className="navigation__leftitem">
        <Time />
        </div>
        <div className="navigation__rightitem">
          <img src="../../Set.svg" alt="#" />
          <img src="../../Wifi.svg" alt="#" />
          <img src="../../Battery.svg" alt="#" />
        </div>
      </div>
      <div className="header"  onClick={()=>navigate("/account")}>
        <div className="header__leftitem">
          <img src="../../good afternoon.svg" alt="#" />
        </div>
        <div className="header__rightitem">
          <img src="../../account_icon.svg" alt="#" />
        </div>
      </div>
      <div className="stories">
        <Stories />
      </div>
      <Genres />
      {/* <Catalog/> */}
      <Prime />
      <Hearing />
      <NavPanel />
    </div>
  );
}
