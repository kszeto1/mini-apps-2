import React from 'react';

const PinControls = (props) => {
  console.log(props);
  return (
    <div>
      <button className="favorite styled" type="button" value="0" onClick={props.handleClick}>0</button>
      <button className="favorite styled" type="button" value="1" onClick={props.handleClick}>1</button>
      <button className="favorite styled" type="button" value="2" onClick={props.handleClick}>2</button>
      <button className="favorite styled" type="button" value="3" onClick={props.handleClick}>3</button>
      <button className="favorite styled" type="button" value="4" onClick={props.handleClick}>4</button>
      <button className="favorite styled" type="button" value="5" onClick={props.handleClick}>5</button>
      <button className="favorite styled" type="button" value="6" onClick={props.handleClick}>6</button>
      <button className="favorite styled" type="button" value="7" onClick={props.handleClick}>7</button>
      <button className="favorite styled" type="button" value="8" onClick={props.handleClick}>8</button>
      <button className="favorite styled" type="button" value="9" onClick={props.handleClick}>9</button>
      <button className="favorite styled" type="button" value="10" onClick={props.handleClick}>10</button>
    </div>
  )
}

export default PinControls;