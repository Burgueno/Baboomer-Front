
import { fromJS } from 'immutable';
import releasesReducer from '../reducer';

describe('releasesReducer', () => {
  it('returns the initial state', () => {
    expect(releasesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
