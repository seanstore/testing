const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");
jest.mock("../product_client");

describe("ProductService", () => {
  let productService;
  const fetchItems = jest.fn(async () => [
    {
      item: "milk",
      available: true,
    },
    {
      item: "banana",
      available: false,
    },
  ]);
  // ProductService는 ProductClient에 의존하므로 mock으로 만들어 의존성을 없앨 수 있다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  beforeEach(() => {
    productService = new ProductService();
    // fetchItems.mockClear();
    // ProductClient.mockClear();
    // 또는 clearMocks: true 설정
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([
      {
        item: "milk",
        available: true,
      },
    ]);
  });
});
