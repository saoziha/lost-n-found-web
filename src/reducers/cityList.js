import * as actionTypes from '../contants/actionsTypes';

const initialState = [];


const cityList = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.FETCH_CITY):
      state = action.data_city;
      return state;
    default:
      return state
  }
};

export default cityList;