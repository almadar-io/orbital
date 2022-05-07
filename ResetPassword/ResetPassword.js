import React from "react";
import { ResetPassword } from "@markab.io/orbital-templates";

const ResetPasswordModule = ({
  changePassword,
  classes,
  location,
  history,
  match
}) => {
  return (
    <React.Fragment>
      <ResetPassword
        changePassword={changePassword}
        classes={classes}
        location={location}
        history={history}
        match={match}
      />
    </React.Fragment>
  );
};

export default ResetPasswordModule;
