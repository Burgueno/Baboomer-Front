import { createSelector } from 'reselect';

/**
 * Direct selector to the infants state domain
 */
const selectInfantsDomain = (state) => state.get('infants');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Infants
 */

const makeSelectInfants = () => createSelector(
  selectInfantsDomain,
  (substate) => substate.toJS()
);

export default makeSelectInfants;
export {
  selectInfantsDomain,
};
