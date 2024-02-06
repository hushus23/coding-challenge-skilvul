// src/main.jsx

// Import React
import React from "react";

// Import ReactDOM
import ReactDOM from "react-dom";

// Import the App component
import App from "./App";

// Import the Provider component from React Redux
import { Provider } from "react-redux";

// Import the store
import store from "./redux/store";

// Render the app with the Provider and the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
