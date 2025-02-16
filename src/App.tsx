import { useState } from 'react';
import './App.css'
import { gameLoop } from './gameLoop';

function App() {
  const [ticks, setTicks] = useState(0);
  const [jumpTimer, setJumpTimer] = useState({timer: 0, highestValue: 0})
  const [eventTicks, setEventTicks] = useState(0);
  const [keydownArray, setKeydownArray] = useState([]);
    // When chunk based collision is added, changing map position should change chunk position as well
  const [mapPosition, setMapPosition] = useState({
    sideScrolling: false,
    x: 330,
    y: 304.5
  });
  const [eventListeners, setEventListeners] = useState({
    keydownBasic: false,
    keyupBasic: false,
    keydownJump: false,
    keyupJump: false
  });
  const [marioState, setMarioState] = useState({
    sprite:"src/assets/smb1-various_sheet_cuts/image_102.png",
    x: 400,
    y: 495,
    wDown:false,
    aDown:false,
    sDown:false,
    dDown:false,
    spaceDown:false,
    leftFacing: false,
    touchingGround: false,
    isRising: false,
  });
  gameLoop(ticks,setTicks,marioState,setMarioState,eventTicks,setEventTicks, eventListeners,setEventListeners,jumpTimer, setJumpTimer, mapPosition,setMapPosition,keydownArray, setKeydownArray)
  return (
    <>
    <div className='window'>
    </div>       
    <img src ={marioState.sprite} style={{position: 'absolute',left: `${marioState.x}px`, top:`${marioState.y}px`}}/>
    <img src="src\assets\smb1-various_sheet_cuts\stage-1-1.png" style={{position: 'absolute', left: `${mapPosition.x}px`, top:`${mapPosition.y}px`}}/>
    </>
  )
}

export default App;