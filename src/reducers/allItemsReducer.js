import { UPDATE_ALLITEMS_STATE, ADD_ONE_ITEM } from '../constants/actionTypes';
import initialState from './initialState';

export default function allItemsReducer(state = initialState.allItems, action) {
  switch (action.type) {
    case UPDATE_ALLITEMS_STATE:
      return [...action.payload];
    case ADD_ONE_ITEM:
      return [action.payload, ...state];
    default:
      return state;
  }
}
