import React from "React"

class Splash extends React.Component{ 
    constructor(props) { 
      super(props)
      // this.state = this.props.user;
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
  // componentDidMount() {
  //   this.props.clearErrors();
  // }
  
  // handleSubmit(event) { 
  //   event.preventDefault();
  //   this.props.signup(this.state).then(this.props.login(this.state));
  // }

  // handleChange(field) {
  //   return (e) => {
  //     this.setState({ [field]: e.currentTarget.value })
  //   };
    
  // 

    render() { 
        return (
          <div className="splash-background">
            <div className="hero-div">
              {/* <img src={window.splashHero} alt="" className="hero-image" /> */}
            </div>
            
          </div>
        );
    }

}
export default Splash
