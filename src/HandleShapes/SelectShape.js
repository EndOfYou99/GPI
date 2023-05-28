export function selectMultipleShapes(
  shape,
  shapes,
  setShapes,
  selectedShapeIndexes,
  setSelectedShapeIndexes
) {
  const newIndexes = selectedShapeIndexes.filter(
    (index) => shapes[index].type === shape
  );

  setSelectedShapeIndexes(newIndexes);

  setShapes(
    shapes.map((shape, index) => ({
      ...shape,
      borderColor: newIndexes.includes(index) ? "red" : "black",
    }))
  );
}

export const updateShapes = (clickedShapeIndexes, setShapes) => {
  setShapes((prevShapes) =>
    prevShapes.map((shape, index) => {
      if (clickedShapeIndexes.includes(index)) {
        return {
          ...shape,
          borderColor: "red",
        };
      } else {
        return {
          ...shape,
          borderColor: "black",
        };
      }
    })
  );
};

export function getSelectedShapes(
  event,
  startCoords,
  endCoords,
  isMultipleSelect,
  clickedShapeIndexes,
  shapes
) {
  let clickedShapeIndex;
  const { offsetX, offsetY } = event.nativeEvent;
  const range = {
    x1: Math.min(startCoords.x, endCoords.x),
    y1: Math.min(startCoords.y - 40, endCoords.y),
    x2: Math.max(startCoords.x, endCoords.x),
    y2: Math.max(startCoords.y, endCoords.y - 40),
  };

  shapes.forEach((shape, index) => {
    const withinRange =
      isMultipleSelect &&
      shape.x > range.x1 &&
      shape.x < range.x2 &&
      shape.y > range.y1 &&
      shape.y < range.y2;

    const withinClick =
      offsetX > shape.x - shape.size / 2 &&
      offsetX < shape.x + shape.size / 2 &&
      offsetY > shape.y - shape.size / 2 &&
      offsetY < shape.y + shape.size / 2;

    if (isMultipleSelect && withinRange) {
      clickedShapeIndexes.push(index);
    } else if (!isMultipleSelect && withinClick) {
      clickedShapeIndex = index; // Update the clickedShapeIndex for each shape within the click area
    }
  });

  if (clickedShapeIndex !== null && !isMultipleSelect) {
    clickedShapeIndexes.push(clickedShapeIndex); // Push the last index to the clickedShapeIndexes array
  }
}
