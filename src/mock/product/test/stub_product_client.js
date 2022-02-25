class StubProductClient {
  // ProductClient처럼 네트워크에 의존하지 않음
  async fetchItems() {
    return [
      {
        item: "milk",
        available: true,
      },
      {
        item: "banana",
        available: false,
      },
    ];
  }
}

module.exports = StubProductClient;
