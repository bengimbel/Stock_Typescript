import React, { FC } from 'react';
import {ISearchStockResults} from './Types'

type Props = {
  searchTerm: string;
  fetchStock: any,
  setSearchTerm: any
  results: ISearchStockResults[]
};

export const SearchStock: FC<Props> = ({ searchTerm, fetchStock, setSearchTerm, results }) => (
    <div>
      <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      <button onClick={fetchStock}>Search Stock</button>
      {results.length > 0 && results.map(stock => (
        <div key={stock.ticker}>
          <p>{stock.name}</p>
          <p>{stock.ticker}</p>
        </div>
      ))}
    </div>
  )

export default SearchStock;
