// const ProductClient = require("./product_client");

class ProductService {
  constructor(productClient) {
    // 직접 생성하는 것은 DI 원칙에 맞지 않는다. 외부에서 받아와야 한다.
    // this.productClient = new ProductClient();
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
