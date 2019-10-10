import {combineReducers} from 'redux';
import cityList from "./cityList";
import selectCity from './selectCity';

const appReducers = combineReducers({
  cityList: cityList,
  selectCity : selectCity
});
export default appReducers;