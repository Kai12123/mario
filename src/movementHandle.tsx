export function movementHandle(ticks: any, setTicks:any, marioState: any, setMarioState: any, eventTicks: any, setEventTicks: any, eventListeners: any, setEventListeners: any, jumpTimer: any, setJumpTimer: any, mapPosition: any, setMapPosition: any, keydownArray: any, setKeydownArray: any) {
  // multiple keys cannot be detected
  // make keydownArray state
  // event listeners for wasd and space will add their respective key to the array
  // the marioState.(key)Down properties will be replaced with handleKeyCheck('key', keydownArray) == true
  if (marioState.spaceDown == true)
  {
    setJumpTimer((prevState:any)=>({...prevState, timer: prevState.timer + 1}))
    if (jumpTimer.timer > jumpTimer.highestValue){
      setJumpTimer((prevState:any)=>({...prevState, highestValue: prevState.timer}))

    }
  }
  if (marioState.spaceDown == false)
  {
    setJumpTimer((prevState:any)=>({...prevState, timer: 0}))
    if (marioState.touchingGround == true){
      setJumpTimer((prevState:any)=>({...prevState, timer: 0, highestValue: 0}))

    }
  }
  function handleKeydownBasic(e: any) {
    if (e.key === 'w') { 
      setMarioState((prevState: any) => ({ ...prevState, wDown: true })); 
    }
    if (e.key === 'a' && marioState.dDown === false) {
        setMarioState((prevState: any) => ({ ...prevState, aDown: true, leftFacing: true }));
      }
    
    if (e.key === 's') { setMarioState((prevState: any) => ({ ...prevState, sDown: true })); }


    if (e.key === 'd' && marioState.aDown === false) {
      console.log(marioState.x)
      if (marioState.x >= 560){
      setMarioState((prevState: any) => ({ ...prevState, leftFacing: false }));
      setMapPosition((prevState: any) => ({ ...prevState, sideScrolling: true }));      
      }
      else if (marioState.x < 560){
      setMarioState((prevState: any) => ({ ...prevState, dDown: true, leftFacing: false }));
      setMapPosition((prevState: any) => ({ ...prevState, sideScrolling: false }));
    }
    }
    window.removeEventListener('keydown', handleKeydownBasic);
    setEventListeners((prevState: any)=> ({...prevState, keydownBasic: false}))
  }

  function handleKeyupBasic(e: any) {
    if (e.key === 'w') { setMarioState((prevState: any) => ({ ...prevState, wDown: false })); }
    if (e.key === 'a') {
      setMarioState((prevState: any) => ({ ...prevState, aDown: false }));
    }
    if (e.key === 's') { setMarioState((prevState: any) => ({ ...prevState, sDown: false })); }
    if (e.key === 'd') {
      setMarioState((prevState: any) => ({ ...prevState, dDown: false }));
      setMapPosition((prevState: any) => ({ ...prevState, sideScrolling: false }));

    }
    window.removeEventListener('keyup', handleKeyupBasic);
    setEventListeners((prevState: any)=> ({...prevState, keyupBasic: false}))

  }
  if (eventListeners.keydownBasic == false) {
    window.addEventListener('keydown', handleKeydownBasic);
    setEventListeners((prevState: any) => ({ ...prevState, keydownBasic: true }));
  }
  if (eventListeners.keyupBasic == false) {
    window.addEventListener('keyup', handleKeyupBasic);
    setEventListeners((prevState: any) => ({ ...prevState, keyupBasic: true }));
  }
  if (marioState.touchingGround == true && eventListeners.keydownJump == false) {
    window.addEventListener('keydown', handleKeydownJump);
    { setEventListeners((prevState: any) => ({ ...prevState, keydownJump: true })); };
  }

  if (eventListeners.keyupJump == false) {
    window.addEventListener('keyup', handleKeyupJump);
    setEventListeners((prevState: any) => ({ ...prevState, keyupJump: true }));
  };

  function handleKeydownJump(e: any) {
    if (e.key === ' ') setMarioState((prevState: any) => ({ ...prevState, spaceDown: true, isRising: true}))

  }

  function handleKeyupJump(e: any) {
    if (e.key === ' ') setMarioState((prevState: any) => ({ ...prevState, spaceDown: false}))

    }
    if (marioState.y >= 495){
      setMarioState((prevState: any) => ({ ...prevState, y: 495 }));
    }
  if (marioState.y >= 495){
    setMarioState((prevState: any) => ({ ...prevState, touchingGround: true }));
  }
  if (marioState.y < 495){
    setMarioState((prevState: any) => ({ ...prevState, touchingGround: false }));
  }

  if (marioState.aDown == true && marioState.dDown == false) setMarioState((prevState: any) => ({ ...prevState, x: prevState.x - 1 }));
  if (marioState.dDown == true && marioState.aDown == false && mapPosition.sideScrolling == false) setMarioState((prevState: any) => ({ ...prevState, x: prevState.x + 1 }));
  if (mapPosition.sideScrolling == true && marioState.aDown == false) setMapPosition((prevState: any) => ({ ...prevState, x: prevState.x - 1 }));
 

  if (jumpTimer.highestValue >= 5) { 
    if (marioState.isRising == true && marioState.y > 419){
      setMarioState((prevState: any) => ({ ...prevState, y: prevState.y - 2 }));
    }
    if (marioState.isRising == true && marioState.y <= 419){
      setMarioState((prevState: any) => ({ ...prevState, isRising: false}));
    }
    if (marioState.isRising == false && marioState.touchingGround == false && marioState.y >= 419){
      setMarioState((prevState: any) => ({ ...prevState, isRising: false, y: prevState.y + 2 }));
    }
  }
  else if (jumpTimer.highestValue < 5 && jumpTimer.highestValue > 0) { 
    if (marioState.isRising == true && marioState.y > 495 - (15 * jumpTimer.highestValue)){
     setMarioState((prevState: any) => ({ ...prevState, y: prevState.y - 2 }));
   }
   if (marioState.isRising == true && marioState.y <= 495 - (15 * jumpTimer.highestValue) ){
     setMarioState((prevState: any) => ({ ...prevState, isRising: false}));
   }
   if (marioState.isRising == false && marioState.touchingGround == false && marioState.y >= 495 - (15 * jumpTimer.highestValue)){
     setMarioState((prevState: any) => ({ ...prevState, isRising: false, y: prevState.y + 2 }));
   }
  }
   else if (jumpTimer.highestValue == 0) { 
    if (marioState.isRising == true && marioState.y > 469){
      setMarioState((prevState: any) => ({ ...prevState, y: prevState.y - 2 }));
    }
    if (marioState.isRising == true && marioState.y <= 469){
      setMarioState((prevState: any) => ({ ...prevState, isRising: false}));
    }
    if (marioState.isRising == false && marioState.touchingGround == false && marioState.y >= 469){
      setMarioState((prevState: any) => ({ ...prevState, isRising: false, y: prevState.y + 2 }));
    }
  }
};