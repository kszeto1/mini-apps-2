import React from 'react';
import ScoreSheet from './ScoreSheet.jsx';
import PinControls from './PinControls.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      frameScores: {
        frameScore1: [0, 0],
        frameScore2: [0, 0],
        frameScore3: [0, 0],
        frameScore4: [0, 0],
        frameScore5: [0, 0],
        frameScore6: [0, 0],
        frameScore7: [0, 0],
        frameScore8: [0, 0],
        frameScore9: [0, 0],
        frameScore10: [0, null, null],
      },
      currentFrame: 1,
      currentRoll: 1,
      pinsRemaining: 11,
      bonusRolls: 1
    }

    this.handlePinsHit = this.handlePinsHit.bind(this);
  }

  handlePinsHit(e) {
    e.preventDefault();
    let { frameScores, currentFrame, currentRoll, totalScore, pinsRemaining, bonusRolls } = this.state;
    let knockedPinsCount = parseInt(e.target.value);

    if (currentRoll === 2 && currentFrame < 11) {
      frameScores[`frameScore${currentFrame}`][1] = knockedPinsCount;
      totalScore += knockedPinsCount;
      currentRoll = 1;
      currentFrame += 1;
      pinsRemaining = 11;
      this.setState({currentFrame, frameScores, currentRoll, totalScore, pinsRemaining});
    } else {
      if (knockedPinsCount === 10) {
        frameScores[`frameScore${currentFrame}`][0] = knockedPinsCount;
        totalScore += knockedPinsCount;
        currentFrame += 1;
      } else {
        frameScores[`frameScore${currentFrame}`][0] = knockedPinsCount;
        totalScore += knockedPinsCount;
        currentRoll += 1;
        pinsRemaining -= knockedPinsCount;
      }
      this.setState({currentFrame, frameScores, currentRoll, totalScore, pinsRemaining});
    }
  }

  render() {
    const { totalScore, frameScores, currentFrame, pinsRemaining } = this.state;
    return (
      <div>
        <h1>LET'S GO BOWLING</h1>
        <ScoreSheet totalScore={totalScore} frameScores={frameScores}/>
        <PinControls handleClick={this.handlePinsHit} currentFrame={currentFrame} pinsRemaining={pinsRemaining}/>
      </div>
    )
  }
}

export default App;

