import React from 'react';

class PinControls extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame(e) {
    e.preventDefault();
    window.location.reload();
  }

  render() {
    const { pinsRemaining, handleClick, currentFrame } = this.props;
    const remainingButtons = [];
    for (let i = 0; i < pinsRemaining; i++) {
      remainingButtons.push(<button className="favorite styled" type="button" value={i} onClick={handleClick} key={i}>{i}</button>);
    }
    return (currentFrame > 10 ? (
      <div>
        <h2>GAME OVER</h2>
        <button className='new game' type="button" onClick={(e) => {this.handleNewGame(e)}}>New Game</button>
      </div>
      ) : (
      <div>
        {remainingButtons}
      </div>
      )
    )
  }
};

export default PinControls;

// <button className="favorite styled" type="button" value="0" onClick={handleClick}>0</button>
//         <button className="favorite styled" type="button" value="1" onClick={handleClick}>1</button>
//         <button className="favorite styled" type="button" value="2" onClick={handleClick}>2</button>
//         <button className="favorite styled" type="button" value="3" onClick={handleClick}>3</button>
//         <button className="favorite styled" type="button" value="4" onClick={handleClick}>4</button>
//         <button className="favorite styled" type="button" value="5" onClick={handleClick}>5</button>
//         <button className="favorite styled" type="button" value="6" onClick={handleClick}>6</button>
//         <button className="favorite styled" type="button" value="7" onClick={handleClick}>7</button>
//         <button className="favorite styled" type="button" value="8" onClick={handleClick}>8</button>
//         <button className="favorite styled" type="button" value="9" onClick={handleClick}>9</button>
//         <button className="favorite styled" type="button" value="10" onClick={handleClick}>10</button>