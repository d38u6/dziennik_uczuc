import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducers";
import { saveStoreSubscriber } from "./utility/localStorageManager/localStorageManager";
const store = createStore(
  reducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(saveStoreSubscriber(store));

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/dziennik-uczuc-app">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

serviceWorker.register();
