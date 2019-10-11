import * as actionTypes from '../contants/actionsTypes';

const initialState =[];

const lostList = (state = initialState, action)=>{
  switch (action.type) {
    case (actionTypes.FETCH_LOST_LIST):
      state = action.lostList;
      return [...state];
    default: return [...state];
  }
};

export default lostList;