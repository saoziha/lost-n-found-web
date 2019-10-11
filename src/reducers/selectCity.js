import * as actionTypes from '../contants/actionsTypes';

const initialState ={
  id_city : '',
};

const selectCity = (state = initialState, action)=>{

  switch (action.type) {
    case (actionTypes.SELECT_CITY):
      return {
        id_city: action.city_id,
      };

    default: return state
  }
};

export default  selectCity;
