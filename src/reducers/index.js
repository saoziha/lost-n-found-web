import {combineReducers} from 'redux';
import cityList from "./cityList";
import filterLost from './filterLost';
import lostList from './lostList'
import clickCategory from './categoryList'

const appReducers = combineReducers({
  cityList: cityList,
  filterLost : filterLost,
  lostList: lostList,
  clickCategory: clickCategory
});
export default appReducers;