import ReactDOM from "react-dom";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import Store from "Store/Store";
import config from "Config";
import {
  authDomainStore,
  authUiStore,
  crudDomainStore,
  socketDomainStore,
  adminDomainStore,
  mediaDomainStore,
  formsDomainStore,
  notificationDomainStore,
  gameDomainStore
} from "@markab.io/react";

let rootStore = new Store({
  authDomainStore,
  authUiStore,
  crudDomainStore,
  socketDomainStore,
  adminDomainStore,
  mediaDomainStore,
  formsDomainStore,
  notificationDomainStore,
  gameDomainStore,
  skipAuth: true,
  config
});

//instantiate crudDomainStore

const MyApp = props => {
  return (
    <div>
      <Router>
        <App rootStore={rootStore} />
      </Router>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("app"));

export default MyApp;
