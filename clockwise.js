function createSpiral(N) {
  let result = [];
  for (let i = 0; i < N; i++) {
    result.push([])
  }

    let
      which_index_will_move_on_next_step = "cellIndex",
      aDirection = "DOWN", bDirection = "RIGHT",
      arrayIndex = 0, cellIndex = 0,
      rightBarrier = N-1, downBarrier = N-1, leftBarrier = 0, upBarrier = 1;

  
  for (let i = 1; i <= N ** 2; i++) {
    result[arrayIndex][cellIndex] = i;
    
    switch (which_index_will_move_on_next_step) {
      case "cellIndex":
        if (bDirection === "RIGHT") {
          cellIndex++;

          if (cellIndex === rightBarrier) {
            bDirection = "LEFT";
            rightBarrier--;
            which_index_will_move_on_next_step = "arrayIndex"
          }
        } else if (bDirection === "LEFT") {
          cellIndex--;

          if (cellIndex === leftBarrier) {
            bDirection = "RIGHT";
            leftBarrier++;
            which_index_will_move_on_next_step = "arrayIndex"
          }
        }
      break;



      case "arrayIndex":
        if (aDirection === "DOWN") {
          arrayIndex++;

          if (arrayIndex === downBarrier) {
            aDirection = "UP";
            downBarrier--;
            which_index_will_move_on_next_step = "cellIndex";
          }
        } else if (aDirection === "UP") {
          arrayIndex--;

          if (arrayIndex === upBarrier) {
            aDirection = "DOWN";
            upBarrier++;
            which_index_will_move_on_next_step = "cellIndex";
          }
        }
      break;
    }
  }
  
  if (typeof N === "number" && N > 0 && N % 1 === 0) {
    return result
  } else {
    return []
  }
}
