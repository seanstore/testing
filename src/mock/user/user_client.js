class UserClient {
  login(id, password) {
    return fetch("https://jsonplaceholder.typicode.com/users/1").then(
      (response) => response.json()
    );
  }
}

module.exports = UserClient;
