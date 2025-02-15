import { useState } from 'react';
import './App.css'
import { gameLoop } from './gameLoop';
//todos:
// replace permanent ground collision with chunk based collision 
// (use mapArray to determine ground and blank chunks)
// switch to side scrolling when mario reaches about the middle of the game window
// add collision with blocks (top, left, right collision)

function App() {
  const [ticks, setTicks] = useState(0);
  const [eventTicks, setEventTicks] = useState(0);
  const [eventListeners, setEventListeners] = useState({
    keydownBasic: false,
    keyupBasic: false,
    keydownJump: false,
    keyupJump: false
  });
  const [marioState, setMarioState] = useState({
    sprite:"src/assets/smb1-various_sheet_cuts/image_102.png",
    x: 400,
    y: 430,
    wDown:false,
    aDown:false,
    sDown:false,
    dDown:false,
    spaceDown:false,
    leftFacing: false,
    isJumping: false
  });
  gameLoop(ticks,setTicks,marioState,setMarioState,eventTicks,setEventTicks, eventListeners,setEventListeners)
  return (
    <>
    <div className='window'>
    </div>       
    <img src ={marioState.sprite} style={{position: 'absolute',left: `${marioState.x}px`, top:`${marioState.y}px`}}/>
    <img src="src\assets\smb1-various_sheet_cuts\stage-1-1.png" style={{position: 'absolute', left: '330px', top:'304.5px'}}/>
    </>
  )
}

export default App;