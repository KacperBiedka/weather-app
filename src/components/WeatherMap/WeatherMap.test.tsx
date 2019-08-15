import React from "react";
import Enzyme from "enzyme";
import WeatherMap from "./WeatherMap";

import { findByTestAttr } from "../../../test/testUtils";

describe("WeatherMap component", () => {
  let wrapper: object;
  beforeEach(() => {
    wrapper = Enzyme.shallow(<WeatherMap />);
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
