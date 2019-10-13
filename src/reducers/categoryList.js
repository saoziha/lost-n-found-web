import * as actionTypes from '../contants/actionsTypes';


const initialState = {
  name_ategory : ''
};

const clickCategory = (state = initialState, action)=>{
  switch (action.type) {
    case (actionTypes.FILTER_LOST):
      return {
        name_category : action.category
      };
    default: return state

  }
};

export default  clickCategory