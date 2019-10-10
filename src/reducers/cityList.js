import * as actionTypes from '../contants/actionsTypes';

const initialState = [{
  id: 1,
  name_city: "Da Nang"
},
  {
    id: 2,
    name_city: "HCM"
  },
  {
    id: 3,
    name_city: "Ha Noi"
  }]


const cityList = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.FETCH_CITY):
      state = action.cityList;
      return [...state];

    default:
      return [...state]
  }
};

export default cityList;