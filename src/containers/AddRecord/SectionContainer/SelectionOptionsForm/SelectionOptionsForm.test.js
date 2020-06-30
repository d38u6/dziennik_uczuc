import React from "react";
import { shallow } from "enzyme";

import { SelectionOptionsForm } from "./SelectionOptionsForm";
import selectionOptions from "../../../../data/defaultSelectionOptions";
import genresData from "../../../../data/genresData";
import { generData } from "../../../../data/fixtuers";

describe("SelectionOptionsForm container", () => {
  const props = {
    ...generData,
    isFormShow: false,
    selectionOptions,
    addValue: jest.fn(),
    removeValue: jest.fn(),
  };
  const selectionsOptionsForm = shallow(<SelectionOptionsForm {...props} />);

  it("renders `CollapsibleCheckboxesForm componet`", () => {
    expect(selectionsOptionsForm.find("CollapsibleCheckboxesForm").exists()).toBe(
      true
    );
  });

  it("renders `EditOptionsForm component` inside CollapsibleCheckboxesForm", () => {
    expect(
      selectionsOptionsForm
        .find("CollapsibleCheckboxesForm > Connect(EditOptionsForm)")
        .exists()
    ).toBe(true);
  });

  describe("when call `toggleOpenHandler` method", () => {
    let oldOpenCollapsible;
    beforeEach(() => {
      oldOpenCollapsible = selectionsOptionsForm.state("openCollapsible");
      selectionsOptionsForm.instance().toggleOpenHandler();
    });

    it("should change `openCollapsible` property inside state", () => {
      expect(selectionsOptionsForm.state("openCollapsible")).toBe(
        !oldOpenCollapsible
      );
    });

    it("should pass new `openCollapsible` value to CollapsibleCheckboxesForm", () => {
      expect(
        selectionsOptionsForm.find("CollapsibleCheckboxesForm").prop("open")
      ).toBe(selectionsOptionsForm.state("openCollapsible"));
    });
  });

  describe("when call changeCheckboxHandler with checked value", () => {
    const boxId = "QpyAdNzG";
    beforeEach(() => {
      jest.clearAllMocks();
      selectionsOptionsForm
        .instance()
        .changeCheckboxHandler({ target: { checked: true } }, boxId);
    });

    it("should update checkbox in state", () => {
      expect(
        selectionsOptionsForm.state("checkboxes").find(({ id }) => id === boxId)
          .checked
      ).toBe(true);
    });

    it("should `call addValue` callback with correctly section param", () => {
      expect(props.addValue.mock.calls[0][0]).toEqual(props.section);
    });

    it("should `call addValue` callback with correctly value param", () => {
      const value = {
        id: boxId,
        color: genresData.find(({ id }) => props.genreId === id)?.color || null,
        value: selectionOptions.find(({ id }) => id === boxId).value,
      };
      expect(props.addValue.mock.calls[0][1]).toEqual(value);
    });
  });

  describe("when call changeCheckboxHandler without checked value", () => {
    const boxId = "QpyAdNzG";
    beforeEach(() => {
      jest.clearAllMocks();
      selectionsOptionsForm
        .instance()
        .changeCheckboxHandler({ target: { checked: false } }, boxId);
    });

    it("should update checkbox in state", () => {
      expect(
        selectionsOptionsForm.state("checkboxes").find(({ id }) => id === boxId)
          .checked
      ).toBe(false);
    });

    it("should `call removeValue` callback with correctly section param", () => {
      expect(props.removeValue.mock.calls[0][0]).toEqual(props.section);
    });

    it("should `call removeValue` callback with correctly boxId param", () => {
      expect(props.removeValue.mock.calls[0][1]).toEqual(boxId);
    });
  });
});
