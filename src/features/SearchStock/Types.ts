export const SET_SEARCH_TERM = 'searchStock/SET_SEARCH_TERM';
export const SEARCH_STOCK_REQUEST = "SearchStock/SEARCH_STOCK_REQUEST";
export const SEARCH_STOCK_SUCCESS = "searchStock/SEARCH_STOCK_SUCCESS";
export const SEARCH_STOCK_FAILURE = "searchStock/SEARCH_STOCK_FAILURE";

export interface ISearchStockResults {
  ticker: string;
  name: string;
}

export interface SearchStockState {
  searchTerm: string;
  results: ISearchStockResults[];
  error: string | null;
}

export interface SearchStockSuccessPayload {
  results: any
}

export interface SearchStockFailurePayload {
  error: any;
}

export type SetSearchTerm = {
  type: typeof SET_SEARCH_TERM,
  payload: string
}

export type FetchStockRequest = {
  type: typeof SEARCH_STOCK_REQUEST;
}

export type FetchStockSuccess = {
  type: typeof SEARCH_STOCK_SUCCESS;
  payload: SearchStockSuccessPayload;
};

export type FetchStockFailure = {
  type: typeof SEARCH_STOCK_FAILURE;
  payload: SearchStockFailurePayload;
};

export type SearchStockActions =
  SetSearchTerm
  | FetchStockRequest
  | FetchStockSuccess
  | FetchStockFailure;
