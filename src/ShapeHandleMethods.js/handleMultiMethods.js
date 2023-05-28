// export const updateShapes = (clickedShapeIndexes, setShapes) => {
//   setShapes((prevShapes) =>
//     prevShapes.map((shape, index) => {
//       if (clickedShapeIndexes.includes(index)) {
//         return {
//           ...shape,
//           borderColor: "red",
//         };
//       } else {
//         return {
//           ...shape,
//           borderColor: "black",
//         };
//       }
//     })
//   );
// };

// export const handleMultipleColorChange = (
//   clickedShapeIndexes,
//   setShapes,
//   shapes,
//   color
// ) => {
//   setShapes(
//     shapes.map((shape, index) => {
//       if (clickedShapeIndexes.includes(index)) {
//         return {
//           ...shape,
//           color: color,
//           borderColor: "red",
//         };
//       } else {
//         return {
//           ...shape,
//           borderColor: "black",
//         };
//       }
//     })
//   );
// };
