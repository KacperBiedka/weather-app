import React from "react";
import Enzyme, { shallow } from "enzyme";
import Sidebar, { UnconnectedSidebar } from "./Sidebar";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Sidebar store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Sidebar component", () => {
  let wrapper: object;
  beforeEach(() => {
    const initialState = {
      temperature: {
        temp: 17
      }
    };
    wrapper = setup(initialState);
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
      const initialState = {
        temperature: {
          temp: 17
        }
      };
      wrapper = setup(initialState);
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
      const initialState = {
        temperature: {
          temp: 17
        }
      };
      wrapper = setup(initialState);
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
