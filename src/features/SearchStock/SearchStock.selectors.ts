import { AppState } from '../../store/rootReducer';

export const getSearchTerm = (state: AppState) => state.searchStock.searchTerm

