import React from 'react';

class ScoreSheet extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { frameScores, totalScore } = this.props;
    const tableHeader = [];
    const tableFirstRow = [];
    const tableSecondRow = [];
    for (let i = 1; i < 10; i++) {
      let frameScore = 'frameScore' + i;
      let lastFrame = 'frameScore10';
      
      if (i === 9) {
        
        tableHeader.push(
          <th colSpan="2" key={'tableHeader' + i}>Frame {i}</th>, 
          <th colSpan="3" key={'tableHeader-1' + i}>Frame {i + 1}</th>, 
          <th colSpan="2" key={'tableHeader' + 11}>Total Score</th>
        );

        tableFirstRow.push(
          <td colSpan="1" key={'tableFirstRow-0' + i}>{frameScores[frameScore][0]}</td>,
          <td colSpan="1" key={'tableFirstRow-1' + i}>{frameScores[frameScore][1]}</td>,

          <td colSpan="1" key={'tableFirstRow-lastFrame-0' + i}>{frameScores[lastFrame][0]}</td>,
          <td colSpan="1" key={'tableFirstRow-lastFrame-1' + i}>{frameScores[lastFrame][1]}</td>,
          <td colSpan="1" key={'tableFirstRow-lastFrame-2' + i}>{frameScores[lastFrame][2]}</td>,
          <td colSpan="2" rowSpan="2" key={'tableFirstRowTotal'}>{totalScore}</td>
        );

        tableSecondRow.push(
          <td colSpan="2" key={'tableSecondRow' + i}>{frameScores[frameScore][0] + frameScores[frameScore][1]}</td>,
          <td colSpan="3" key={'tableSecondRow-lastFrame' + i}>{frameScores[lastFrame][0] + frameScores[lastFrame][1] + frameScores[lastFrame][2]}</td>
        );
      } else {
        tableHeader.push(<th colSpan="2" key={'tableHeader' + i}>Frame {i}</th>);

        tableFirstRow.push(<td colSpan="1" key={'tableFirstRow-1' + i}>{frameScores[frameScore][0]}</td>,<td colSpan="1" key={'tableFirstRow-2' + i}>{frameScores[frameScore][1]}</td>)

        tableSecondRow.push(<td colSpan="2" key={'tableSecondRow' + i}>{frameScores[frameScore][0] + frameScores[frameScore][1]}</td>)
      }
    }
    return (
      <table>
        <thead>
        <tr>
          {tableHeader}
        </tr>
        </thead>
      <tbody>
        <tr>
          {tableFirstRow}
        </tr>
        <tr>
          {tableSecondRow}
        </tr>
      </tbody>
      </table>
    )
  }
}

export default ScoreSheet;