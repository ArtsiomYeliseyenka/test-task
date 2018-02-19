import { GET_WINNERS, GET_JACKPOT, INITIAL_STATE } from './constants';

export const statisticsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_WINNERS:
      return Object.assign({}, state, { lastWinners: payload });
    case GET_JACKPOT:
      return Object.assign({}, state, { jackpot: payload });
    default:
      return state;
  }
};
