/*
 *
 * Releases reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_CHIP,
  SET_DIALOG,
  RELEASES_GET_LIST_OK,
  INPUT_SET_MESSAGE,
} from './constants';

const initialState = fromJS({
  releasesList: [],
  chips: ['Comunicados', 'Notificaciones'],
  selectedChip: 'Comunicados',
  dialogOpen: false,
  release: {
    mensaje: '',
    autorComunicadoId: 2,
    imagen: '',
    tipoComunicado: 0,
    enterado: false,
  },
});

function releasesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_CHIP:
      return state.set('selectedChip', action.item);
    case SET_DIALOG:
      return state.set('dialogOpen', !state.get('dialogOpen'));
    case INPUT_SET_MESSAGE:
      return state.update('release', (form) => form.set('mensaje', action.text));
    case RELEASES_GET_LIST_OK:
      return state.set('releasesList', action.data);
    default:
      return state;
  }
}

export default releasesReducer;
