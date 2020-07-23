
import { fromJS } from 'immutable';
import infantsReducer from '../reducer';

describe('infantsReducer', () => {
  it('returns the initial state', () => {
    expect(infantsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
