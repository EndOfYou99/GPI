// import React, { useState, useEffect, useRef } from "react";

// const App = () => {
//   const [triangles, setTriangles] = useState([]);
//   const [selectedTriangleIndex, setSelectedTriangleIndex] = useState(null);
//   const [angle, setAngle] = useState(0);
//   const canvasRef = useRef(null);

//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   const randomIntFromRange = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };

//   const generateTriangle = () => {
//     const radius = 50;
//     const x = randomIntFromRange(radius, width - radius);
//     const y = randomIntFromRange(radius, height - radius);

//     setTriangles((prevState) => [
//       ...prevState,
//       {
//         x: x,
//         y: y,
//         radius: radius,
//         color: "white",
//         borderColor: "black",
//         borderWidth: 3,
//         angle: 0,
//       },
//     ]);
//   };

//   const handleTriangleClick = (index) => {
//     setSelectedTriangleIndex(index);
//   };

//   const handleRotateTriangle = () => {
//     if (selectedTriangleIndex !== null) {
//       setTriangles(
//         triangles.map((triangle, index) => {
//           if (index === selectedTriangleIndex) {
//             return {
//               ...triangle,
//               angle: triangle.angle + 45,
//             };
//           } else {
//             return triangle;
//           }
//         })
//       );
//       setAngle(angle + 45);
//     }
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = width;
//     canvas.height = height;

//     ctx.clearRect(0, 0, width, height);

//     triangles.forEach((triangle, index) => {
//       const { x, y, radius, color, borderColor, borderWidth, angle } = triangle;

//       // Save the current context state before transforming it
//       ctx.save();

//       // Translate the canvas to the center of the triangle
//       ctx.translate(x, y);

//       // Rotate the canvas
//       ctx.rotate((angle * Math.PI) / 180);

//       // Draw the triangle
//       ctx.beginPath();
//       ctx.moveTo(-radius / 2, radius / 2);
//       ctx.lineTo(0, -radius / 2);
//       ctx.lineTo(radius / 2, radius / 2);
//       ctx.closePath();

//       // Set the triangle styles
//       ctx.fillStyle = color;
//       ctx.strokeStyle = borderColor;
//       ctx.lineWidth = borderWidth;

//       // Fill and stroke the triangle
//       ctx.fill();
//       ctx.stroke();

//       // Restore the previous context state
//       ctx.restore();
//     });
//   }, [triangles, angle]);

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         style={{ backgroundColor: "grey" }}
//         onClick={generateTriangle}
//       ></canvas>
//       <button onClick={handleRotateTriangle}>Rotate</button>
//       <p>Selected triangle index: {selectedTriangleIndex}</p>
//       {triangles.map((triangle, index) => (
//         <div key={index}>
//           <p>Triangle {index}</p>
//           <button onClick={() => handleTriangleClick(index)}>Select</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
