export default class UserService {

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  signUp({ email, username, password }) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (Math.random() > 0.5)
          return reject(new Error("Could not get data from the server"));

        resolve({
          username: "Dmitriy",
          email: "dmitr.kurbatov@gmail.com",
          token: "123"
        });
      }, 1000)
    });

    // const url = 'http://localhost:8000/user/signup';
    // const data = { email, username, password };
    // fetch(url, {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(object => {
    //   if (object.error)
    //     return Promise.reject(new Error(object.error));
    //
    //     this.setToken(object.user.token);
    //
    //     return Promise.resolve(object.user);
    // });
  }

  logIn({ username, password }) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (Math.random() > 0.5)
          return reject(new Error("Could not get data from the server"));

        resolve({
          username: "Dmitriy",
          email: "dmitr.kurbatov@gmail.com",
          token: "123"
        });
      }, 1000)
    });

    // const url = 'http://localhost:8000/user/login';
    // const data = { username, password };
    // return fetch(url, {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data)
    //   })
    //   .then(res => res.json())
    //   .then(object => {
    //     if (object.error)
    //       return Promise.reject(new Error(object.error));
    //
    //     this.setToken(object.token);
    //
    //     return Promise.resolve(object.user);
    //   });
  }

  updateUser(data) {

    return Promise.resolve();

    // const token = this.getToken();
    // const url = 'http://localhost:8000/user/update?token=' + token;
    // return fetch(url, {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data)
    //   })
    //   .then(res => res.json())
    //   .then(object => {
    //     if (object.error)
    //       return Promise.reject(new Error(object.error));
    //
    //     return Promise.resolve();
    //   });
  }


}
