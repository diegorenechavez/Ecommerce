import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";




const Header = ({ currentUserId, logout, login, signup }) => {
  const [sessionForm, setSessionForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false)
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  })


  const handleSubmit = function(e){
    e.preventDefault();
    let newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      password2: user.password2
    };
    if(newUser.password === newUser.password2){
      signup(newUser).then(() => login(newUser))
      
      //ELSE ERRORS.PUSH "The passwords you entered did not match, please try again"
    } else {
      console.log("Passwords did not match")
    }
  }
  
  

  const update = function(field){
    return (e) => setUser({
      [field]: e.currentTarget.value
    })
  }
  
  const registerModal = currentUserId ? null : (
    <div className="modal-screen">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="welcome-banner">Welcome To Bubbles <p>Lets help you unwind</p></div>
        <div className="inputs-container">
          <input
            className="inputs"
            onChange={update("name")}
            value={user.name}
            type="text"
            placeholder="Name"
          />
          <input
            className="inputs"
            onChange={update("username")}
            value={user.username}
            type="text"
            placeholder="UserName"
          />
          <input
            className="inputs"
            onChange={update("password")}
            value={user.password}
            type="password"
            placeholder="Password"
          />
          <input
            className="inputs"
            onChange={update("password2")}
            value={user.password2}
            type="password"
            placeholder="Confirm Password"
          />
        <button className="form-buttons register-button">Register</button>
        <button className="form-buttons demo-button">Demo Login</button>
        </div>
      </form>
    </div>
  );

    

  const showLogin = sessionForm ? (
    <div className="login-form">
      <form>
        <h2 className="welcome-text"></h2>

        <input
          className="user-input"
          type="text"
          placeholder="Create Username"
          
        />
        <input
          className="user-input"
          type="password"
          placeholder="Create Password"
          
        />
        <button>Sign Up</button>
      </form>
    </div>
  ) : null;
  const sessionButtons = currentUserId ? (
    <div className="session-buttton-container">
      <div>
        <button onClick={logout} className="session-button logout">
          Log Out
        </button>
      </div>
    </div>
  ) : (
    <div>
      
    </div>
  );
  return (
    <nav>
      <div className="nav-bar">
        <div className="left-side-nav">
          <Link to={"/"}>
            <img src={window.logoURL} alt="" className="logo" />
            <div className="logo-text">Bubbles</div>
          </Link>
        </div>
        <SearchBar />
        <div className="right-side-nav">{sessionButtons}</div>
      </div>
      <div className="menu">
        <Link to={"/hair"}>
          <button className="menu-button">Hair</button>
        </Link>
        <Link to={"/body"}>
          <button className="menu-button">Body</button>
        </Link>
        <Link to={"/face"}>
          <button className="menu-button">Face</button>
        </Link>
      </div>
      {registerModal}
    </nav>
  );
};
export default Header;
