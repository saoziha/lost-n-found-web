import * as actionTypes from '../contants/actionsTypes';

const initialState ={
  id_city : '',
};

const selectCity = (state = initialState, action)=>{

  switch (action.type) {
    case (actionTypes.SELECT_CITY):
      return {
          city_id: action.id_city,
      };

    default: return state
  }
};

export default  selectCity;
