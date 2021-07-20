import { combineReducers } from 'redux';
import contactListReducer from './contactList/reducer';
import fieldListReducer from './fieldList/reducer';

export default combineReducers({
  contactList: contactListReducer,
  fieldList: fieldListReducer,
});
