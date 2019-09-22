import React from "react";
import Enzyme, { shallow } from "enzyme";
import WeatherMap, { UnconnectedWeatherMap } from "./WeatherMap";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<WeatherMap store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("WeatherMap component", () => {
  let wrapper: object;
  beforeEach(() => {
    wrapper = setup({});
  });
  it("displays the component container", () => {
    let component = findByTestAttr(wrapper, "component-container");
    expect(component.length).toBe(1);
  });
  it("displays the searchInput", () => {
    let searchInput = findByTestAttr(wrapper, "map-search-input");
    expect(searchInput.length).toBe(1);
  });
  it("displays the map ", () => {
    let mapContainer = findByTestAttr(wrapper, "google-map-container");
    expect(mapContainer.length).toBe(1);
  });
});
