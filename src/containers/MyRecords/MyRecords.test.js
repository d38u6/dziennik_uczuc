import React from "react";
import { shallow } from "enzyme";

import { MyRecords } from "./MyRecords";
import { generateRecords } from "../../data/recordsGenerator";
import mapRecordsToDaysRecords from "../../utility/mapRecordsToDaysRecords";

describe("MyRecords container", () => {
  const props = { records: [], removeRecord: jest.fn() };
  const myRecords = shallow(<MyRecords {...props} />);

  it("when `records prop` is empty array should render `NoData` component ", () => {
    expect(myRecords.find("NoData").exists()).toBe(true);
  });

  describe("when `records prop` is not empty array", () => {
    const records = [...generateRecords(1000)];
    const daysRecords = mapRecordsToDaysRecords(records, true);
    beforeEach(() => {
      myRecords.setProps({ records });
    });

    it("state should containt correctly `days property`", () => {
      expect(myRecords.state("days")).toEqual(daysRecords);
    });

    it("renders correctly number of `Day` component", () => {
      expect(myRecords.find("Day").length).toBe(
        Math.min(daysRecords.length, myRecords.state("daysPerPage"))
      );
    });

    it("calling `prevPage` method should not decrement `currentPage prop` when his is less at 1", () => {
      myRecords.instance().prevPage();
      expect(myRecords.state("currentPage")).toBe(0);
    });

    it("calling `prevPage` method should decrement `currentPage prop` when his is greater at 0", () => {
      myRecords.setState({ currentPage: Math.round(Math.random() * 100) });
      const currentPage = myRecords.state("currentPage");
      myRecords.instance().prevPage();
      expect(myRecords.state("currentPage")).toBe(Math.max(currentPage - 1, 0));
    });

    it("calling `nextPage` method should increment `currentPage prop` when exist more records", () => {
      myRecords.setState({
        currentPage: Math.min(
          Math.round(Math.random() * 25),
          Math.ceil(daysRecords.length / myRecords.state("daysPerPage"))
        ),
      });

      const currentPage = myRecords.state("currentPage");
      myRecords.instance().nextPage();
      expect(myRecords.state("currentPage")).toBe(
        Math.min(
          currentPage + 1,
          Math.ceil(daysRecords.length / myRecords.state("daysPerPage"))
        )
      );
    });

    it("calling `nextPage` method should not increment `currentPage prop` when not exist more records", () => {
      myRecords.setState({
        currentPage: Math.ceil(daysRecords.length / myRecords.state("daysPerPage")),
      });

      const currentPage = myRecords.state("currentPage");
      myRecords.instance().nextPage();
      expect(myRecords.state("currentPage")).toBe(currentPage);
    });
  });
});
