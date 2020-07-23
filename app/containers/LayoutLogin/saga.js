import {
  takeLatest,
  call,
  put,
  select,
} from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';
import {
  LOGIN_ACTION,
} from './constants';
import {
  LoginActionOk,
  LoginActionError,
} from './actions';
const path = 'https://guarderia.me/api';

export function* login() {
  const { layoutLogin: { user: { email, password } } } = yield select((state) => state.toJS());
  const requestURL = `${path}/usuario/login`;

  const data = { email, password };
  try {
    const response = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseBody = response;
    if (responseBody) {
      yield put(LoginActionOk());
      yield put(push('/'));
    }
  } catch (error) {
    yield put(LoginActionError(error));
  }
}

export default function* defaultSaga() {
  yield takeLatest(LOGIN_ACTION, login);
}
