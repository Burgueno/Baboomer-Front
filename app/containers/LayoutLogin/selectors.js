import { createSelector } from 'reselect';

/**
 * Direct selector to the layoutLogin state domain
 */
const selectLayoutLoginDomain = (state) => state.get('layoutLogin');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LayoutLogin
 */

const makeSelectLayoutLogin = () => createSelector(
  selectLayoutLoginDomain,
  (substate) => substate.toJS()
);

export default makeSelectLayoutLogin;
export {
  selectLayoutLoginDomain,
};
