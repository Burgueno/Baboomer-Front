import {
  takeLatest,
  call,
  put,
  select,
} from 'redux-saga/effects';

import request from 'utils/request';
import {
  RELEASES_GET_LIST,
  CREATE_RELEASES,
} from './constants';
import {
  ReleasesGetListOk,
  ReleasesGetListError,
  CreateReleaseOk,
  CreateReleaseError,
} from './actions';
const path = 'https://guarderia.me/api';

export function* listReleases() {
  const requestURL = `${path}/comunicado`;
  try {
    const response = yield call(request, requestURL, {
      method: 'get',
      headers: {
      },
    });
    const responseBody = response;
    if (responseBody) {
      const formatedResponse = [];
      responseBody.map((item) => (
        formatedResponse.push({
          author: item.autorComunicado.nombre,
          date: item.fecha,
          message: item.mensaje,
          image: item.imagen,
          type: item.tipoComunicado,
        })
      ));
      yield put(ReleasesGetListOk(formatedResponse));
    }
  } catch (error) {
    yield put(ReleasesGetListError(error));
  }
}

export function* createRelase() {
  const { releases: { release } } = yield select((state) => state.toJS());
  const requestURL = `${path}/comunicado`;
  try {
    const response = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(release),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseBody = response;
    if (responseBody) {
      yield put(CreateReleaseOk());
      yield call(listReleases);
    }
  } catch (error) {
    yield put(CreateReleaseError(error));
  }
}

export default function* defaultSaga() {
  yield takeLatest(RELEASES_GET_LIST, listReleases);
  yield takeLatest(CREATE_RELEASES, createRelase);
  yield call(listReleases);
}
