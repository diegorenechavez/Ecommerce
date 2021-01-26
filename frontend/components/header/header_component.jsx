import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar_container";
import CartIndexContainer from "../cart/cart_index_container";
import CartNumber from "../cart/cart_number_container";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      username: "",
      password: "",
      showLogin: false,
      freeze: true,
      showCart: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.freezePage = this.freezePage.bind(this);
    this.unfreezePage = this.unfreezePage.bind(this);
    this.showCartPreview = this.showCartPreview.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    if (!this.props.currentUserId) {
      this.freezePage();
    }
  }

  componentDidUpdate() {
    this.unfreezePage();
    if (this.props.currentUserId) {
      this.props.fetchAllCartItems();
    }
  }

  freezePage() {
    document.body.style.overflow = "hidden";
    // this.setState({ freezePage: true });
  }

  unfreezePage() {
    // this.setState({ freezePage: false });
    document.body.style.overflow = "unset";
  }

  demoLogin(e) {
    e.preventDefault();
    // this.props.clearErrors();
    let login = this.props.login;
    let that = this;
    let count = 0;
    let demo = "AdventureKidpassword";
    if (this.demo) return;
    this.setState({
      username: "",
      password: "",
    });
    this.demo = setInterval(() => {
      let type = count < 12 ? "username" : "password";
      that.setState({ [type]: that.state[type] + demo[count] });
      count++;
      if (count === 20) {
        clearInterval(this.demo);
        login({
          username: "AdventureKid",
          password: "password",
        });
      }
    }, 50);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    this.props.clearErrors();
    e.preventDefault();
    const user = {
      email: this.state.email,
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };
    this.props
      .signup(user)
      .then((user) => this.props.login(user))
      .then(this.unfreezePage());
  }

  handleLogin(e){
    this.props.clearErrors();
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user)
    .then(this.unfreezePage());
  }

  changeForm() {
    if (this.state.showLogin) {
      this.setState({ showLogin: false });
    } else {
      this.setState({ showLogin: true });
    }
  }

  showCartPreview() {
    if (this.state.showCart) {
      this.setState({ showCart: false });
    } else {
      this.setState({ showCart: true });
    }
  }


  renderErrors() {
    return (
      <ul className="errors-message">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const showform = this.state.showLogin ? (
      <div className="modal-screen">
        <div className="session-errors">
          {this.renderErrors()}
        </div>
        <form className="register-form" onSubmit={this.handleLogin}>
          <div className="welcome-banner">
            Welcome Back To Bubbles <p>Lets help you unwind</p>
          </div>
          <div className="inputs-container">
            <input
              className="inputs"
              onChange={this.update("username")}
              value={this.state.username}
              type="text"
              placeholder="Username"
              required
            />
            <input
              className="inputs"
              onChange={this.update("password")}
              value={this.state.password}
              type="password"
              placeholder="Password"
              required
            />
            <button className="form-buttons register-button">Login</button>
            <button
              onClick={this.demoLogin}
              className="form-buttons demo-button"
            >
              Demo Login
            </button>
            <span className="session-form-toggle" onClick={this.changeForm}>
              Not a member? Sign Up!
            </span>
          </div>
        </form>
      </div>
    ) : (
      <div className="modal-screen">
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div className="welcome-banner">
            Welcome To Bubbles <p>Lets help you unwind</p>
          </div>
          <div className="inputs-container">
            <input
              className="inputs"
              onChange={this.update("name")}
              value={this.state.name}
              type="text"
                placeholder="Name"
                required
            />
            <input
              className="inputs"
              onChange={this.update("username")}
              value={this.state.username}
              type="text"
                placeholder="Username"
                required
            />
            <input
              className="inputs"
              onChange={this.update("email")}
              value={this.state.email}
              type="text"
                placeholder="Email"
                required
            />
            <input
              className="inputs"
              onChange={this.update("password")}
              value={this.state.password}
              type="password"
                placeholder="Password"
                required
            />
            <button className="form-buttons register-button">Register</button>
            <button
              onClick={this.demoLogin}
              className="form-buttons demo-button"
            >
              Demo Login
            </button>
            <span className="session-form-toggle" onClick={this.changeForm}>
              Login Instead
            </span>
          </div>
        </form>
      </div>
    );
    
    const registerModal = this.props.currentUserId ? null : showform;
    const cartPreview = this.state.showCart ? (
      <div className="cart " >
        <button
          onClick={() => this.showCartPreview()}
          className="close-cart-button"
        >
          X
        </button>
        <CartIndexContainer />
      </div>
    ) : null;
    const sessionButtons = this.props.currentUserId ? (
      <div className="session-buttton-container">
        <div className="logout-container">
          <CartNumber />
          <img
            className="cart-icon"
            onClick={() => this.showCartPreview()}
            alt=""
            src={window.cartIconURL}
          />

          {cartPreview}
          <Link className="profile-link" to={`/users/${this.props.currentUserId}`}>Profile</Link>
          <h6 className="welcome-user">
            Hello,&nbsp;{this.props.currentUser.name}!
          </h6>

          <button onClick={this.props.logout} className="session-button logout">
            Log Out
          </button>
        </div>
      </div>
    ) : (
        <div className="session-placeholder"></div>
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
        <div className="disclaimer">*All Images are property of LUSH, and are soley used for demonstration purposes</div>
      </nav>
    );
  }
}

export default Header;
