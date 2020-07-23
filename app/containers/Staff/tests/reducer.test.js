
import { fromJS } from 'immutable';
import staffReducer from '../reducer';

describe('staffReducer', () => {
  it('returns the initial state', () => {
    expect(staffReducer(undefined, {})).toEqual(fromJS({}));
  });
});
