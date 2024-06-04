import NavPanel from "../../Components/NavPanel/NavPanel.jsx";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Time from "../Time/Time";
import "./Profile.scss";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    const savedName = localStorage.getItem("savedName");
    const savedEmail = localStorage.getItem("savedEmail");
    const savedDateOfBirth = localStorage.getItem("savedDateOfBirth");

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedDateOfBirth) setDateOfBirth(savedDateOfBirth);
  }, []);

  useEffect(() => {
    localStorage.setItem("savedName", name);
    localStorage.setItem("savedEmail", email);
    localStorage.setItem("savedDateOfBirth", dateOfBirth);
  }, [name, email, dateOfBirth]);

  const handleInputChange = (e, setField) => {
    setField(e.target.value);
  };

  const handleInputClick = (e, inputRef) => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const nameInputRef = React.useRef(null);
  const emailInputRef = React.useRef(null);
  const dateOfBirthInputRef = React.useRef(null);
  return (
    <div className="container">
      <div className="navigation">
        <div className="navigation__leftitem">
          <Time/>
        </div>
        <div className="navigation__rightitem">
          <img src="../../public/Set.svg" alt="#" />
          <img src="../../public/Wifi.svg" alt="#" />
          <img src="../../public/Battery.svg" alt="#" />
        </div>
      </div>
      <div onClick={()=>navigate(-1)} className="back">
        <a href="#">
          <img src="../../../public/arrow-left.png" alt="#" />
        </a>
        <p>Back</p>
      </div>
      <div className="title">
        <p>Profile details</p>
      </div>
      <div className="profile_icon">
        <img src="../../../public/account-icon.png" alt="" />
      </div>
      <div className="line"></div>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <div className="input-group">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => handleInputChange(e, setName)}
                ref={nameInputRef}
              />
              <img
                src="../../../public/Arrow.png"
                alt=""
                className="input-icon"
                onClick={(e) => handleInputClick(e, nameInputRef)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                ref={emailInputRef}
              />
              <img
                src="../../../public/Arrow.png"
                alt=""
                className="input-icon"
                onClick={(e) => handleInputClick(e, emailInputRef)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <div className="input-group">
              <input
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                ref={dateOfBirthInputRef}
              />
              <img
                src="../../../public/Arrow.png"
                alt=""
                className="input-icon"
                onChange={(e) => handleInputChange(e, setDateOfBirth)}
              />
            </div>
          </div>
        </form>
      </div>
      <NavPanel />
    </div>
  );
}

export default Profile;
