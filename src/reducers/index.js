import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import allItemsReducer from './allItemsReducer';


const rootReducer = combineReducers({
  allItemsData: allItemsReducer,
  routing: routerReducer
});

export default rootReducer;
