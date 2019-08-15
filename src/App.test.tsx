import React from "react";
import Enzyme from "enzyme";
import App from "./App";

import { findByTestAttr } from "../test/testUtils";

it("renders without crashing", () => {
  const wrapper = Enzyme.shallow(<App />);
  const container = findByTestAttr(wrapper, "app-container");
  expect(container.length).toBe(1);
});
