import React from "react";
import { Login } from "Templates";

const LoginModule = ({
  onChange,
  onSubmit,
  onProviderAuth,
  onRegister,
  onForgotPassword,
  classes,
  location,
  history,
  match
}) => {
  return (
    <React.Fragment>
      <Login
        onChange={onChange}
        onSubmit={onSubmit}
        onProviderAuth={onProviderAuth}
        onRegister={onRegister}
        onForgotPassword={onForgotPassword}
        classes={classes}
        location={location}
        history={history}
        match={match}
      />
    </React.Fragment>
  );
};

export default LoginModule;
