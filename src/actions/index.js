import callAPI from '../utils/apiCaller';
import * as actionTypes from '../contants/actionsTypes';

//get city list
 export const fetchCityList =()=>{
   return {
     type: actionTypes.FETCH_CITY,
     cityList: cityList
   }
 };




//get lost list
export const fetchLostList = ()=>{
  return{
    type : actionTypes.FETCH_LOST,
    lostList : lostList
  }
};

