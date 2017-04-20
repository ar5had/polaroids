import { UPDATE_PROFILE_STATE, ADD_MY_ITEM, DELETE_MY_ITEM, UPDATE_MYITEMS_STATE } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function profileDataReducer(state = initialState.profile, action) {
  switch (action.type) {
    case UPDATE_PROFILE_STATE:
      return objectAssign({}, state, action.payload);
    case DELETE_MY_ITEM:
      return objectAssign(
        {},
        state,
        { myItems: state.myItems.filter(elem => elem.key !== action.payload) }
      );
    case ADD_MY_ITEM:
      return objectAssign(
        {},
        state,
        { myItems: [action.payload, ...state.myItems] }
      );
    case UPDATE_MYITEMS_STATE:
      return objectAssign(
        {},
        state,
        { myItems: [...action.payload] }
      );
    default:
      return state;
  }
}
