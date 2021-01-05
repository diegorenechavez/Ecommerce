import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import LandingContainer from "./landing/landing_container";

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/splash" component={SplashContainer} />
        <ProtectedRoute exact path="/shop" component={LandingContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;