import React from "react";
import { shallow } from "enzyme";
import CartItem from "./cart-item.component";

it("should render CartItem component", () => {
  const mockItem = {
    imageUrl: "www.testimage.com",
    price: 100,
    name: "jacket",
    quantity: 3,
  };
  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
