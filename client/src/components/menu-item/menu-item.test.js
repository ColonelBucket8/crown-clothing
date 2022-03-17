import React from "react";
import { shallow } from "enzyme";
import MenuItem from "./menu-item.component";

describe("MenuItem component", () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = "/hats";
  const size = "large";
  const imageUrl = "www.testimage.com";
  const title = "hats";

  beforeEach(() => {
    mockMatch = {
      url: "/shop",
    };
    mockHistory = {
      push: jest.fn(),
    };
    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      title,
      imageUrl,
      size,
      linkUrl,
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it("should render MenuItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   it("should call history push when MenuItem container is clicked", () => {
  //     wrapper.find("MenuItemContainer").simulate("click");
  //     expect(mockHistory.push).toBeCalledWith(`${mockMatch}${linkUrl}`);
  //   });

  it("should pass size to MenuItemContainer as the prop size", () => {
    expect(wrapper.find("MenuItemContainer").prop("size")).toBe(size);
  });
});
