import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { langReducer } from 'controllers/lang';
import { modalReducer } from 'controllers/modal';

export const rootReducer = combineReducers({
  lang: langReducer,
  form: formReducer,
  modal: modalReducer,
});
