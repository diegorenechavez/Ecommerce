import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";

const Header = ({ currentUserId, logout, login }) => {
  const [sessionForm, setSessionForm] = useState(false);

  const showLogin = sessionForm ? (
    <div className="login-form">
      <form>
        <h2 className="welcome-text"></h2>

        <input
          className="user-input"
          type="text"
          placeholder="Create Username"
          //   onChange={this.handleChange("username")}
          //   value={this.state.username}
        />
        <input
          className="user-input"
          type="password"
          placeholder="Create Password"
          //   onChange={this.handleChange("password")}
          //   value={this.state.password}
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
      <button className="session-button register">Register</button>
      <button
        className="session-button logout"
        onClick={() => setSessionForm(true)}
      >
        Log In
      </button>
      {showLogin}
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
    </nav>
  );
};
export default Header;
