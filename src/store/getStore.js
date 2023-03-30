import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function getStore(reducer) {
  const store = createStore(reducer, composedEnhancers);
  return store;
}
