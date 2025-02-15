import { GroundChunk } from "./chunk_types/GroundChunk";
import { BlankChunk } from "./chunk_types/BlankChunk";
export function groundCollision(marioState:any, setMarioState:any,) {
  // line all the chunks in a row
  // determine their absolute position based on position in row
  // chunks should be one block wide
  // determine collision by comparing mario x/y values with chunk x/y values
  // there will likely be issues with this 
  // because both the mario x/y and chunk x/y values only specify one point
  // some addition/subtraction will be needed
  // in order to make mario's base y value the same as the chunk's y value
  // for the x plane, the detection will need to get a range from the chunk's x value
  // to account for all the other x values the chunk takes up
  // the program will determine if mario's x value is in the chunk's range

  fullMapLayout.map((e:any)=>{
    if (e === 1) {
      return <GroundChunk/>
    }
    if (e === 0) {
      return <BlankChunk/>
    }
  })
}


const fullMapLayout = [
  [
  1,
  1,
  1,
  0,
  1,
  0,]
];