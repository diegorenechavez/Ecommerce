import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import LandingContainer from "./landing/landing_container";
import HeaderContainer from "../components/header/header_container";
import HairContainer from "../components/products/hair_container"
import BodyContainer from "../components/products/body_container"
import FaceContainer from "../components/products/face_container"
import ProductContainer from "../components/products/product_show_container"

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <ProtectedRoute exact path="/products/:productId" component={ProductContainer} />
        <ProtectedRoute exact path="/hair" component={HairContainer} />
        <ProtectedRoute exact path="/body" component={BodyContainer} />
        <ProtectedRoute exact path="/face" component={FaceContainer} />
        <Route exact path="/" component={SplashContainer} />

        {/* <AuthRoute exact path="/splash" component={LandingContainer} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
