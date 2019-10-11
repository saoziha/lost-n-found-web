import callAPI from '../utils/apiCaller';
import * as actionTypes from '../contants/actionsTypes';

// get data city from api
export const actionFetchDataCity = () => {
  return (dispatch) => {
    return callAPI('data-city', 'GET', null)
      .then(res => {
        dispatch(fetchDataCity(res.data))
      })

  }
};
//get data city
export const fetchDataCity = (data_city) => {
  return {
    type: actionTypes.FETCH_CITY,
    data_city: data_city
  }
};

//select city_id
export const onSelectCity = (city_id) => {
  return {
    type: actionTypes.SELECT_CITY,
    city_id: city_id
  }
};


//get lost list
export const fetchLostList = (lostList) => {
  return {
    type: actionTypes.FETCH_LOST_LIST,
    lostList: lostList
  }
};

//get lost list from api
export const actionFetchLostList = () => {
  return (dispatch) => {
    return callAPI('data-lost-list', 'GET', null)
      .then(res => dispatch(fetchLostList(res.data)))
  }
};