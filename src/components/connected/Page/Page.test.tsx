import ComponentTester from "../../../utilities/ComponentTester";

import Page from "./Page";

const component = new ComponentTester(Page, true)
  .withDefaultProps({
    className: "TestClassName"
  })
  .withDefaultReduxState({
    app: { isLoading: false }
  })
  .withDefaultChildren("Page");

describe("[connected] <Page />", () => {
  describe("when the app isn't loading", () => {
    const { wrapper } = component.mount();

    it("doesn't render with isLoading class", () => {
      expect(wrapper.hasClass("isLoading")).toBe(false);
    });

    it("renders children", () => {
      expect(wrapper.find(".Page--body").text()).toBe("Page");
    });
  });

  describe("when the app is loading", () => {
    const { wrapper } = component
      .withReduxState({
        app: { isLoading: true }
      })
      .mount();

    it("renders with isLoading class", () => {
      expect(wrapper.render().hasClass("isLoading")).toBe(true);
    });

    it("doesn't render children", () => {
      expect(wrapper.find(".Page--body").text()).toBe("");
    });
  });
});
