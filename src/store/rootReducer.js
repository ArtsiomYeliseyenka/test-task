import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { langReducer } from 'controllers/lang';
import { modalReducer } from 'controllers/modal';
import { statisticsReducer } from 'controllers/statistics';
import { promotionsReducer } from 'controllers/promotions';
import { gamesReducer } from 'controllers/games';

export const rootReducer = combineReducers({
  lang: langReducer,
  form: formReducer,
  modal: modalReducer,
  statistics: statisticsReducer,
  promotions: promotionsReducer,
  games: gamesReducer,
});
