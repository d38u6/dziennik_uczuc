import React from "react";
import { shallow } from "enzyme";

import RecordsPerDayChart from "./RecordsPerDayChart";

import mapRecordsToDaysRecords from "../../../utility/mapRecordsToDaysRecords";
import { generateRecords } from "../../../data/recordsGenerator";
import TimeScopeSelector from "../ChartWithTimeScope/TimeScopeSelector/TimeScopeSelector";

describe("RecordsPerDayChart container", () => {
  const props = { daysRecords: mapRecordsToDaysRecords([...generateRecords(115)]) };
  const recordsPerDayChart = shallow(<RecordsPerDayChart {...props} />);

  it("renders `ChartWithTimeScope` component", () => {
    expect(recordsPerDayChart.find("ChartWithTimeScope").exists()).toBe(true);
  });

  describe("when `change timeScope` state property (`call timeScopeChangeHandler` method)", () => {
    const numberOfDays = 13;
    beforeEach(() => {
      const scope = new TimeScopeSelector({
        onScopeChange: () => {},
      }).createNewScope(numberOfDays);
      recordsPerDayChart.instance().timeScopeChangeHandler(scope);
    });

    it("should correctly pass numberOfDays in data prop object", () => {
      expect(
        Object.keys(recordsPerDayChart.find("ChartWithTimeScope").prop("data"))
          .length
      ).toBe(numberOfDays);
    });
  });
});
