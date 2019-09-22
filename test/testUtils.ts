import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const storeFactory = (initialState: object) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
