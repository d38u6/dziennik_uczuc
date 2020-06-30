import reducer from "./selectionOptions";
import * as actions from "../../actions/selectionOptions/selectionOptions";
import selectionOptions from "../../../data/defaultSelectionOptions";

describe("selectionOptions reducer", () => {
  it("should set selection options to state", () => {
    expect(
      reducer(undefined, actions.setSelectionOptions(selectionOptions))
    ).toEqual(selectionOptions);
  });

  it("should add new option to state", () => {
    const initState = selectionOptions.slice(15);
    const option = selectionOptions[5];
    expect(reducer(initState, actions.addSelectionOption(option))).toEqual([
      ...initState,
      option,
    ]);
  });

  it("should remove option from state", () => {
    const optionId = selectionOptions[10].id;
    expect(
      reducer(selectionOptions, actions.removeSelectionOption(optionId))
    ).toEqual(selectionOptions.filter(({ id }) => id !== optionId));
  });
});
