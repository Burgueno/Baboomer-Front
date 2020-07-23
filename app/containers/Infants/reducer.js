/*
 *
 * Infants reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_DIALOG,
  SET_DIALOG_DETAILS,
  SET_DIALOG_REPORT,
  SET_CURRENT_INFANT,
  INPUT_SET_MESSAGE,
  SET_REPORT_TYPE,
  INFANTS_GET_LIST_OK,
} from './constants';

const initialState = fromJS({
  dialogOpen: false,
  dialogDetailsOpen: false,
  dialogReportOpen: false,
  currentInfant: {},
  report: {
    mensaje: '',
    autorComunicadoId: 2,
    imagen: '',
    tipoComunicado: 0,
    enterado: false,
  },
});

function infantsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_DIALOG:
      return state.set('dialogOpen', !state.get('dialogOpen'));
    case SET_DIALOG_DETAILS:
      return state.set('dialogDetailsOpen', !state.get('dialogDetailsOpen'));
    case SET_DIALOG_REPORT:
      return state.set('dialogReportOpen', !state.get('dialogReportOpen'));
    case SET_CURRENT_INFANT:
      return state.set('currentInfant', action.payload);
    case INPUT_SET_MESSAGE:
      return state.update('report', (form) => form.set('mensaje', action.text));
    case SET_REPORT_TYPE:
      return state.update('report', (form) => form.set('tipoComunicado', action.value));
    case INFANTS_GET_LIST_OK:
      return state.set('infantsList', action.data);
    default:
      return state;
  }
}

export default infantsReducer;
