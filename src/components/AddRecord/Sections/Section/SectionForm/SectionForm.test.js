import React from "react";
import { shallow } from "enzyme";

import SectionFrom from "./SectionForm";
import genresData from "../../../../../data/genresData";
import { modalFormConf } from "../../../../../data/fixtuers";

describe("SectionForm Component", () => {
  const setShow = jest.fn();

  const props = {
    ...modalFormConf,
    setShow,
    icon: "icon",
    genres: genresData,
  };
  const sectionForm = shallow(<SectionFrom {...props} />);

  it("renders `SectionButton` component", () => {
    expect(sectionForm.find("SectionButton").exists()).toBe(true);
  });

  it("renders `ModalForm` component", () => {
    expect(sectionForm.find("ModalForm").exists()).toBe(true);
  });

  it("renders correnct `numbers` of `SelectionOptionsForm` component", () => {
    expect(sectionForm.find("Connect(SelectionOptionsForm)").length).toEqual(
      props.genres.length
    );
  });

  it("Should call `onShow` callback on `SectionButton click`", () => {
    sectionForm.find("SectionButton").simulate("click");
    expect(setShow).toHaveBeenCalled();
  });
});
