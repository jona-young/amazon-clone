import Product from "./Product";
import React from "react";

export const initialState = {
  basket: [
    {
      id: "234662626",
      title: "The Legend of Zelda: Links Awakening",
      price: 79.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91BI4LT1iSL._AC_SY550_.jpg",
    },
    {
      id: "234662626",
      title: "The Legend of Zelda: Links Awakening",
      price: 79.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91BI4LT1iSL._AC_SY550_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      // Adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Remove from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists in basket, remove
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
