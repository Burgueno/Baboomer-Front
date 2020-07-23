import { createSelector } from 'reselect';

/**
 * Direct selector to the staff state domain
 */
const selectStaffDomain = (state) => state.get('staff');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Staff
 */

const makeSelectStaff = () => createSelector(
  selectStaffDomain,
  (substate) => substate.toJS()
);

export default makeSelectStaff;
export {
  selectStaffDomain,
};
