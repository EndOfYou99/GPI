// export const handleColorChange = (
//   clickedShapeIndex,
//   color,
//   shapes,
//   setShapes,
//   setSelectedShapeIndex
// ) => {
//   setSelectedShapeIndex(clickedShapeIndex);
//   setShapes(
//     shapes.reverse().map((shape, index) => {
//       if (index === clickedShapeIndex) {
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
