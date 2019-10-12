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
      return state;
    // case (actionTypes.FILTER_LOST):
    //   state.dataItem = action.lostList;
    //   let sltCity = action.filter;
    //   let dataFilter = state.dataFilter;
    //   if (sltCity !== "") {
    //     console.log(state.dataItem)
    //   }
    // state.dataFilter = state.dataItem.filter(lost => {
    //     return lost.lost_city.toLowerCase().indexOf(action.filter.toLowerCase()) !== -1
    //   }
    // );
    //can`  filer value o day
    // if (state.filter.city !== "") {
    //   console.log(objtest);
    //
    //   console.log(state.dataFilter);
    // }
    // return {};
    default:
      return state;


  }
};

export default lostList;