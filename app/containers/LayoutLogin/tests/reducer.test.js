
import { fromJS } from 'immutable';
import layoutLoginReducer from '../reducer';

describe('layoutLoginReducer', () => {
  it('returns the initial state', () => {
    expect(layoutLoginReducer(undefined, {})).toEqual(fromJS({}));
  });
});
