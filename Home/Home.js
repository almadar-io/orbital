import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { styles } from "./Home.styles";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Home(props) {
  const { classes, logo, title, isLoggedIn, onSignUp, onDashboard } = props;

  return (
    <React.Fragment>
      <div id="clouds" className="sky-gradient-09">
        <main className={classes.content}>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <img width="200px" height="auto" src={logo} />
                </Grid>
              </Grid>
              <Typography
                variant="display3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {title}
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    {!isLoggedIn && (
                      <Button
                        onClick={onSignUp}
                        variant="contained"
                        color="primary"
                      >
                        Sign up today!
                      </Button>
                    )}
                  </Grid>
                  <Grid item>
                    {isLoggedIn && (
                      <Button
                        onClick={onDashboard}
                        variant="contained"
                        color="primary"
                      >
                        Go to your Dashboard
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subheading"
          align="center"
          color="textSecondary"
          component="p"
        >
          Module
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
