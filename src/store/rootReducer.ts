import { combineReducers } from "redux";

import { reducer as searchStockReducer } from "../features/SearchStock/SearchStock.state";

const rootReducer = combineReducers({
  searchStock: searchStockReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
