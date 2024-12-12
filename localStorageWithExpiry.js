const localStorageWithExpiry = {
  setItem: (key, value, time) => {
    if ((!key, !value, !time)) {
      return "missing inputs";
    }
    const data = {
      value: value,
      expiry: Date.now() + time,
    };
    localStorage.setItem(key, JSON.stringify(data));
  },
  getItem: (key) => {
    if (!key) {
      return "Key missing";
    }
    const data = JSON.parse(localStorage.getItem(key));
    if (!data) {
      return "Expired";
    }
    if (Date.now() > data.expiry || data == null) {
      localStorage.removeItem(key);
      return "Expired";
    }
    return data.value;
  },
};

// localStorageWithExpiry.setItem("user", { name: "hello" }, 5000);
const res = localStorageWithExpiry.getItem("user");
console.log(res);
