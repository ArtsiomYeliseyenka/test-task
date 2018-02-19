import { LastWinners } from 'serverDataMocks/lastWinners';
import { Jackpot } from 'serverDataMocks/jackpot';
import { GET_WINNERS, GET_JACKPOT } from './constants';

const getWinnersAction = lastWinners => ({
  type: GET_WINNERS,
  payload: lastWinners,
});

const getJackpotAction = jackpot => ({
  type: GET_JACKPOT,
  payload: jackpot,
});

export const fetchWinnersAction = () => dispatch => dispatch(getWinnersAction(LastWinners));
export const fetchJackpotAction = () => dispatch => dispatch(getJackpotAction(Jackpot));
