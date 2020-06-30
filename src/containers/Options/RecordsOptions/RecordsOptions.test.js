import React from "react";
import { shallow } from "enzyme";

import { RecordsOptions } from "./RecordsOptions";
import { generateRecords } from "../../../data/recordsGenerator";

describe("RecordsOptions container", () => {
  const props = {
    records: [],
    addAlert: jest.fn(),
    setRecords: jest.fn(),
    removeAllRecords: jest.fn(),
  };

  const recordsOptions = shallow(<RecordsOptions {...props} />);

  it("renders `OptionsWrapper` component with correct `title", () => {
    expect(recordsOptions.find("OptionsWrapper").prop("title")).toEqual(
      "Edytuj wpisy"
    );
  });

  it("renders import `OptionButton` component", () => {
    expect(recordsOptions.find("OptionButton").at(0).props()).toMatchObject({
      capiton: "Importuj",
      fileButton: true,
    });
  });

  it("renders export `OptionButton` component", () => {
    expect(recordsOptions.find("OptionButton").at(1).props()).toMatchObject({
      capiton: "Eksportuj",
    });
  });

  it("renders remove all `OptionButton` component", () => {
    expect(recordsOptions.find("OptionButton").at(2).props()).toMatchObject({
      capiton: "Usuń wszystkie wpisy",
      type: "Danger",
    });
  });

  it("renders `ConfirmModal` component with default `show prop`", () => {
    expect(recordsOptions.find("ConfirmModal").prop("show")).toBe(false);
  });

  it("calling `importChangeHandler` method with not valid records file, should `call addAlert` callback with `Danger` type", async () => {
    const records = [...generateRecords(10)];
    records[8] = { ...records[8], date: "121541" };
    await recordsOptions.instance().importChangeHandler({
      target: {
        files: [new Blob([JSON.stringify(records)], { type: "application/json" })],
      },
    });
    expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Danger" });
  });

  describe("calling `importChangeHandler` method with correcty records file", () => {
    const records = [...generateRecords(10)];
    let importChangeHandler;
    beforeEach(() => {
      jest.clearAllMocks();
      importChangeHandler = async () => {
        await recordsOptions.instance().importChangeHandler({
          target: {
            files: [
              new Blob([JSON.stringify(records)], { type: "application/json" }),
            ],
          },
        });
      };
    });

    it("should `call addAlert` callback with `success` type", async () => {
      await importChangeHandler();
      expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Success" });
    });

    it("should `call setRecords` callback with records param", async () => {
      await importChangeHandler();
      expect(props.setRecords).toHaveBeenLastCalledWith(records);
    });
  });

  describe("when clicking on the 'export button', and records is empty array", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      recordsOptions.find("OptionButton").at(1).simulate("click");
    });

    it(" should `call addAlert` callback with `Danger` type ", () => {
      expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Danger" });
    });
  });

  describe("when clicking on the 'export button', and records is not empty array", () => {
    const records = [...generateRecords(12)];
    URL.createObjectURL = jest.fn();
    beforeEach(() => {
      jest.clearAllMocks();
      recordsOptions.setProps({ ...props, records });
      recordsOptions.find("OptionButton").at(1).simulate("click");
    });

    it("should `call addAlert` callback with `success` type", () => {
      expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Success" });
    });

    it("should `call URL.createObjectURL` with correct Blob param", () => {
      expect(URL.createObjectURL).toHaveBeenLastCalledWith(
        new Blob([JSON.stringify(records)], { type: "application/json" })
      );
    });
  });

  describe("when clicking on the 'remove all button'", () => {
    beforeEach(() => {
      recordsOptions.find("OptionButton").at(2).simulate("click");
    });
    it("should correctly pass `removeAllModalShow` prop to `ConfirmModal`", () => {
      expect(recordsOptions.find("ConfirmModal").prop("show")).toBe(true);
    });

    it("should correctly set state `removeAllModalShow` property", () => {
      expect(recordsOptions.state("removeAllModalShow")).toBe(true);
    });
  });

  describe("when calling `removeAllHandler` method", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      recordsOptions.instance().removeAllHandler();
    });

    it("should correctly set state `removeAllModalShow` property", () => {
      expect(recordsOptions.state("removeAllModalShow")).toBe(false);
    });

    it("should `call removeAllRecords` callback", () => {
      expect(props.removeAllRecords).toHaveBeenCalled();
    });

    it("should `call addAlert` callback with correct type", () => {
      expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Success" });
    });
  });
});
