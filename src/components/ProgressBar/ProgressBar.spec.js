import React from "react";
import Enzyme, { shallow } from "enzyme";
import ProgressBar from "./ProgressBar";

import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("ProgressBar", () => {
  test("getWidthAsPercentOfTotalWidth should return the right number", () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500} />);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();

    expect(width).toEqual(250);
  });
});
