// function GenerateTriangle({ setTriangles, width, height }) {
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

//   return <button onClick={generateTriangle}>Create Triangle</button>;
// }

// export default GenerateTriangle;
