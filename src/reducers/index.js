import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profileDataReducer from './profileDataReducer';
import allItemsReducer from './allItemsReducer';
import appDataReducer from './appDataReducer';
import myItemsReducer from './myItemsReducer';

const rootReducer = combineReducers({
  appData: appDataReducer,
  profileData: profileDataReducer,
  allItemsData: allItemsReducer,
  routing: routerReducer,
  myItemsData: myItemsReducer
});

export default rootReducer;
