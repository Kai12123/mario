import { useEffect } from "react";
import { movementHandle } from "./movementHandle";
import { spriteHandle } from "./spriteHandle";

export function gameLoop(ticks: any, setTicks: any, marioState: any, setMarioState: any, eventTicks:any, setEventTicks:any, eventListeners: any, setEventListeners: any, jumpTimer: any, setJumpTimer: any,) {
  useEffect(() => {
    setTimeout(() => {
      setTicks(ticks + 1);
      spriteHandle(ticks, marioState, setMarioState);
      movementHandle(ticks, setTicks, marioState, setMarioState, eventTicks, setEventTicks, eventListeners, setEventListeners, jumpTimer, setJumpTimer);
    }, 10);
  }, [ticks]);

}

