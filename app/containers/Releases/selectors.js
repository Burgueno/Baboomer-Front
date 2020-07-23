import { createSelector } from 'reselect';

/**
 * Direct selector to the releases state domain
 */
const selectReleasesDomain = (state) => state.get('releases');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Releases
 */

const makeSelectReleases = () => createSelector(
  selectReleasesDomain,
  (substate) => substate.toJS()
);

export default makeSelectReleases;
export {
  selectReleasesDomain,
};
