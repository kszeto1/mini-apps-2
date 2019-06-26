import React from 'react';
import ResultItem from './ResultItem.jsx';

const SearchResults = ({records}) => {
  return (
    <ul>
      {records.map((record) => {
        return <ResultItem record={record} key={records.indexOf(record)}/>
      })}
    </ul>
  )
};

export default SearchResults;