import React, { useState } from "react";
import SearchBar from "../search_bar/search_bar";

const Header = ({ currentUserId, logout, login }) => {
  const [sessionForm, setSessionForm] = useState(false);
  const showLogin = sessionForm ? (
    <div className="login-form">
      <form>
        <h2 className="welcome-text"></h2>
        {/* <input
          className="user-input"
          type="text"
          placeholder="Name"
           onChange={this.handleChange("name")}
           value={this.state.name}
        />
        <input
          className="user-input"
          type="text"
          placeholder="Email"
          onChange={this.handleChange("email")}
          value={this.state.email}
        /> */}
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
      <button
        onClick={() => setSessionForm(true)}
        className="session-button logout"
      >
                  Log In
      </button>
      <button  className="session-button logout">
        Register
      </button>
              {showLogin}
    </div>
  );
  return (
    <nav className="nav-bar">
      <div className="left-side-nav">
        <div>Logo</div>
        <div>Logo Text</div>
      </div>
      <SearchBar/>
      <div className="right-side-nav">{sessionButtons}</div>
    </nav>
  );
};
export default Header;
