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
import CreateReviewContainer from "../components/reviews/create_review_container";
import CartContainer from "../components/cart/cart_show_container"
import ProfileContainer from "../components/users/profile_container"
import LikedItemsContainer from "../components/liked_items/liked_items_container"
import Footer from "../components/footer"
import UserReviewsContainer from '../components/reviews/user_reviews_container'
import ProductIndexContainer from '../components/products/products_index_container'

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <ProtectedRoute
          exact
          path="/products/:productId/review"
          component={CreateReviewContainer}
        />
        <ProtectedRoute
          exact
          path="/products/:productId"
          component={ProductContainer}
        />
        <ProtectedRoute
          exact
          path="/users/:userId/liked_items"
          component={LikedItemsContainer}
        />
        <ProtectedRoute
          exact
          path="/users/:userId/reviews"
          component={UserReviewsContainer}
        />
        <ProtectedRoute
          exact
          path="/users/:userId"
          component={ProfileContainer}
        />
        <ProtectedRoute exact path="/search/:query" component={ProductIndexContainer} />
        <ProtectedRoute exact path="/hair" component={HairContainer} />
        <ProtectedRoute exact path="/body" component={BodyContainer} />
        <ProtectedRoute exact path="/face" component={FaceContainer} />
        <ProtectedRoute
          exact
          path="/checkout/:userId"
          component={CartContainer}
        />
        <Route exact path="/" component={SplashContainer} />

        {/* <AuthRoute exact path="/splash" component={LandingContainer} /> */}
        <Redirect to="/" />
      </Switch>
      <Footer component={Footer} />
    </div>
  );
};

export default App;
