import { all, fork } from "redux-saga/effects";
import SearchStockSaga from "../features/SearchStock/SearchStock.saga";

export function* rootSaga() {
  yield all([fork(SearchStockSaga)])
}
