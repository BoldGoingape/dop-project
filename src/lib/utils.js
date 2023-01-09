//公共库 commonUtils =
export default {
  storage: {
    //sessionStorage
    setSession(key, value) {
      if (typeof value !== "string") {
        value = JSON.stringify(value);
      }
      window.sessionStorage.setItem(key, value);
    },
    getSession(key) {
      let value = window.sessionStorage.getItem(key);
      //   return JSON.parse(value);
      return value;
    },
    //删除Session
    removeSession(key) {
      window.sessionStorage.removeItem(key);
    },
    //loaclStorage
    setLocal(key, value) {
      if (typeof value !== "string") {
        value = JSON.stringify(value);
      }
      window.localStorage.setItem(key, value);
    },
    getLocal(key) {
      let value = window.localStorage.getItem(key);
      //   return JSON.parse(value);
      return value;
    },
    //删除loacl
    removeLocal(key) {
      window.localStorage.removeItem(key);
    }
  }
};
