import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { localStore } from "./redux/store";
import { Provider } from "react-redux";
import Footer from "./components/footer/Footer";

ReactDOM.render(
   <Provider store={localStore}>
      <App key="1" /> , <Footer key="2" />
   </Provider>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
