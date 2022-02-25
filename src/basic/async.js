function fetchProduct(error) {
  if (error === "error") {
    return Promise.reject("network error");
  } else {
    return Promise.resolve({ item: "milk", price: 1000 });
  }
}

module.exports = fetchProduct;
