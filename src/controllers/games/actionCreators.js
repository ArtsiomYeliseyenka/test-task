import { Games } from 'serverDataMocks/games';
import { GET_GAMES } from './constants';

const getGamesAction = promotions => ({
  type: GET_GAMES,
  payload: promotions,
});

export const fetchGamesAction = () => dispatch => dispatch(getGamesAction(Games));
