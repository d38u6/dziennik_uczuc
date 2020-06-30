import rootReducer from "./index";

describe("root reducer", () => {
  it("should return inital state", () => {
    expect(rootReducer({}, {})).toEqual({
      selectionOptions: [],
      sectionsValues: {},
      records: [],
      alerts: [],
    });
  });
});
