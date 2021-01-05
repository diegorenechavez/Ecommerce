import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import LandingContainer from "./landing/landing_container";
import HeaderContainer from "../components/header/header_container";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        {/* <AuthRoute exact path="/splash" component={LandingContainer} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
