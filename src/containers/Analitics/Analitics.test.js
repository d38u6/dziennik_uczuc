import React from "react";
import { shallow } from "enzyme";

import { Analitics } from "./Analitics";

import mapRecordsToDaysRecords from "../../utility/mapRecordsToDaysRecords";
import { generateRecords } from "../../data/recordsGenerator";

describe("Analitics container", () => {
  const props = { records: [...generateRecords(30)] };
  const analitics = shallow(<Analitics {...props} />);

  it("renders `FeelingsChart` componet with correct 'daysRecords' prop", () => {
    expect(analitics.find("Connect(FeelingsChart)").prop("daysRecords")).toEqual(
      mapRecordsToDaysRecords(props.records)
    );
  });

  it("renders `FeelingsChart` componet with correct 'daysRecords' prop", () => {
    expect(analitics.find("RecordsPerDayChart").prop("daysRecords")).toEqual(
      mapRecordsToDaysRecords(props.records)
    );
  });

  it("without records, should renders `NoData component`", () => {
    const analitics = shallow(<Analitics records={[]} />);
    expect(analitics.find("NoData").exists()).toBe(true);
  });
});
