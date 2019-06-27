import React from 'react';
import ScoreSheet from './ScoreSheet.jsx';
import PinControls from './PinControls.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      frame1Score: [0, 0],
      frame2Score: [0, 0],
      frame3Score: [0, 0],
      frame4Score: [0, 0],
      frame5Score: [0, 0],
      frame6Score: [0, 0],
      frame7Score: [0, 0],
      frame8Score: [0, 0],
      frame9Score: [0, 0],
      frame10Score: [0, 0],
    }

    this.handlePinsHit = this.handlePinsHit.bind(this);
  }

  handlePinsHit(e) {
    e.preventDefault();
  }

  render() {
    const { totalScore } = this.state;
    return (
      <div>
        <h1>LET'S GO BOWLING</h1>
        <ScoreSheet totalScore={totalScore} />
        <PinControls handleClick={this.handlePinsHit} />
      </div>
    )
  }
}

export default App;

