function createSpiral(N) {
  let result = [];
  for (let i = 0; i < N; i++) {
    result.push([])
  }

    let
      arrayIndex = 0, cellIndex = 0,
      array_index_direction = "DOWN", cell_index_direction = "RIGHT",  
      which_index_is_moving = "cellIndex",      
      rightBarrier = N-1, downBarrier = N-1, leftBarrier = 0, upBarrier = 1;

  
  for (let number = 1; number <= N ** 2; number++) {
    result[arrayIndex][cellIndex] = number;
    
    switch (which_index_is_moving) {
      case "cellIndex":
        if (cell_index_direction === "RIGHT") {
          cellIndex++;

          if (cellIndex === rightBarrier) {
            cell_index_direction = "LEFT";
            rightBarrier--;
            which_index_is_moving = "arrayIndex"
          }
        } else if (cell_index_direction === "LEFT") {
          cellIndex--;

          if (cellIndex === leftBarrier) {
            cell_index_direction = "RIGHT";
            leftBarrier++;
            which_index_is_moving = "arrayIndex"
          }
        }
      break;



      case "arrayIndex":
        if (array_index_direction === "DOWN") {
          arrayIndex++;

          if (arrayIndex === downBarrier) {
            array_index_direction = "UP";
            downBarrier--;
            which_index_is_moving = "cellIndex";
          }
        } else if (array_index_direction === "UP") {
          arrayIndex--;

          if (arrayIndex === upBarrier) {
            array_index_direction = "DOWN";
            upBarrier++;
            which_index_is_moving = "cellIndex";
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
