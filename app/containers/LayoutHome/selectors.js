import { createSelector } from 'reselect';

/**
 * Direct selector to the layoutHome state domain
 */
const selectLayoutHomeDomain = (state) => state.get('layoutHome');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LayoutHome
 */

const makeSelectLayoutHome = () => createSelector(
  selectLayoutHomeDomain,
  (substate) => substate.toJS()
);

export default makeSelectLayoutHome;
export {
  selectLayoutHomeDomain,
};
