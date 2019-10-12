import {combineReducers} from 'redux';
import cityList from "./cityList";
import selectCity from './selectCity';
import lostList from './lostList'


const appReducers = combineReducers({
  cityList: cityList,
  selectCity : selectCity,
  lostList: lostList
});
export default appReducers;