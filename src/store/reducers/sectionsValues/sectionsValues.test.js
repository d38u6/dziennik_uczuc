import reducer from "./sectionsValues";
import * as actions from "../../actions/sectionsValues/sectionsValues";
import { valuesData } from "../../../data/fixtuers";

const sectionId = "feelings";
describe("sectionValues reducer", () => {
  it("should init section values array in the state object", () => {
    expect(reducer(undefined, actions.initSectionValues(sectionId))).toEqual({
      [sectionId]: [],
    });
  });

  it("should add new value to section values array", () => {
    const initState = { [sectionId]: [valuesData[0]] };
    const value = valuesData[1];
    expect(reducer(initState, actions.addValue(sectionId, value))).toEqual({
      [sectionId]: [...valuesData],
    });
  });

  it("should replace textarea value in section values array", () => {
    const initState = { [sectionId]: [{ id: "textarea", value: "replaceme" }] };
    const value = { id: "textarea", value: "replaced" };
    expect(reducer(initState, actions.addValue(sectionId, value))).toEqual({
      [sectionId]: [value],
    });
  });

  it("should remove valu from section values array", () => {
    const initState = { [sectionId]: valuesData };
    const valueId = valuesData[1].id;
    expect(reducer(initState, actions.removeValue(sectionId, valueId))).toEqual({
      [sectionId]: [valuesData[0]],
    });
  });
});
