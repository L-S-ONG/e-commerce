const initialState = [];

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };

    default:
      return state;
  }
};