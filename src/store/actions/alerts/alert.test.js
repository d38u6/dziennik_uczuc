import * as actions from "./alerts";
import shortid from "shortid";
import { ADD_ALERT, REMOVE_ALERT } from "../types";

describe("alert actions", () => {
  describe("creates an action to add alert", () => {
    const alert = { content: "test content", type: "Success", showMs: 1258 };
    let action;
    beforeEach(() => {
      action = actions.addAlert(alert);
    });

    it("action should contain correctly type `ADD_ALERT`", () => {
      expect(action.type).toEqual(ADD_ALERT);
    });

    it("action should contain alert properties", () => {
      expect(action.alert).toMatchObject(alert);
    });
  });

  describe("creates an action to remove alert", () => {
    const id = shortid.generate();
    let action;
    beforeEach(() => {
      action = actions.removeAlert(id);
    });

    it("action should contain correctly type `REMOVE_ALERT`", () => {
      expect(action.type).toEqual(REMOVE_ALERT);
    });

    it("action should contain correctly id property", () => {
      expect(action.id).toBe(id);
    });
  });
});
