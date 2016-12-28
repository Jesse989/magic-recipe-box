import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import { loadState } from './localStorage';

export default function configureStore(initialState) {
  const loggerMiddleware = createLogger();
  const persistedState = loadState();

  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(
      loggerMiddleware
    )
  );
}
