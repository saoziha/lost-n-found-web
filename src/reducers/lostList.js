import * as actionTypes from '../contants/actionsTypes';

const initialState = {
  dataItem: [],
  dataFilter: [],

  // city: null,
  // filter: {
  //   city: null,
  //   category: null,
  // }
};

const lostList = (state = initialState, action) => {

  switch (action.type) {
    case (actionTypes.FETCH_LOST_LIST):
      state.dataItem = action.lostList;
      // let initialData = state.dataItem;
      return {...state};
    // case (actionTypes.FILTER_LOST):
    //   state.dataItem = action.lostList;
    //   let sltCity = action.filter;
    //   let dataFilter = state.dataFilter;
    //   if (sltCity !== "") {
    //     console.log(state.dataItem)
    //   }
    //       return {id_city : action.filter};
    default:
      return state;


  }
};

export default lostList;