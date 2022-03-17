import React from "react";
import { shallow } from "enzyme";
import FormInput from "./form-input.component";

describe("FormInput component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      handleChange: mockHandleChange,
      label: "email",
      value: "test@gmail.com",
    };
    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it("should render FormInput component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   it("should simulate handleChange", () => {
  //     wrapper.find("FormInputContainer").simulate("change");
  //     expect(mockHandleChange).toHaveBeenCalled();
  //   });

  it("should not render whent there is no label", () => {
    const mockNewProps = {
      handleChange: mockHandleChange,
      label: "",
      value: "test@gmail.com",
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.exists("FormInputLabel")).toBe(false);
  });
});
