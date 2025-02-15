import { useEffect } from "react";
import { movementHandle } from "./movementHandle";
import { spriteHandle } from "./spriteHandle";

export function gameLoop(ticks: any, setTicks: any, marioState: any, setMarioState: any, eventTicks: any, setEventTicks: any, eventListeners: any, setEventListeners: any) {
  useEffect(() => {
    setTimeout(() => {
      setTicks(ticks + 1);
      spriteHandle(ticks, marioState, setMarioState);
      movementHandle(ticks, marioState, setMarioState, eventTicks, setEventTicks, eventListeners, setEventListeners);
    }, 10);
    // spriteHandle(ticks, marioState,setMarioState,handleJump)
  }, [ticks]);

}

