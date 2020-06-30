import React from "react";
import { shallow } from "enzyme";

import TimeScopeSelector from "./TimeScopeSelector";

describe("TimeScopeSelector container", () => {
  const props = { onScopeChange: jest.fn() };
  const timeScopeSelector = shallow(<TimeScopeSelector {...props} />);

  it("renders `Tabs component` with correctly `items prop`", () => {
    expect(timeScopeSelector.find("Tabs").prop("items")).toEqual(
      timeScopeSelector.state("tabItems").map(({ value, ...item }) => ({ ...item }))
    );
  });

  it("Should `call onScopeChange` callback with default socope", () => {
    expect(props.onScopeChange).toHaveBeenLastCalledWith(
      timeScopeSelector.state("scope")
    );
  });

  it("`createNewScope method` should return correctly scope `start` and `end`", () => {
    const numbersOfDays = 15;
    const returnedScope = timeScopeSelector.instance().createNewScope(numbersOfDays);
    const desiredScope = {
      end: Date.now(),
      start: Date.now() - 1000 * 60 * 60 * 24 * numbersOfDays,
    };
    expect(returnedScope.start).toBeLessThanOrEqual(desiredScope.start);
    expect(returnedScope.end).toBeLessThanOrEqual(desiredScope.end);
  });

  it("`createListOfDays` method should return correctly numbersOfDays", () => {
    const numbersOfDays = 28;
    const scope = {
      end: Date.now(),
      start: Date.now() - 1000 * 60 * 60 * 24 * numbersOfDays,
    };

    expect([...timeScopeSelector.instance().createListOfDays(scope)].length).toBe(
      numbersOfDays
    );
  });

  describe("When change tab, `call tabClickHandler` method", () => {
    const tabId = "10days";
    beforeEach(() => {
      timeScopeSelector.instance().tabClickHandler(tabId);
    });

    it("Should `call onScopeChange` callback with correctly socope", () => {
      expect(props.onScopeChange).toHaveBeenLastCalledWith(
        timeScopeSelector.state("scope")
      );
    });
  });
});
