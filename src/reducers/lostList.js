import * as actionTypes from '../contants/actionsTypes';

const initialState =[];

const Lost = (state = initialState, action)=>{
  switch (action.type) {
    case (actionTypes.FETCH_LOST):
      state = action.lostList;
      return [...state];
    default: return [...state];
  }
};

export default Lost;