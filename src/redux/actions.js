
import jsonData from './stackline_frontend_assessment_data_2021.json';

export const fetchProductData = () => (dispatch) => {
  //simulating a fetch call
  const productDetails = jsonData[0];
  dispatch(setProductDetails(productDetails));
  dispatch(setSalesData(productDetails.sales));
};

export const setProductDetails = (productDetails) => ({
  type: 'SET_PRODUCT_DETAILS',
  payload: productDetails,
});

export const setSalesData = (salesData) => ({
  type: 'SET_SALES_DATA',
  payload: salesData,
});
