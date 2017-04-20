import { ADD_MY_ITEM, DELETE_MY_ITEM, UPDATE_MYITEMS_STATE } from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from './initialState';

export default function myItemsReducer(state = initialState.profile.myItems, action) {
  switch (action.type) {
    case DELETE_MY_ITEM:
      return state.filter(elem => elem.key !== action.payload);
    case ADD_MY_ITEM:
      return [action.payload, ...state];
    case UPDATE_MYITEMS_STATE:
      return [...action.payload];
    default:
      return state;
  }
}
