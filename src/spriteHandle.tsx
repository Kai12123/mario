export function spriteHandle(ticks: any, marioState: any, setMarioState: any) {
  function handleJump(prevSprite: string) {
    if (marioState.leftFacing == true) {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_109.png" }));
      setTimeout(() => { setMarioState((prevState: any) => ({ ...prevState, sprite: prevSprite })); }, 1000);

    }
    else {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_99.png" }));
      setTimeout(() => { setMarioState((prevState: any) => ({ ...prevState, sprite: prevSprite })); }, 1000);

    }
  }

  if (marioState.spaceDown == true && marioState.leftFacing == true && marioState.isRising == false) {
    handleJump(marioState.sprite);

  }
  else if (marioState.spaceDown && marioState.leftFacing == false && marioState.isRising == false) {
    handleJump(marioState.sprite);
  }
  else if (ticks % 15 == 0 && marioState.leftFacing == false && marioState.isRising == false) {
    // right movement
    if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_102.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_101.png" }));
    }
    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_101.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_100.png" }));
    }
    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_100.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_102.png" }));
    }

    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_106.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_102.png" }));
    }
    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_107.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_101.png" }));

    }
    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_108.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_100.png" }));

    }
  }
  else if (ticks % 15 == 0 && marioState.leftFacing == true && marioState.isRising == false) {
    // left movement
    if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_102.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_106.png" }));
    }
    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_101.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_107.png" }));
    }
    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_100.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_108.png" }));
    }
    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_106.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_107.png" }));
    }
    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_107.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_108.png" }));
    }
    else if (marioState.sprite == "src/assets/smb1-various_sheet_cuts/image_108.png") {
      setMarioState((prevState: any) => ({ ...prevState, sprite: "src/assets/smb1-various_sheet_cuts/image_106.png" }));
    }

  }
};
