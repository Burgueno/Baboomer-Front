/*
 *
 * Releases actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_CHIP,
  SET_DIALOG,
  INPUT_SET_MESSAGE,

  RELEASES_GET_LIST_OK,
  RELEASES_GET_LIST_ERROR,
  CREATE_RELEASES,
  CREATE_RELEASES_OK,
  CREATE_RELEASES_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setChip(item) {
  return {
    type: SET_CHIP,
    item,
  };
}
export function setDialog() {
  return {
    type: SET_DIALOG,
  };
}

export function InputSetMessage(text) {
  return {
    type: INPUT_SET_MESSAGE,
    text,
  };
}

export function ReleasesGetListOk(data) {
  return {
    type: RELEASES_GET_LIST_OK,
    data,
  };
}
export function ReleasesGetListError(error) {
  return {
    type: RELEASES_GET_LIST_ERROR,
    error,
  };
}

export function CreateRelease() {
  return {
    type: CREATE_RELEASES,
  };
}
export function CreateReleaseOk() {
  return {
    type: CREATE_RELEASES_OK,
  };
}
export function CreateReleaseError(error) {
  return {
    type: CREATE_RELEASES_ERROR,
    error,
  };
}
