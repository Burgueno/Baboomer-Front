
import { fromJS } from 'immutable';
import layoutHomeReducer from '../reducer';

describe('layoutHomeReducer', () => {
  it('returns the initial state', () => {
    expect(layoutHomeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
