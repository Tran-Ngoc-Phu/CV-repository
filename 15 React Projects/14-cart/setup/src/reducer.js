function reducer(state, action) {
  let newCart = [...state.cart];
  switch (action.type) {
    case "INCREASE":
      newCart = state.cart.map((item) => {
        let newItem = item;
        if (item.id === action.id) {
          newItem = { ...item, amount: item.amount + 1 };
        }
        return newItem;
      });
      return { ...state, cart: newCart };
    case "DECREASE":
      newCart = state.cart
        .map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              amount: item.amount - 1 <= 0 ? null : item.amount - 1,
            };
          }
          return item;
        })
        .filter((item) => item.amount !== null);
      return { ...state, cart: newCart };
    case "REMOVE":
      const idArray = state.cart.findIndex((item) => item.id === action.id);

      newCart.splice(idArray, 1);
      return { ...state, cart: newCart };
    case "TOTAL_PRICE":
      const totalPrice = state.cart
        .reduce(
          (previous, current) => previous + current.amount * current.price,
          0
        )
        .toFixed(2);
      return { ...state, totalPrice: totalPrice };
    case "TOTAL_AMOUNT":
      const totalAmount = state.cart.reduce(
        (previous, current) => previous + current.amount,
        0
      );
      return { ...state, totalAmount: totalAmount };
    case "DISPLAY_ITEM":
      return { ...state, cart: action.newFetchCart };
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    case "LOADING": {
      return { ...state, loading: action.loading };
    }
    default:
      return state;
  }
}

export default reducer;
