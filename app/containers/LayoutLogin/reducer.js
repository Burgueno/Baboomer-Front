/*
 *
 * LayoutLogin reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  INPUT_SET_EMAIL,
  INPUT_SET_PASSWORD,
} from './constants';

const initialState = fromJS({
  user: {
    email: '',
    password: '',
  },
});

function layoutLoginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case INPUT_SET_EMAIL:
      return state.update('user', (form) => form.set('email', action.text));
    case INPUT_SET_PASSWORD:
      return state.update('user', (form) => form.set('password', action.text));
    default:
      return state;
  }
}

export default layoutLoginReducer;
