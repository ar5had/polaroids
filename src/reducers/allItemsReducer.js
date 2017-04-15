import {UPDATE_ALLITEMS_STATE } from '../constants/actionTypes';
import initialState from './initialState';

export default function allItemsReducer(state = initialState.allItems, action) {
  switch (action.type) {
    case UPDATE_ALLITEMS_STATE:
      return [...action.payload];
    default:
      return state;
  }
}
