import { GET_GAMES, INITIAL_STATE } from './constants';

export const gamesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_GAMES:
      return payload;
    default:
      return state;
  }
};
