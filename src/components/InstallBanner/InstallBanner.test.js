import React from "react";
import { shallow } from "enzyme";

import InstallBanner from "./InstallBanner";

const windowEvents = {};
window.addEventListener = jest.fn((event, cb) => {
  windowEvents[event] = cb;
});

describe("InstallBanner component", () => {
  let installBanner = shallow(<InstallBanner />);

  it("before call `beforeinstallprompt` event shuld render nothing", () => {
    expect(installBanner.get(0)).toBe(null);
  });

  describe("when call `beforeinstallprompt` event and `show` equal true", () => {
    let promptIsCall;
    beforeEach(() => {
      installBanner = shallow(<InstallBanner />);
      windowEvents.beforeinstallprompt({ prompt: () => (promptIsCall = true) });
    });

    afterEach(() => {
      localStorage.setItem("LAST_SHOW_INSTALL_BANNER", "0");
    });

    it("renders `div` element with correct `class name`", () => {
      expect(installBanner.find("div").hasClass("InstallBanner")).toBe(true);
    });

    it("renders `CloseBtn` component", () => {
      expect(installBanner.find("CloseBtn").exists()).toBe(true);
    });

    it("renders `InstallContent` component", () => {
      expect(installBanner.find("InstallContent").exists()).toBe(true);
    });

    it("renders `InstallBtn` component", () => {
      expect(installBanner.find("InstallBtn").exists()).toBe(true);
    });

    it("renders `NotNow` component", () => {
      expect(installBanner.find("NotNow").exists()).toBe(true);
    });

    it("should render `null` after `click CloseBtn", () => {
      installBanner.find("CloseBtn").simulate("click");
      expect(installBanner.get(0)).toBe(null);
    });

    it("should render `null` after `click NotNow", () => {
      installBanner.find("NotNow").simulate("click");
      expect(installBanner.get(0)).toBe(null);
    });

    describe("when `click InstallBtn`", () => {
      beforeEach(() => {
        promptIsCall = false;
        installBanner.find("InstallBtn").simulate("click");
      });

      it("should render `null` after `InstallBtn click`", () => {
        expect(installBanner.get(0)).toBe(null);
      });

      it("should call prompt function on `InstallBtn click`", () => {
        expect(promptIsCall).toBe(true);
      });
    });
  });
});
