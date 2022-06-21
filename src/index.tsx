import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./static/font-awesome/css/font-awesome.min.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
reportWebVitals();
