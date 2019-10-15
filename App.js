import ReactDOM from "react-dom";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "Theme";
import { styles } from "./App.styles";
import withOrbital from "./withOrbital";
import rootStore from "./Store/rootStore";
import User from "./User/User";
import routeList from "./Routes";
import { MainWrapper } from "Templates";
const MyApp = withOrbital({ styles, rootStore })(props => {
  const { classes } = props;
  return (
    <Route
      path="/"
      render={props => {
        return (
          <ThemeProvider theme={theme}>
            <MainWrapper classes={classes} {...props} routeList={routeList}>
              <User {...props} />
            </MainWrapper>
          </ThemeProvider>
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
