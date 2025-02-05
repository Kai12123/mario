import { useState } from 'react';
import './App.css'
import { gameLoop } from './gameLoop';

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
    y: 450,
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
    </>
  )
}

export default App;