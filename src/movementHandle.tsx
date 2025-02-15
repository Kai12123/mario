// unexpected behavior occurs when pressing a key while holding one down
// this is because by pressing another key right when ticks change
// it registers before the previous key    
// because aDown / dDown is still true, they both run

// this file needs to be reworked entirely, it's impossible to read and is extremely finicky
export function movementHandle(ticks: any, marioState: any, setMarioState: any, eventTicks: any, setEventTicks: any, eventListeners: any, setEventListeners: any) {
  function handleKeydownBasic(e: any) {
    if (e.key === 'w') { setMarioState((prevState: any) => ({ ...prevState, wDown: true })); }
    if (e.key === 'a' && marioState.dDown === false) {
      setMarioState((prevState: any) => ({ ...prevState, aDown: true, leftFacing: true }));
      window.removeEventListener('keydown', handleKeydownBasic);
      // setEventListeners((prevState:any)=>({...prevState, keydownBasic: false}))
    }
    if (e.key === 's') { setMarioState((prevState: any) => ({ ...prevState, sDown: true })); }
    if (e.key === 'd' && marioState.aDown === false) {
      setMarioState((prevState: any) => ({ ...prevState, dDown: true, leftFacing: false }));
      window.removeEventListener('keydown', handleKeydownBasic);
      // setEventListeners((prevState:any)=>({...prevState, keydownBasic: false}))
    }
  }

  function handleKeyupBasic(e: any) {
    if (e.key === 'w') { setMarioState((prevState: any) => ({ ...prevState, wDown: false })); }
    if (e.key === 'a') {
      setMarioState((prevState: any) => ({ ...prevState, aDown: false }));
      setEventListeners((prevState: any) => ({ ...prevState, keydownBasic: false, keyupBasic: false }));
    }
    if (e.key === 's') { setMarioState((prevState: any) => ({ ...prevState, sDown: false })); }
    if (e.key === 'd') {
      setMarioState((prevState: any) => ({ ...prevState, dDown: false }));
      setEventListeners((prevState: any) => ({ ...prevState, keydownBasic: false, keyupBasic: false }));

    }
  }
  // once the eventlistener is set, it doesnt matter whether keydownjump is true or not
  if (eventListeners.keydownBasic == false && eventListeners.keyupBasic == false) {
    window.addEventListener('keydown', handleKeydownBasic);
    setEventListeners((prevState: any) => ({ ...prevState, keydownBasic: true }));
  }
  if (eventListeners.keydownBasic == false && eventListeners.keyupBasic == false) {
    window.addEventListener('keyup', handleKeyupBasic);
    setEventListeners((prevState: any) => ({ ...prevState, keyupBasic: true }));
  }
  if (marioState.isJumping == false && eventListeners.keydownJump == false) {
    window.addEventListener('keydown', handleKeydownJump);
    { setEventListeners((prevState: any) => ({ ...prevState, keydownJump: true })); };
  }

  if (marioState.isJumping == false && eventListeners.keyupJump == false) {
    window.addEventListener('keyup', handleKeyupJump);
    setEventListeners((prevState: any) => ({ ...prevState, keyupJump: true }));
  };

  function handleKeydownJump(e: any) {
    
    if (e.key === ' ' && marioState.isJumping == false && eventListeners.keydownJump == false) {
      setMarioState((prevState: any) => ({ ...prevState, spaceDown: true, isJumping: true }));
      setTimeout(() => { setMarioState((prevState: any) => ({ ...prevState, spaceDown: false, isJumping: false })); 
    }, 600);
    window.removeEventListener('keydown', handleKeydownJump);
      setTimeout(() => {
        setEventListeners((prevState: any) => ({ ...prevState, keydownJump: false }));
      }, 200);
    }
  }

  function handleKeyupJump(e: any) {
  if (e.key === ' ') setMarioState((prevState: any) => ({ ...prevState, spaceDown: false, isJumping: false }));}
  if (marioState.aDown == true) setMarioState((prevState: any) => ({ ...prevState, x: prevState.x - 1 }));
  if (marioState.dDown == true) setMarioState((prevState: any) => ({ ...prevState, x: prevState.x + 1 }));
  if (marioState.spaceDown == true) setMarioState((prevState: any) => ({ ...prevState, spaceDown: false, isJumping: true }));
  if (marioState.spaceDown == false && marioState.y < 495 && marioState.isJumping == false) {
    setMarioState((prevState: any) => ({ ...prevState, y: prevState.y + 2 }));
  }
  if (marioState.spaceDown == false && marioState.isJumping == true) {
    setMarioState((prevState: any) => ({ ...prevState, y: prevState.y - 2 }));
  }
  // }
}
;
