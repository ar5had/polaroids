import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profileDataReducer from './profileDataReducer';
import allItemsReducer from './allItemsReducer';
import appDataReducer from './appDataReducer';

const rootReducer = combineReducers({
  appData: appDataReducer,
  profileData: profileDataReducer,
  allItemsData: allItemsReducer,
  routing: routerReducer
});

export default rootReducer;
