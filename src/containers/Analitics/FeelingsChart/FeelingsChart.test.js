import React from "react";
import { shallow } from "enzyme";

import { FeelingsChart } from "./FeelingsChart";

import selectionOptions from "../../../data/defaultSelectionOptions";
import { daysRecords } from "../../../data/fixtuers";

describe("FeelingsChart container", () => {
  const props = { daysRecords, selectionOptions };
  const feelingsChart = shallow(<FeelingsChart {...props} />);

  it("renders `ChartWithTimeScope` component", () => {
    expect(feelingsChart.find("ChartWithTimeScope").exists()).toBe(true);
  });

  it("`extractListOfFeelingsInRecord fuction` should generate correct list of feelings", () => {
    const list = feelingsChart
      .instance()
      .extractListOfFeelingsFromRecord(props.daysRecords[0].records[0]);
    expect([...list]).toEqual(
      expect.arrayContaining(["fear", "shame", "joy", "anger", "sadness"])
    );
  });

  it("`countFeelingsInDay method` should return correct feelings: amount object", () => {
    const feelings = feelingsChart
      .instance()
      .countFeelingsInDay(props.daysRecords[0]);
    expect(feelings).toEqual({ fear: 3, shame: 2, joy: 2, anger: 2, sadness: 2 });
  });

  it("`prepareFeelingsObject method` should return correctly feelings object", () => {
    const feelings = feelingsChart.instance().prepareFeelingsObject();
    expect(feelings).toEqual({ Lęk: 0, Wstyd: 0, Złość: 0, Smutek: 0, Radość: 0 });
  });

  it("`countFeelingsInDays method` should return correct feelings: amount object", () => {
    const feelings = feelingsChart.instance().countFeelingsInDays(props.daysRecords);
    expect(feelings).toEqual({ Lęk: 4, Wstyd: 2, Złość: 2, Smutek: 2, Radość: 3 });
  });

  it("should pass default feelings object to `ChartWithTimeScope`", () => {
    expect(feelingsChart.find("ChartWithTimeScope").prop("data")).toEqual({
      Lęk: 0,
      Wstyd: 0,
      Złość: 0,
      Smutek: 0,
      Radość: 0,
    });
  });

  it("when set new time scope, should pass correctly feelings object to `ChartWithTimeScope`", () => {
    const timeScope = {
      start: 1591898207972,
      end: 1591898207972,
      listOfDays: [1591898207972],
    };
    feelingsChart.instance().timeScopeChangeHandler(timeScope);
    expect(feelingsChart.find("ChartWithTimeScope").prop("data")).toEqual({
      Lęk: 3,
      Wstyd: 2,
      Złość: 2,
      Smutek: 2,
      Radość: 2,
    });
  }); //1591984607972 //1591898207972
});
