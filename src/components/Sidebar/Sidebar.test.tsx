import React from "react";
import Enzyme from "enzyme";
import Sidebar from "./Sidebar";

import { findByTestAttr } from "../../../test/testUtils";

describe("Sidebar component", () => {
  let wrapper: object;
  beforeEach(() => {
    wrapper = Enzyme.shallow(<Sidebar />);
  });
  it("displays the component container", () => {
    const container = findByTestAttr(wrapper, "component-container");
    expect(container.length).toBe(1);
  });
  it("displays the city name header", () => {
    const header = findByTestAttr(wrapper, "name-header");
    expect(header.length).toBe(1);
  });
  it("displays the weather icon", () => {
    const icon = findByTestAttr(wrapper, "weather-icon");
    expect(icon.length).toBe(1);
  });
  it("displays the temperature header", () => {
    const header = findByTestAttr(wrapper, "temp-header");
    expect(header.length).toBe(1);
  });
  describe("Temperature chart", () => {
    let wrapper: object;
    beforeEach(() => {
      wrapper = Enzyme.shallow(<Sidebar />);
    });
    it("displays the line chart container", () => {
      const container = findByTestAttr(wrapper, "line-chart-container");
      expect(container.length).toBe(1);
    });
    it("displays the temperature chart", () => {
      const chart = findByTestAttr(wrapper, "line-chart");
      expect(chart.length).toBe(1);
    });
  });
  describe("Rain chart", () => {
    let wrapper: object;
    beforeEach(() => {
      wrapper = Enzyme.shallow(<Sidebar />);
    });
    it("displays the bar chart container", () => {
      const container = findByTestAttr(wrapper, "bar-chart-container");
      expect(container.length).toBe(1);
    });
    it("displays the rain chance chart", () => {
      const chart = findByTestAttr(wrapper, "bar-chart");
      expect(chart.length).toBe(1);
    });
  });
});
