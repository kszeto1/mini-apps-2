import React from 'react';


const ResultItem = ({record}) => {
  let date = record.date;

   if (date.includes('/')) {
    let dateArr = date.split('/');
    let tmp = dateArr.shift();
    dateArr.push(tmp);
    date = dateArr.join('/');
 }
 if (date.includes('-')) {
   let idx = date.indexOf('-');
   date = date.slice(0, idx) + date.slice(idx + 1) + ' B.C.';
 }
  return (
    <li>
      <div>
        Date:
        {record.date}
      </div>
      <div>
        Description:
        {record.description}
      </div>
      <div>
        Category:
        {record.category2}
      </div>
    </li>
  )
};

export default ResultItem;