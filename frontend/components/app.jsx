import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container"

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;