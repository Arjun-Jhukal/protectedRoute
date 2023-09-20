import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component/assets/style/styles.scss";
import RoutesCollection from "./Routes/router.tsx";
import { Provider } from "react-redux";
import { store } from "./store/Store.ts";
import ToastNotification from "./component/molecule/Notification/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastNotification />
      <RoutesCollection>
        <App />
      </RoutesCollection>
    </Provider>
  </React.StrictMode>
);
