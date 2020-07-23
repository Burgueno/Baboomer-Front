/*
 *
 * LayoutHome reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  DRAWER_ITEM_ACTIVE,
} from './constants';

const initialState = fromJS({
  menu: [
    {
      browserHistory: '/releases',
      fullScreen: true,
      url: '/releases',
      text: 'Comunicados',
      status: true,
      nameIcon: 'calendar', // cuando lo encuentre lo cambio
      id: '0',
    },
    {
      browserHistory: '/infants',
      fullScreen: true,
      url: '/infants',
      text: 'Infantes',
      status: true,
      nameIcon: 'group', // cuando lo encuentre lo cambio
      id: '1',
    },
    {
      browserHistory: '/staff',
      fullScreen: true,
      url: '/staff',
      text: 'Personal',
      status: true,
      nameIcon: 'suitcase', // cuando lo encuentre lo cambio
      id: '2',
    },
  ],
});

function layoutHomeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case DRAWER_ITEM_ACTIVE:
      return state
        .update('menu', (items) => items.map((item) => item.set('status', false)))
        .setIn(['menu', action.itemIndex, 'status'], true);
        // .setIn(['menu', action.itemIndex, 'submenus'], state.getIn(['menu', action.itemIndex, 'submenus'])
        // .map((submenus) => submenus.set('color', '#6c7b8a').set('variant', 'text'))
        // .setIn([0, 'variant'], 'rounded-icon').setIn([0, 'color'], '#f54c95'));
    default:
      return state;
  }
}

export default layoutHomeReducer;
