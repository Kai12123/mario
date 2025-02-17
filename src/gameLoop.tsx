import { useEffect } from "react";
import { movementHandle } from "./movementHandle";
import { spriteHandle } from "./spriteHandle";

export function gameLoop(ticks: any, setTicks: any, marioState: any, setMarioState: any, eventTicks:any, setEventTicks:any, eventListeners: any, setEventListeners: any, jumpTimer: any, setJumpTimer: any, mapPosition: any, setMapPosition: any, keydownArray: any, setKeyDownArray: any) {
  useEffect(() => {
    setTimeout(() => {
      setTicks(ticks + 1);
      spriteHandle(ticks, marioState, setMarioState);
      movementHandle(ticks, setTicks, marioState, setMarioState, eventTicks, setEventTicks, eventListeners, setEventListeners, jumpTimer, setJumpTimer, mapPosition, setMapPosition, keydownArray, setKeyDownArray);
    }, 10);
  }, [ticks]);

}