import React from 'react';

const ResultItem = ({record}) => {
  return (
    <div>
      {record.date}
      {record.description}
      {record.lang}
      {record.category1}
      {record.category2}
      {record.granularity}
    </div>
  )
};

export default ResultItem;