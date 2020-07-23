/*
 *
 * Staff reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  staffList: [
    {
      id: 0,
      name: 'Mario Francisco',
      firstSurname: 'García',
      secondSurname: 'Montes',
      genre: true,
      birthdate: '02/06/1994',
      image: 'https://marvel-live.freetls.fastly.net/canvas/2019/2/e0200477c54143609bad3a773ac35ef1?quality=95&fake=.png',
    },
    {
      id: 0,
      name: 'Mario Francisco',
      firstSurname: 'García',
      secondSurname: 'Montes',
      genre: true,
      birthdate: '02/06/1994',
      image: 'https://marvel-live.freetls.fastly.net/canvas/2019/2/e0200477c54143609bad3a773ac35ef1?quality=95&fake=.png',
    },
    {
      id: 0,
      name: 'Mario Francisco',
      firstSurname: 'García',
      secondSurname: 'Montes',
      genre: true,
      birthdate: '02/06/1994',
      image: 'https://marvel-live.freetls.fastly.net/canvas/2019/2/e0200477c54143609bad3a773ac35ef1?quality=95&fake=.png',
    },
    {
      id: 0,
      name: 'Mario Francisco',
      firstSurname: 'García',
      secondSurname: 'Montes',
      genre: true,
      birthdate: '02/06/1994',
      image: 'https://marvel-live.freetls.fastly.net/canvas/2019/2/e0200477c54143609bad3a773ac35ef1?quality=95&fake=.png',
    },
    {
      id: 0,
      name: 'Mario Francisco',
      firstSurname: 'García',
      secondSurname: 'Montes',
      genre: true,
      birthdate: '02/06/1994',
      image: 'https://marvel-live.freetls.fastly.net/canvas/2019/2/e0200477c54143609bad3a773ac35ef1?quality=95&fake=.png',
    },
    {
      id: 0,
      name: 'Mario Francisco',
      firstSurname: 'García',
      secondSurname: 'Montes',
      genre: true,
      birthdate: '02/06/1994',
      image: 'https://marvel-live.freetls.fastly.net/canvas/2019/2/e0200477c54143609bad3a773ac35ef1?quality=95&fake=.png',
    },
    {
      id: 0,
      name: 'Mario Francisco',
      firstSurname: 'García',
      secondSurname: 'Montes',
      genre: true,
      birthdate: '02/06/1994',
      image: 'https://marvel-live.freetls.fastly.net/canvas/2019/2/e0200477c54143609bad3a773ac35ef1?quality=95&fake=.png',
    },
    {
      id: 0,
      name: 'Mario Francisco',
      firstSurname: 'García',
      secondSurname: 'Montes',
      genre: true,
      birthdate: '02/06/1994',
      image: 'https://marvel-live.freetls.fastly.net/canvas/2019/2/e0200477c54143609bad3a773ac35ef1?quality=95&fake=.png',
    },
    {
      id: 0,
      name: 'Mario Francisco',
      firstSurname: 'García',
      secondSurname: 'Montes',
      genre: true,
      birthdate: '02/06/1994',
      image: 'https://marvel-live.freetls.fastly.net/canvas/2019/2/e0200477c54143609bad3a773ac35ef1?quality=95&fake=.png',
    },
  ],
});

function staffReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default staffReducer;
