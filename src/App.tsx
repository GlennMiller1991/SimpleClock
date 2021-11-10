import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    //initial state
    const [seconds, setSeconds] = useState(() => 77726)

    //dinamic styles
    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg`
    }
    const minutesStyle = {
        transform: `rotate(${seconds * 0.1}deg`
    }
    const hoursStyle = {
        transform: `rotate(${seconds * 0.0083333333}deg`
    }
    useEffect(() => {
        const intervalID = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 10)
        return () => {
            clearInterval(intervalID)
        }
    }, [])
  return (
      <div className="clock">
        <div className="outer-clock-face">
          <div className="marking marking-one"></div>
          <div className="marking marking-two"></div>
          <div className="marking marking-three"></div>
          <div className="marking marking-four"></div>
          <div className="inner-clock-face">
              <span>The Clock<br/>does not reflect<br/>the current time</span>
            <div className="hand hour-hand" style={hoursStyle}></div>
            <div className="hand min-hand" style={minutesStyle}></div>
            <div className="hand second-hand" style={secondsStyle}></div>
          </div>
        </div>
      </div>
  )
}

export default App;
