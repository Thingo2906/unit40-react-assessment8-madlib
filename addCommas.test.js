const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("Works for 632537", () => {
    expect(addCommas(632537)).toEqual("632,537");
  })
  test("Works for 136873.56", () => {
    expect(addCommas(136873.56)).toEqual("136,873.56");
  })
  test("Works for -3253263", () => {
    expect(addCommas(-3253263)).toEqual("-3,253,263");
  })
});
