function createSpiral(N) {
  let result = [];
  for (let i = 0; i < N; i++) {
    result.push([])
  }

    let
      which_index_will_move_on_next_step = "cellIndex",
      array_index_direction = "DOWN", cell_index_direction = "RIGHT",
      arrayIndex = 0, cellIndex = 0,
      rightBarrier = N-1, downBarrier = N-1, leftBarrier = 0, upBarrier = 1;

  
  for (let i = 1; i <= N ** 2; i++) {
    result[arrayIndex][cellIndex] = i;
    
    switch (which_index_will_move_on_next_step) {
      case "cellIndex":
        if (cell_index_direction === "RIGHT") {
          cellIndex++;

          if (cellIndex === rightBarrier) {
            cell_index_direction = "LEFT";
            rightBarrier--;
            which_index_will_move_on_next_step = "arrayIndex"
          }
        } else if (cell_index_direction === "LEFT") {
          cellIndex--;

          if (cellIndex === leftBarrier) {
            cell_index_direction = "RIGHT";
            leftBarrier++;
            which_index_will_move_on_next_step = "arrayIndex"
          }
        }
      break;



      case "arrayIndex":
        if (array_index_direction === "DOWN") {
          arrayIndex++;

          if (arrayIndex === downBarrier) {
            array_index_direction = "UP";
            downBarrier--;
            which_index_will_move_on_next_step = "cellIndex";
          }
        } else if (array_index_direction === "UP") {
          arrayIndex--;

          if (arrayIndex === upBarrier) {
            array_index_direction = "DOWN";
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
