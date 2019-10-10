import {combineReducers} from 'redux';
import cityList from "./cityList";

const appReducers = combineReducers({
  cityList: cityList
});
export default appReducers;