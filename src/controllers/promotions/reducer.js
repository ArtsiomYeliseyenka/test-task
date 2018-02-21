import { GET_PROMOTIONS, INITIAL_STATE } from './constants';

export const promotionsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_PROMOTIONS:
      return payload;
    default:
      return state;
  }
};
