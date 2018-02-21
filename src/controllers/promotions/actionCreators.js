import { Promotions } from 'serverDataMocks/promotions';
import { GET_PROMOTIONS } from './constants';

const getPromotionsAction = promotions => ({
  type: GET_PROMOTIONS,
  payload: promotions,
});

export const fetchPromotionsAction = () => dispatch => dispatch(getPromotionsAction(Promotions));
