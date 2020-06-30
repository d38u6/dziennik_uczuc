import React from "react";
import { shallow } from "enzyme";
import shortid from "shortid";

import { EditOptionsForm } from "./EditOptionsForm";
import selectionOptions from "../../../../../data/defaultSelectionOptions";
import {
  generateEmptySectionsValues,
  generData,
} from "../../../../../data/fixtuers";
const sectionsValues = generateEmptySectionsValues();

describe("EditOptionsForm container", () => {
  const props = {
    ...generData,
    selectionOptions,
    sectionsValues,
    addOption: jest.fn(),
    removeOption: jest.fn(),
    addAlert: jest.fn(),
  };
  const editOptionsForm = shallow(<EditOptionsForm {...props} />);

  it("renders `EditForm component` with default `show prop`", () => {
    expect(editOptionsForm.find("EditForm").prop("show")).toBe(false);
  });

  describe("when call `setFormShow` method", () => {
    const formShow = true;
    beforeEach(() => {
      editOptionsForm.instance().setFormShow(formShow);
    });

    it("should update `formShow` state property", () => {
      expect(editOptionsForm.state("formShow")).toBe(true);
    });

    it("should correctly pass updated `formShow` prop to `EditForm`", () => {
      expect(editOptionsForm.find("EditForm").prop("show")).toBe(formShow);
    });
  });

  describe("when call `textareaChangeHandler` method", () => {
    const value = "tested value area";
    beforeEach(() => {
      editOptionsForm.instance().textareaChangeHandler({ target: { value } });
    });

    it("should update 'textareaValue' state property", () => {
      expect(editOptionsForm.state("textareaValue")).toEqual(value);
    });

    it("should correctly pass updated `textareaValue` prop to `EditForm`", () => {
      expect(editOptionsForm.find("EditForm").prop("textareaConf").value).toEqual(
        value
      );
    });
  });

  describe("when call `removeOptionHandler` method and when option is currently chosen", () => {
    const optId = "zKYfjeNn";
    beforeEach(() => {
      jest.clearAllMocks();
      editOptionsForm.setProps({
        ...props,
        sectionsValues: {
          ...sectionsValues,
          [props.section]: [{ id: optId, value: "test" }],
        },
      });
      editOptionsForm.instance().removeOptionHandler(optId);
    });

    it("should call `addAlert` callback with `Warning` type", () => {
      expect(props.addAlert.mock.calls[0][0].type).toEqual("Warning");
    });

    it("should not call `removeOption` callback", () => {
      expect(props.removeOption.mock.calls.length).toEqual(0);
    });
  });

  describe("when call `removeOptionHandler` method and when option is currently not chosen", () => {
    const optId = "zKYfjeNn";
    beforeEach(() => {
      jest.clearAllMocks();
      editOptionsForm.setProps({ ...props });
      editOptionsForm.instance().removeOptionHandler(optId);
    });

    it("should call 'removeOption` callback in correctly optId param", () => {
      expect(props.removeOption.mock.calls[0][0]).toEqual(optId);
    });
  });

  describe("when call `addOptionHandler` method, and when `textareaValue` is empty/not valid", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      editOptionsForm
        .instance()
        .textareaChangeHandler({ target: { value: "      " } });
      editOptionsForm.instance().addOptionHandler();
    });

    it("should call `addAlert` callback with `Warning` type", () => {
      expect(props.addAlert.mock.calls[0][0].type).toEqual("Warning");
    });

    it("should not call `addOption` callback", () => {
      expect(props.addOption.mock.calls.length).toEqual(0);
    });
  });

  describe("when call `addOptionHandler` method, and when `textareaValue` is valid", () => {
    const value = "valid textarea value";
    beforeEach(() => {
      jest.clearAllMocks();
      editOptionsForm.instance().textareaChangeHandler({ target: { value } });
      editOptionsForm.instance().addOptionHandler();
    });

    it("should call `addOption` callback with correctly new option parma", () => {
      const option = props.addOption.mock.calls[0][0];
      expect(shortid.isValid(option.id)).toBe(true);
      expect(option).toEqual({
        id: option.id,
        value,
        genre: props.genreId,
        section: props.section,
      });
    });

    it("should clear `textareaValue` state property", () => {
      expect(editOptionsForm.state("textareaValue")).toEqual("");
    });
  });
});
