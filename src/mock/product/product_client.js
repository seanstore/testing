class ProductClient {
  fetchItems() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
  }
}

module.exports = ProductClient;
