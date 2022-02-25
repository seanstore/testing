const UserService = require("../user_service");
const UserClient = require("../user_client");
jest.mock("../user_client");

describe("UserService", () => {
  let userService;
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("calls login() on UserClient when tries to logIn", async () => {
    await userService.logIn("sean", 1234);
    expect(login.mock.calls.length).toBe(1);
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.logIn("sean", 1234);
    await userService.logIn("sean", 1234);
    expect(login.mock.calls.length).toBe(1);
  });
});
