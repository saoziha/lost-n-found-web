import * as actionTypes from '../contants/actionsTypes';

const initialState = {
  id_city: null,
  category: null,
  keyword: null,
};

const filterLost = (state = initialState, action) => {

  switch (action.type) {
    case (actionTypes.FILTER_LOST):
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
};

export default filterLost;
