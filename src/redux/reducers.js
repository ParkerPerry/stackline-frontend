const initialState = {
  productDetails: {},
  salesData: [],
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCT_DETAILS':
      return { ...state, productDetails: action.payload };
    case 'SET_SALES_DATA':
      return { ...state, salesData: action.payload };
    default:
      return state;
  }
}
