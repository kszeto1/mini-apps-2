import React from 'react';
import ResultItem from './ResultItem.jsx';

const SearchResults = ({records}) => {
  return (
    <div>
      {records.map((record) => {
        return <ResultItem record={record} key={records.indexOf(record)}/>
      })}
    </div>
  )
};

export default SearchResults;