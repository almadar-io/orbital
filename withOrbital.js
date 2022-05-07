import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import routeListLoggedOut from "./Routes";
import {
  LoginWithAuth,
  RegisterWithAuth,
  Media,
  Forms,
  Auth,
  Notification,
  Crud,
} from "@markab.io/react";
import config from "./config";
import ReactGA from "react-ga";
import { compose } from "recompose";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import { MainWrapper, LoginWrapper, Loading } from "@markab.io/orbital-templates";
const ForgotPassword = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "ForgotPassword" */ "./ForgotPassword/ForgotPassword"
    ),
  loading: () => {
    return <Loading />;
  },
});
const ResetPassword = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "ResetPassword" */ "./ResetPassword/ResetPassword"
    ),
  loading: (err) => <Loading err={err} />,
});
const Register = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Register" */ "./Register/Register"),
  loading: (err) => <Loading err={err} />,
});
const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "NotFound" */ "./NotFound/NotFound"),
  loading: (err) => <Loading err={err} />,
});
const Login = Loadable({
  loader: () => import(/* webpackChunkName: "Login" */ "./Login/Login"),
  loading: (err) => <Loading err={err} />,
});
const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "Login" */ "./Profile/Profile"),
  loading: (err) => <Loading err={err} />,
});
const NotificationPage = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "LoginWrapper" */ "./Notification/Notification"
    ),
  loading: (err) => <Loading err={err} />,
});

