import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  return (
    <CartIconContainer className="cart-icon">
      <ShoppingIconContainer
        className="shopping-icon"
        onClick={() => dispatch(toggleCartHidden())}
      />
      <ItemCountContainer className="item-count">
        {itemCount}
      </ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
