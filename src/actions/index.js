import callAPI from '../utils/apiCaller';
import * as actionTypes from '../contants/actionsTypes';

// get data city from api
export const actionFetchDataCity = () => {
  return dispatch => {
    return callAPI('data-city', 'GET', null).then(res => {
      dispatch(fetchDataCity(res.data));
    });
  };
};
//get data city
// export const fetchCategory = (category) => {
//   return {
//     type: actionTypes.FETCH_CATEGORY,
//     category: category
//   }
// };
//
// export const actionFetchCategory = () => {
//   return (dispatch) => {
//     return callAPI('api/type', 'GET', null)
//       .then(res => {
//         console.log(res.data);
//         dispatch(fetchCategory(res.data))
//       })
//   }
// };
//get data city
export const fetchDataCity = data_city => {
  return {
    type: actionTypes.FETCH_CITY,
    data_city: data_city
  };
};

//filter city_id
export const onFilter = id_city => {
  return {
    type: actionTypes.FILTER_LOST,
    payload: {
      id_city
    }
  };
};

//filter category
export const onCategory = category => {
  return {
    type: actionTypes.FILTER_LOST,
    payload: {
      category
    }
  };
};

//filter keyword
export const onKeyword = keyword => {
  return {
    type: actionTypes.FILTER_LOST,
    payload: {
      keyword
    }
  };
};

//get lost list
export const fetchLostList = lostList => {
  return {
    type: actionTypes.FETCH_LOST_LIST,
    lostList: lostList
  };
};

//get lost list from api
export const actionFetchLostList = () => {
  return dispatch => {
    return callAPI('data-lost-list', 'GET', null).then(res => dispatch(fetchLostList(res.data)));
  };
};
