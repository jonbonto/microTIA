import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import { history } from './';
import createRootReducer from '../reducers';
import { postMiddleware } from '../middlewares';

export const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      postMiddleware(),
    ),
  )
);
