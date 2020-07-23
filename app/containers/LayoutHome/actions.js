/*
 *
 * LayoutHome actions
 *
 */

import {
  DEFAULT_ACTION,
  DRAWER_ITEM_ACTIVE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function drawerActive(itemIndex) {
  return {
    type: DRAWER_ITEM_ACTIVE,
    itemIndex,
  };
}
