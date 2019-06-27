import React from 'react';

const ScoreSheet = (props) => {
  return (
    <table>
    <thead>
        <tr>
            <th colSpan="2">Frame 1</th>
            <th colSpan="2">Frame 2</th>
            <th colSpan="2">Frame 3</th>
            <th colSpan="2">Frame 4</th>
            <th colSpan="2">Frame 5</th>
            <th colSpan="2">Frame 6</th>
            <th colSpan="2">Frame 7</th>
            <th colSpan="2">Frame 8</th>
            <th colSpan="2">Frame 9</th>
            <th colSpan="3">Frame 10</th>
            <th colSpan="2">Total Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="1">0</td><td colSpan="1">0</td><td colSpan="1">0</td>
            <td colSpan="2" rowSpan="2">{props.totalScore}</td>
        </tr>
        <tr>
            <td colSpan="2">0</td>
            <td colSpan="2">0</td>
            <td colSpan="2">0</td>
            <td colSpan="2">0</td>
            <td colSpan="2">0</td>
            <td colSpan="2">0</td>
            <td colSpan="2">0</td>
            <td colSpan="2">0</td>
            <td colSpan="2">0</td>
            <td colSpan="3">0</td>
        </tr>
    </tbody>
    </table>
  )
}

export default ScoreSheet;