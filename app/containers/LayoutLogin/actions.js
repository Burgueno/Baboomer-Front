/*
 *
 * LayoutLogin actions
 *
 */

import {
  DEFAULT_ACTION,
  INPUT_SET_EMAIL,
  INPUT_SET_PASSWORD,

  LOGIN_ACTION,
  LOGIN_ACTION_OK,
  LOGIN_ACTION_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function InputSetEmail(text) {
  return {
    type: INPUT_SET_EMAIL,
    text,
  };
}
export function InputSetPassword(text) {
  return {
    type: INPUT_SET_PASSWORD,
    text,
  };
}

export function loginAction() {
  return {
    type: LOGIN_ACTION,
  };
}
export function LoginActionOk() {
  return {
    type: LOGIN_ACTION_OK,
  };
}
export function LoginActionError(error) {
  return {
    type: LOGIN_ACTION_ERROR,
    error,
  };
}
