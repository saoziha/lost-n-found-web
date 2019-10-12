import {combineReducers} from 'redux';
import cityList from "./cityList";
import selectCity from './selectCity';
import lostList from './lostList'
import clickCategory from './categoryList'

const appReducers = combineReducers({
  cityList: cityList,
  selectCity : selectCity,
  lostList: lostList,
  clickCategory: clickCategory
});
export default appReducers;