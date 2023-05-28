export const changeShapeSize = (event, selectedShapeIndexes, shapes) => {
  if (event.key === "ArrowUp") {
    selectedShapeIndexes.map((index) => {
      shapes[index].size += 1;
    });
  }
  if (event.key === "ArrowDown") {
    selectedShapeIndexes.map((index) => {
      shapes[index].size -= 1;
      if (shapes[index].size < 0) {
        shapes[index].size = 0;
      }
    });
  }
  if (event.key === "ArrowLeft") {
    selectedShapeIndexes.map((index) => {
      shapes[index].size -= 5;
      if (shapes[index].size < 0) {
        shapes[index].size = 0;
      }
    });
  }
  if (event.key === "ArrowRight") {
    selectedShapeIndexes.map((index) => {
      shapes[index].size += 5;
    });
  }
};

export const moveShape = (event, selectedShapeIndexes, shapes) => {
  const speed = 5;

  if (event.key === "w") {
    selectedShapeIndexes.map((index) => {
      shapes[index].y -= speed;
    });
  } else if (event.key === "s") {
    selectedShapeIndexes.map((index) => {
      shapes[index].y += speed;
    });
  } else if (event.key === "a") {
    selectedShapeIndexes.map((index) => {
      shapes[index].x -= speed;
    });
  } else if (event.key === "d") {
    selectedShapeIndexes.map((index) => {
      shapes[index].x += speed;
    });
  }
};
