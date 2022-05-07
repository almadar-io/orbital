import React from "react";
import theme from "Theme";
import { styles } from "./App.styles";
import { Route, Switch } from "react-router-dom";
import withOrbital from "../withOrbital";
import config from "Config";
import offlineStorage from "../OfflineStorage/OfflineStorage";
import rootStore from "../Store/rootStore";
import User from "../User/User";
import { Crud, Notification, Media, Forms } from "@markab.io/react";
import routeList from "../Routes";
import { MainWrapper } from "@markab.io/orbital-templates";
const logo = "";
const MyApp = props => {
  const { classes, isLoggedIn, user, onLogout } = props;
  return (
    <Switch>
      <Route
        path="/"
        render={({ location, history, match }) => (
          <MainWrapper
            routeList={routeList}
            classes={classes}
            location={location}
            match={match}
            history={history}
            auth={isLoggedIn}
            user={user}
            logo={logo}
            hasPadding={true}
            onLogout={onLogout}
            crudDomainStore={rootStore.crudDomainStore}
          >
            <Crud
              modelName="users"
              SERVER={config.SERVER}
              offlineStorage={offlineStorage}
              notificationDomainStore={rootStore.notificationDomainStore}
              crudDomainStore={rootStore.crudDomainStore}
            >
              <Media mediaDomainStore={rootStore.mediaDomainStore}>
                <Forms formsDomainStore={rootStore.formsDomainStore}>
                  <User match={match} location={location} history={history} />
                </Forms>
              </Media>
            </Crud>
          </MainWrapper>
        )}
      />
    </Switch>
  );
};
export default withOrbital({ styles, rootStore, theme, routeList, logo })(
  MyApp
);
