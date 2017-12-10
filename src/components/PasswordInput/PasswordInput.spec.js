import React from "react";
import renderer from "react-test-renderer";
import PasswordInput from "./PasswordInput";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("toggles input type when show/hide password clicked", () => {
  const wrapper = shallow(
    <PasswordInput
      htmlId="test"
      name="test"
      onChange={() => {}}
      value=""
      showVisibilityToggle
    />
  );

  expect(wrapper.find({ type: "password" })).toHaveLength(1);
  expect(wrapper.find({ type: "text" })).toHaveLength(0);

  wrapper.find("a").simulate("click");
  expect(wrapper.find({ type: "password" })).toHaveLength(0);
  expect(wrapper.find({ type: "text" })).toHaveLength(1);
});

test("hides password quality by default", () => {
  const tree = renderer
    .create(
      <PasswordInput
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="AaSsDdFf123#!"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
