import * as actionTypes from '../contants/actionsTypes';

const initialState ={
  id_city : '',
  category: '',
};

const selectCity = (state = initialState, action)=>{

  switch (action.type) {
    case (actionTypes.FILTER_LOST):
      return {
        id_city: action.filter,
      };
    case (actionTypes.SELECT_CATEGORY):
      return{
        category: action.filter,
      };

    default: return state
  }
};

export default  selectCity;
