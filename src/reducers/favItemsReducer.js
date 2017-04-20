import { ADD_FAV_ITEM, REMOVE_FAV_ITEM } from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from './initialState';

export default function myItemsReducer(state = initialState.favourites, action) {
  switch (action.type) {
    case REMOVE_FAV_ITEM:
      return state.filter(elem => elem !== action.payload);
    case ADD_FAV_ITEM:
      return [action.payload, ...state];
    default:
      return state;
  }
}
