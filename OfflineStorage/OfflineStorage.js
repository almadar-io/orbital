const offlineStorage = {
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

export default offlineStorage;
