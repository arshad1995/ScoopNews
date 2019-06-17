import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import newsReducers from "./src/reducers/news.reducers";

const reducers = combineReducers({
  news: newsReducers
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
