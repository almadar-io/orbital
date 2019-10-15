import ReactDOM from "react-dom";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { styles } from "./App.styles";
import withOrbital from "./withOrbital";
import User from "./User/User";
import routeList from "./Routes";
import { MainWrapper } from "Templates";
const MyApp = withOrbital({ styles })(props => {
  const { classes } = props;
  console.log(classes, props);
  return (
    <Route
      path="/"
      render={props => {
        return (
          <MainWrapper classes={classes} {...props} routeList={routeList}>
            <User {...props} />
          </MainWrapper>
        );
      }}
    ></Route>
  );
});
ReactDOM.render(
  <Router>
    <MyApp />
  </Router>,
  document.getElementById("app")
);
export default MyApp;
