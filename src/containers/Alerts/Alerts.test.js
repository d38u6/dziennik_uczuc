import React from "react";
import { shallow } from "enzyme";

import { Alerts } from "./Alerts";
import Alert from "../../components/PaperCSS/Alert/Alert";

const alert = {
  id: "simplyId",
  content: "test content",
  type: "Primary",
  showMs: 1000,
};

describe("Alerts container", () => {
  const props = { alerts: [alert, { ...alert, id: "2" }], onRemoveAlert: jest.fn() };
  const alerts = shallow(<Alerts {...props} />);

  it("renders `Row` component", () => {
    expect(alerts.find("Row").exists()).toBe(true);
  });

  it("renders correctly number of `Alert component`", () => {
    expect(alerts.find("Alert").length).toEqual(props.alerts.length);
  });

  it("correctly renders `Alert component`", () => {
    const alertCmp = shallow(alerts.instance().renderAlert(props.alerts[0]));
    expect(shallow(<Alert {...props.alerts[0]} />).html()).toEqual(alertCmp.html());
  });

  it("should `call onRemoveAlert` callback on close alert", () => {
    jest.useFakeTimers();
    const alertCmp = shallow(alerts.instance().renderAlert(props.alerts[1]));
    alertCmp.find(".BtnClose").simulate("click");
    jest.advanceTimersByTime(250);
    expect(props.onRemoveAlert).toHaveBeenCalled();
  });
});
