import React from "React"

class Splash extends React.Component{ 
    constructor(props) { 
      super(props)
     
    }
 

    render() { 
        return (
          <div className="splash-background">
            <div className="hero-div">
              <div className="message-container"><h1 className="banner-message">Welcome  </h1><div className="roladex-container"><div className="roladex"><div className="words">Soulmate</div> <div className="words">Lover</div><div className="words">Friend</div></div></div></div>
              
              <h3 className="banner-slogan"> Lets help you unwind</h3>
            </div>
          </div>
        );
    }

}
export default Splash
