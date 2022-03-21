import React from "react";
import { shallow } from "enzyme";
import ShopPage from "./shop.component";

it("should render shop page", () => {
  expect(
    shallow(
      <div>
        <ShopPage />
      </div>
    )
  ).toMatchSnapshot();
});
