import React from "react";
import { shallow } from "enzyme";

import { SelectionOptionsOptions } from "./SelectionOptionsOptions";
import selectionOptions from "../../../data/defaultSelectionOptions";

describe("SelectionOptionsOptions container", () => {
  const props = {
    selectionOptions,
    setSelectionOptions: jest.fn(),
    addAlert: jest.fn(),
  };
  const selectionOptionsOptions = shallow(<SelectionOptionsOptions {...props} />);

  it("renders `OptionsWrapper` component with correct `title", () => {
    expect(selectionOptionsOptions.find("OptionsWrapper").prop("title")).toEqual(
      "Edytuj opcje wyboru"
    );
  });

  it("renders import `OptionButton` component", () => {
    expect(selectionOptionsOptions.find("OptionButton").at(0).props()).toMatchObject(
      {
        capiton: "Importuj",
        fileButton: true,
      }
    );
  });

  it("renders export `OptionButton` component", () => {
    expect(selectionOptionsOptions.find("OptionButton").at(1).props()).toMatchObject(
      {
        capiton: "Eksportuj",
      }
    );
  });

  it("renders restore default `OptionButton` component", () => {
    expect(selectionOptionsOptions.find("OptionButton").at(2).props()).toMatchObject(
      {
        capiton: "Przywróć domyśle opcje wyboru",
        type: "Danger",
      }
    );
  });

  it("renders `ConfirmModal` component with default `show prop`", () => {
    expect(selectionOptionsOptions.find("ConfirmModal").prop("show")).toBe(false);
  });

  it("calling `importChangeHandler` method with not valid selectionOptions file, should `call addAlert` callback with `Danger` type", async () => {
    await selectionOptionsOptions.instance().importChangeHandler({
      target: {
        files: [
          new Blob([JSON.stringify([...selectionOptions, {}])], {
            type: "application/json",
          }),
        ],
      },
    });
    expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Danger" });
  });

  describe("calling `importChangeHandler` method with correcty selectionOptions file", () => {
    let importChangeHandler;
    beforeEach(() => {
      jest.clearAllMocks();
      importChangeHandler = async () => {
        await selectionOptionsOptions.instance().importChangeHandler({
          target: {
            files: [
              new Blob([JSON.stringify(selectionOptions)], {
                type: "application/json",
              }),
            ],
          },
        });
      };
    });

    it("should `call addAlert` callback with `success` type", async () => {
      await importChangeHandler();
      expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Success" });
    });

    it("should `call setSelectionOptions` callback with options param", async () => {
      await importChangeHandler();
      expect(props.setSelectionOptions).toHaveBeenLastCalledWith(selectionOptions);
    });
  });

  describe("when clicking on the 'export button', and selectionOptions is empty array", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      selectionOptionsOptions.setProps({ ...props, selectionOptions: [] });
      selectionOptionsOptions.find("OptionButton").at(1).simulate("click");
    });

    it("should `call addAlert` callback with `Danger` type ", () => {
      expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Danger" });
    });
  });

  describe("when clicking on the 'export button', and selectionOptions is not empty array", () => {
    URL.createObjectURL = jest.fn();
    beforeEach(() => {
      jest.clearAllMocks();
      selectionOptionsOptions.setProps({ ...props, selectionOptions });
      selectionOptionsOptions.find("OptionButton").at(1).simulate("click");
    });

    it("should `call addAlert` callback with `success` type", () => {
      expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Success" });
    });

    it("should `call URL.createObjectURL` with correct Blob param", () => {
      expect(URL.createObjectURL).toHaveBeenLastCalledWith(
        new Blob([JSON.stringify(selectionOptions)], { type: "application/json" })
      );
    });
  });

  describe("when clicking on the 'restore default button'", () => {
    beforeEach(() => {
      selectionOptionsOptions.find("OptionButton").at(2).simulate("click");
    });
    it("should correctly pass `restoreDefaultModalShow` prop to `ConfirmModal`", () => {
      expect(selectionOptionsOptions.find("ConfirmModal").prop("show")).toBe(true);
    });

    it("should correctly set state `restoreDefaultModalShow` property", () => {
      expect(selectionOptionsOptions.state("restoreDefaultModalShow")).toBe(true);
    });
  });

  describe("when calling `onRestoreDefault` method", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      selectionOptionsOptions.instance().onRestoreDefault();
    });

    it("should correctly set state `restoreDefaultModalShow` property", () => {
      expect(selectionOptionsOptions.state("restoreDefaultModalShow")).toBe(false);
    });

    it("should `call setSelectionOptions` callback with default options", () => {
      expect(props.setSelectionOptions).toHaveBeenLastCalledWith(selectionOptions);
    });

    it("should `call addAlert` callback with correct type", () => {
      expect(props.addAlert.mock.calls[0][0]).toMatchObject({ type: "Success" });
    });
  });
});
