import callAPI from '../utils/apiCaller';
import * as actionTypes from '../contants/actionsTypes';

//get city list
// export const onFetchCityList =(cityList)=>{
//    return {
//      type: actionTypes.FETCH_CITY,
//      cityList: cityList
//    }
//  };

//select city_id
export const onSelectCity = (id_city)=>{
  return {
    type: actionTypes.SELECT_CITY,
    id_city : id_city
  }
};



//get lost list
// export const fetchLostList = (lostList)=>{
//   return{
//     type : actionTypes.FETCH_LOST,
//     lostList : lostList
//   }
// };

