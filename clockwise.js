function createSpiral(N) {
  let result = [];
  for (let i = 0; i < N; i++) {
    result.push([])
  }

    let
      aTurn = false, bTurn = true,
      aDirection = "DOWN", bDirection = "RIGHT",
      arrayIndex = 0, cellIndex = 0,
      rightBarrier = N-1, downBarrier = N-1, leftBarrier = 0, upBarrier = 1;

  
  for (let i = 1; i <= N ** 2; i++) {
    result[arrayIndex][cellIndex] = i;
    
    if (bTurn) {
      if (bDirection === "RIGHT") {
        cellIndex++;

        if (cellIndex === rightBarrier) {
          bDirection = "LEFT";
          rightBarrier--;
          bTurn = false;
          aTurn = true;
        }
      } else if (bDirection === "LEFT") {
        cellIndex--;

        if (cellIndex === leftBarrier) {
          bDirection = "RIGHT";
          leftBarrier++;
          bTurn = false;
          aTurn = true;
        }
      }



    } else if (aTurn) {
      if (aDirection === "DOWN") {
        arrayIndex++;

        if (arrayIndex === downBarrier) {
          aDirection = "UP";
          downBarrier--;
          aTurn = false;
          bTurn = true;
        }
      } else if (aDirection === "UP") {
        arrayIndex--;

        if (arrayIndex === upBarrier) {
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