const withOrbital =
  ({
    loginBG,
    registerBG,
    routeList,
    rootStore,
    logo,
    gaTrackingCode,
    disableAuth,
    offlineStorage,
    theme,
  }) =>
  (WrappedComponent) => {
    class WithOrbital extends React.Component {
      state = {
        isLoggedIn: false,
        currentUser: {},
        appSettings: {},
      };
      constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
      }
      componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          this.onRouteChanged();
        }
      }
      onRouteChanged() {
        gaTrackingCode && ReactGA.pageview(this.props.location.pathname);
        if (
          !disableAuth &&
          this.props.location.pathname.indexOf("/auth") === -1
        ) {
          rootStore.authDomainStore
            .isAuthenticated()
            .then((res) => {
              if (res.status !== 200) {
                this.setState({ isLoggedIn: false });
              } else {
                this.setState({ isLoggedIn: true, currentUser: res.data });
              }
            })
            .catch((err) => {
              this.setState({ isLoggedIn: false });
              this.props.history.push(`${match.path}/auth/login`);
            });
        }
      }
      componentDidMount() {
        gaTrackingCode && ReactGA.initialize(gaTrackingCode);
        gaTrackingCode && ReactGA.pageview(this.props.location.pathname);
        if (
          !disableAuth &&
          this.props.location.pathname.indexOf("/auth") === -1
        ) {
          rootStore.authDomainStore
            .isAuthenticated()
            .then((res) => {
              if (res.status !== 200) {
                this.setState({ isLoggedIn: false });
              } else {
                this.setState({ isLoggedIn: true, currentUser: res.data });
              }
            })
            .catch((err) => {
              this.setState({ isLoggedIn: false });
              this.props.history.push(`${match.path}/auth/login`);
            });
        }
        this.props.onInit ? this.props.onInit(routeList) : "";
      }
      onLogout() {
        rootStore.authDomainStore.logout();
      }
      render() {
        const { isLoggedIn } = this.state;
        const { match, overrideClasses, ...rest } = this.props;
        const classes = overrideClasses ? overrideClasses : this.props.classes;
        console.log("WITH ORBITAL CLASSES", classes);
        console.log("WITH ORBITAL THEME", theme);
        const currentRouteList = isLoggedIn ? routeList : routeListLoggedOut;
        return (
          <ThemeProvider theme={theme}>
            <Switch>
              <Route
                path={`${match.path}/auth/login`}
                render={({ location, history, match }) => {
                  return (
                    <LoginWrapper backgroundImage={loginBG}>
                      <LoginWithAuth
                        authUiStore={rootStore.authUiStore}
                        authDomainStore={rootStore.authDomainStore}
                      >
                        <Login
                          onRegister={() =>
                            this.props.history.push(
                              `${match.path}/auth/register`
                            )
                          }
                          onForgotPassword={() =>
                            this.props.history.push(
                              `${match.path}/auth/forgot-password`
                            )
                          }
                          location={location}
                          history={history}
                          match={match}
                        />
                      </LoginWithAuth>
                    </LoginWrapper>
                  );
                }}
              />
              <Route
                path={`${match.path}/auth/register`}
                render={({ location, history, match }) => {
                  return (
                    <LoginWrapper backgroundImage={registerBG}>
                      <RegisterWithAuth
                        authDomainStore={rootStore.authDomainStore}
                        authUiStore={rootStore.authUiStore}
                      >
                        <Register
                          onLogin={() =>
                            history.push(`${match.path}/auth/login`)
                          }
                          location={location}
                          history={history}
                          match={match}
                        />
                      </RegisterWithAuth>
                    </LoginWrapper>
                  );
                }}
              />
              <Route
                path={`${match.path}/auth/forgot-password`}
                render={({ location, history, match }) => {
                  return (
                    <LoginWrapper backgroundImage={registerBG}>
                      <Auth authDomainStore={rootStore.authDomainStore}>
                        <ForgotPassword
                          onLogin={() =>
                            history.push(`${match.path}/auth/login`)
                          }
                          location={location}
                          history={history}
                          match={match}
                        />
                      </Auth>
                    </LoginWrapper>
                  );
                }}
              />
              <Route
                path={`${match.path}/auth/reset-password`}
                render={({ location, history, match }) => {
                  return (
                    <LoginWrapper backgroundImage={registerBG}>
                      <Auth authDomainStore={rootStore.authDomainStore}>
                        <ResetPassword
                          onLogin={() =>
                            history.push(`${match.path}/auth/login`)
                          }
                          location={location}
                          history={history}
                          match={match}
                        />
                      </Auth>
                    </LoginWrapper>
                  );
                }}
              />
              <Route
                path={`${match.path}/profile`}
                render={({ location, match, history }) => {
                  return (
                    <MainWrapper
                      classes={classes}
                      routeList={currentRouteList}
                      location={location}
                      match={match}
                      history={history}
                      auth={this.state.isLoggedIn}
                      user={this.state.currentUser}
                      logo={logo}
                      hasPadding={true}
                      onLogout={this.onLogout}
                    >
                      <Crud
                        modelName="users"
                        SERVER={config.SERVER}
                        offlineStorage={offlineStorage}
                        notificationDomainStore={
                          rootStore.notificationDomainStore
                        }
                        crudDomainStore={rootStore.crudDomainStore}
                      >
                        <Forms formsDomainStore={rootStore.formsDomainStore}>
                          <Media
                            extension="image/jpg"
                            mediaDomainStore={rootStore.mediaDomainStore}
                          >
                            <Notification
                              notificationDomainStore={
                                rootStore.notificationDomainStore
                              }
                            >
                              <Profile
                                user={this.state.currentUser}
                                formsDomainStore={rootStore.formsDomainStore}
                                location={location}
                                match={match}
                                history={history}
                                classes={classes}
                              />
                            </Notification>
                          </Media>
                        </Forms>
                      </Crud>
                    </MainWrapper>
                  );
                }}
              />
              <Route
                path={`${match.path}/notifications`}
                render={(props) => {
                  return (
                    <MainWrapper
                      classes={classes}
                      routeList={currentRouteList}
                      location={location}
                      match={match}
                      history={history}
                      auth={this.state.isLoggedIn}
                      user={this.state.currentUser}
                      logo={logo}
                      hasPadding={true}
                      onLogout={this.onLogout}
                    >
                      <Crud
                        modelName="notifications"
                        SERVER={config.SERVER}
                        offlineStorage={offlineStorage}
                        notificationDomainStore={
                          rootStore.notificationDomainStore
                        }
                      >
                        <Forms formsDomainStore={rootStore.formsDomainStore}>
                          <Media
                            extension="image/jpg"
                            mediaDomainStore={rootStore.mediaDomainStore}
                          >
                            <Notification
                              notificationDomainStore={
                                rootStore.notificationDomainStore
                              }
                            >
                              <NotificationPage
                                user={this.state.currentUser}
                                formsDomainStore={rootStore.formsDomainStore}
                                location={location}
                                match={match}
                                history={history}
                              />
                            </Notification>
                          </Media>
                        </Forms>
                      </Crud>
                    </MainWrapper>
                  );
                }}
              />
              <WrappedComponent
                user={this.state.currentUser}
                isLoggedIn={isLoggedIn}
                appSettings={this.state.appSettings}
                onLogout={this.onLogout}
                classes={classes}
                location={this.props.location}
                match={this.props.match}
                history={this.props.history}
                {...rest}
              />
              <Route
                path="*"
                render={(props) => {
                  return (
                    <MainWrapper
                      classes={classes}
                      routeList={currentRouteList}
                      location={location}
                      match={match}
                      history={history}
                      auth={this.state.isLoggedIn}
                      user={this.state.currentUser}
                      logo={logo}
                      hasPadding={true}
                      onLogout={this.onLogout}
                    >
                      <NotFound />
                    </MainWrapper>
                  );
                }}
              />
            </Switch>
          </ThemeProvider>
        );
      }
    }
    return WithOrbital;
  };

export default withOrbital;
