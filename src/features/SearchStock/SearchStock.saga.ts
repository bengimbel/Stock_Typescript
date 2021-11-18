import { all, call, put, takeEvery, fork, select } from "redux-saga/effects"
import { SEARCH_STOCK_REQUEST } from './Types'
import { fetchStockSuccess, fetchStockFailure } from './SearchStock.state'
import { getSearchTerm } from './SearchStock.selectors';
import { requestStockTicker } from "../../api/polygon.requests"

function* searchStock(): any {
  try {
    const searchTerm = yield select(getSearchTerm);
    const response = yield call(requestStockTicker, searchTerm.toUpperCase());
    yield put(
      fetchStockSuccess(response.results)
    );
  } catch (error: any) {
    yield put(
      fetchStockFailure(error)
    )
  }
}

function* watchSearchStock() {
  yield takeEvery(SEARCH_STOCK_REQUEST, searchStock);
}

export default function* SearchStockSaga() {
  yield all([fork(watchSearchStock)]);
}


