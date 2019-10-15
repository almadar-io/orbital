import ReactDOM from "react-dom";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import withOrbital from "./withOrbital";
import { Loading } from "Templates";
const MyApp = props => {
  return (
    <div>
      <Router>
        <Route path="/">
          <Loading />
        </Route>
      </Router>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("app"));

export default withOrbital({})(MyApp);
