import {
  SearchStockActions,
  SearchStockState,
  FetchStockRequest,
  FetchStockSuccess,
  SearchStockSuccessPayload,
  FetchStockFailure,
  SearchStockFailurePayload,
  SetSearchTerm,
  SET_SEARCH_TERM,
  SEARCH_STOCK_REQUEST,
  SEARCH_STOCK_SUCCESS,
  SEARCH_STOCK_FAILURE
} from "./Types";
import { AppState } from "../../store/rootReducer"
import { Dispatch } from "redux";

export const setSearchTerm = (searchTerm: string): SetSearchTerm => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm
})

export const fetchStock = (): FetchStockRequest => ({
  type: SEARCH_STOCK_REQUEST
});

export const fetchStockSuccess = (
  results: SearchStockSuccessPayload
): FetchStockSuccess => ({
  type: SEARCH_STOCK_SUCCESS,
  payload: {
    results
  }
});

export const fetchStockFailure = (
  error: SearchStockFailurePayload
): FetchStockFailure => ({
  type: SEARCH_STOCK_FAILURE,
  payload: { error }
});

const INITIAL_STATE: SearchStockState = {
  searchTerm: "",
  results: [],
  error: null
}

const reducer = (state: SearchStockState = INITIAL_STATE, action: SearchStockActions): SearchStockState => {
  const { type } = action
  switch (type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }
    case SEARCH_STOCK_SUCCESS:
      return {
        ...state,
        results: action.payload.results,
      }
    case SEARCH_STOCK_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}

const mapDispatchToProps = (dispatch: Dispatch<SearchStockActions>) => {
  return {
    setSearchTerm: (searchTerm: string): SetSearchTerm => dispatch(setSearchTerm(searchTerm)),
    fetchStock: (): FetchStockRequest => dispatch(fetchStock()),
    fetchStockSuccess: (response: SearchStockSuccessPayload): FetchStockSuccess => dispatch(fetchStockSuccess(response)),
    fetchStockFailure: (error: SearchStockFailurePayload): FetchStockFailure => dispatch(fetchStockFailure(error))
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    ...state.searchStock
  }
}

export { reducer, mapStateToProps, mapDispatchToProps }
