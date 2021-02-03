import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app.jsx";
import Scroll from "./scroll"


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Scroll/>
        <App />
        {/* <LoadingIndicator /> */}
      </HashRouter>
    </Provider>
  );
};

export default Root;
