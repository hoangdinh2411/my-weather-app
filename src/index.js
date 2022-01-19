import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routing from "routing";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
