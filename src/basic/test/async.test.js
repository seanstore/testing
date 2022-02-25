const fetchProduct = require("../async");

describe("async", () => {
  // 좋지 않은 방법
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 1000 });
      done();
    });
  });

  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 1000 });
    });
  });

  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "milk", price: 1000 });
  });

  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "milk",
      price: 1000,
    });
  });

  it("async-rejects", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
