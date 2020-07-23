/*
 *
 * Infants actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_DIALOG,
  SET_DIALOG_DETAILS,
  SET_DIALOG_REPORT,
  SET_CURRENT_INFANT,
  INPUT_SET_MESSAGE,
  SET_REPORT_TYPE,

  INFANTS_GET_LIST_OK,
  INFANTS_GET_LIST_ERROR,

  CREATE_REPORT,
  CREATE_REPORT_OK,
  CREATE_REPORT_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setDialog() {
  return {
    type: SET_DIALOG,
  };
}

export function setDialogDetails() {
  return {
    type: SET_DIALOG_DETAILS,
  };
}

export function setDialogReport() {
  return {
    type: SET_DIALOG_REPORT,
  };
}

export function setCurrentInfant(payload) {
  return {
    type: SET_CURRENT_INFANT,
    payload,
  };
}

export function InputSetMessage(text) {
  return {
    type: INPUT_SET_MESSAGE,
    text,
  };
}
export function SetReportType(value) {
  return {
    type: SET_REPORT_TYPE,
    value,
  };
}

export function infantsGetListOk(data) {
  return {
    type: INFANTS_GET_LIST_OK,
    data,
  };
}
export function infantsGetListError(error) {
  return {
    type: INFANTS_GET_LIST_ERROR,
    error,
  };
}

export function CreateReport() {
  return {
    type: CREATE_REPORT,
  };
}
export function CreateReportOk() {
  return {
    type: CREATE_REPORT_OK,
  };
}
export function CreateReportError(error) {
  return {
    type: CREATE_REPORT_ERROR,
    error,
  };
}
