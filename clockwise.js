function createSpiral(N) {
  let result = [];
  for (let i = 0; i < N; i++) {
    result.push([])
  }

    let
      aTurn = false, bTurn = true,
      aDirection = "DOWN", bDirection = "RIGHT",
      aPosition = 0, bPosition = 0,
      rightBarrier = N-1, downBarrier = N-1, leftBarrier = 0, upBarrier = 1;

  
  for (let i = 1; i <= N ** 2; i++) {
    result[aPosition][bPosition] = i;
    
    if (bTurn) {
      if (bDirection === "RIGHT") {
        bPosition++;

        if (bPosition === rightBarrier) {
          bDirection = "LEFT";
          rightBarrier--;
          bTurn = false;
          aTurn = true;
        }
      } else if (bDirection === "LEFT") {
        bPosition--;

        if (bPosition === leftBarrier) {
          bDirection = "RIGHT";
          leftBarrier++;
          bTurn = false;
          aTurn = true;
        }
      }



    } else if (aTurn) {
      if (aDirection === "DOWN") {
        aPosition++;

        if (aPosition === downBarrier) {
          aDirection = "UP";
          downBarrier--;
          aTurn = false;
          bTurn = true;
        }
      } else if (aDirection === "UP") {
        aPosition--;

        if (aPosition === upBarrier) {
          aDirection = "DOWN";
          upBarrier++;
          aTurn = false;
          bTurn = true;
        }
      }
    }
  }
  
  if (typeof N === "number" && N > 0 && N % 1 === 0) {
    return result
  } else {
    return []
  }
}
