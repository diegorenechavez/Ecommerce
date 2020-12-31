import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app.jsx";
// import LoadingIndicator from "./loading_indicator";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
        {/* <LoadingIndicator /> */}
      </HashRouter>
    </Provider>
  );
};

export default Root;
