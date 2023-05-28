function RotateTriangle({
  setTriangles,
  triangles,
  selectedTriangleIndex,
  angle,
  setAngle,
}) {
  const handleRotateTriangle = () => {
    if (selectedTriangleIndex !== null) {
      setTriangles(
        triangles.map((triangle, index) => {
          if (index === selectedTriangleIndex) {
            return {
              ...triangle,
              angle: triangle.angle + 45,
            };
          } else {
            return triangle;
          }
        })
      );
      setAngle(angle + 45);
    }
  };
  return <button onClick={handleRotateTriangle}>Rotate</button>;
}

export const handleRotateTriangle = (
  setShapes,
  shapes,
  selectedShapeIndex,
  angle,
  setAngle,
  rotation
) => {
  if (selectedShapeIndex !== null) {
    setShapes(
      shapes.map((shape, index) => {
        if (index === selectedShapeIndex) {
          return {
            ...shape,
            angle: shape.angle + rotation,
          };
        } else {
          return shape;
        }
      })
    );
    setAngle(angle + rotation);
  }
};

export const handleMultipleRotates = (
  setShapes,
  shapes,
  angle,
  setAngle,
  rotation
) => {
  console.log("calling rotate multiple");
  setShapes(
    shapes.map((shape, index) => {
      if (shape.borderColor === "red") {
        return {
          ...shape,
          angle: angle + rotation,
        };
      } else {
        return {
          ...shape,
        };
      }
    })
  );
  setAngle(angle + rotation);
};

export default RotateTriangle;
