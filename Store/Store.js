//add localStorage
import queryString from "query-string";

let offlineStorage = {
  setItem: (key, value) => {
    return new Promise((resolve, reject) => {
      localStorage.setItem(key, value);
      resolve({ key, value });
    });
  },
  getItem: key => {
    return new Promise((resolve, reject) => {
      resolve(localStorage.getItem(key));
    });
  },
  removeItem: key => {
    return new Promise((resolve, reject) => {
      resolve(localStorage.removeItem(key));
    });
  }
};

export default class RootStore {
  constructor({
    authUiStore,
    authDomainStore,
    crudDomainStore,
    socketDomainStore,
    adminDomainStore,
    mediaDomainStore,
    formsDomainStore,
    notificationDomainStore,
    gameDomainStore,
    unsplashDomainStore,
    kbDomainStore,
    config: { SERVER, unsplashAccessKey },
    skipAuth
  }) {
    this.notificationDomainStore =
      notificationDomainStore &&
      new notificationDomainStore(this, offlineStorage, SERVER);
    this.authUiStore = authUiStore && new authUiStore(this);
    this.authDomainStore =
      authDomainStore &&
      new authDomainStore(
        this,
        offlineStorage,
        SERVER,
        this.notificationDomainStore
      );
    this.crudDomainStore =
      crudDomainStore &&
      new crudDomainStore(
        this,
        offlineStorage,
        SERVER,
        this.notificationDomainStore
      );
    this.socketDomainStore =
      socketDomainStore &&
      new socketDomainStore(this, SERVER, this.notificationDomainStore);
    this.adminDomainStore =
      adminDomainStore &&
      new adminDomainStore(this, SERVER, this.notificationDomainStore);
    this.mediaDomainStore =
      mediaDomainStore &&
      new mediaDomainStore(
        this,
        offlineStorage,
        SERVER,
        this.notificationDomainStore
      );
    this.formsDomainStore =
      formsDomainStore &&
      new formsDomainStore(
        this,
        offlineStorage,
        SERVER,
        this.notificationDomainStore
      );
    this.gameDomainStore =
      gameDomainStore &&
      new gameDomainStore(
        this,
        offlineStorage,
        SERVER,
        this.notificationDomainStore
      );
    this.unsplashDomainStore =
      unsplashDomainStore &&
      new unsplashDomainStore(
        this,
        offlineStorage,
        SERVER,
        unsplashAccessKey,
        this.notificationDomainStore
      );
    this.kbDomainStore =
      kbDomainStore &&
      new kbDomainStore(
        this,
        offlineStorage,
        SERVER,
        this.notificationDomainStore
      );
    //get jwt token if it's in the route
    if (skipAuth) {
      return;
    }
    const jwtToken = queryString.parse(location.search).jwt;
    const googleToken = queryString.parse(location.search).google_access_token;
    this.authDomainStore.storeToken(jwtToken, "jwtToken");
    this.authDomainStore.storeToken(googleToken, "googleToken");
    this.authDomainStore.isAuthenticated();
  }
}
