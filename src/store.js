import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

const configureStore = () => {
  const middleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(middleware)
  );

  middleware.run(rootSaga);
  return store;
};

export default configureStore;
