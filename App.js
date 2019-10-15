import ReactDOM from "react-dom";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import theme from "Theme";
import { compose } from "recompose";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import withOrbital from "./withOrbital";
import User from "./User/User";
import routeList from "./Routes";
import { Loading, MainWrapper } from "Templates";
const MyApp = props => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route
          path="/"
          render={props => {
            return (
              <MainWrapper classes={{}} {...props} routeList={routeList}>
                <User {...props} />
              </MainWrapper>
            );
          }}
        ></Route>
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("app"));

export default compose(withOrbital({}))(MyApp);
