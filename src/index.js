import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "@picocss/pico";

import App from "./components/App/App";
import {Provider} from "react-redux";
import {store} from "./store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </StrictMode>,
  rootElement
);
