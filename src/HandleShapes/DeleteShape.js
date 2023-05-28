export const handleDeleteMultipleShapes = (indexes, setShapes) => {
  setShapes((prevShapes) =>
    prevShapes.filter((shape, index) => !indexes.includes(index))
  );
};

export const handleDeleteShape = (
  selectedShapeIndex,
  setShapes,
  setSelectedShapeIndex
) => {
  if (selectedShapeIndex !== null) {
    setShapes((prevState) => {
      const newState = [...prevState];
      newState.splice(selectedShapeIndex, 1);
      return newState;
    });
    setSelectedShapeIndex(null);
  }
};
