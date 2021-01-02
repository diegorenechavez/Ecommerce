import React from "React"

class Splash extends React.Component{ 
    constructor(props) { 
      super(props)
      this.state = this.props.user;
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  componentDidMount() {
    this.props.clearErrors();
  }
  
  handleSubmit(event) { 
    event.preventDefault();
    this.props.signUp(this.state);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    };
    
  }

    render() { 
        return (
          <div className="splash-background">
            <div className="modal-screeen">
              <form className="modal" onSubmit={this.handleSubmit}>
                <h2 className="welcome-text"></h2>
                <input className="user-input" type="text" placeholder="Name" onChange={this.handleChange("name")} value={this.state.name}/>
                <input className="user-input" type="text" placeholder="Email" onChange={this.handleChange("email")} value={this.state.email}/>
                <input className="user-input" type="text" placeholder="Create Username" onChange={this.handleChange("username")} value={this.state.username}/>
                <input className="user-input" type="password" placeholder="Create Password" onChange={this.handleChange("password")} value={this.state.password}/>
                <button>Sign Up</button>
                
              </form>
            </div>
         </div>
        );
    }

}
export default Splash