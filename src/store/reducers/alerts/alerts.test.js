import reducer from "./alerts";
import * as actions from "../../actions/alerts/alerts";

const alerts = [
  { id: "testesd", content: "mycons", type: "Success", showMs: 7000 },
  { id: "testesd2", content: "mycons2" },
];

describe("alerts reducer", () => {
  it("should add new aler to state", () => {
    const alert = { content: "new alert" };
    const lastAlertInState = reducer(alerts, actions.addAlert(alert)).pop();

    expect(lastAlertInState).toMatchObject(alert);
  });

  it("should removed alert from state", () => {
    const alertId = "testesd2";
    expect(reducer(alerts, actions.removeAlert(alertId))).toEqual(
      alerts.filter(({ id }) => id !== alertId)
    );
  });
});
