const width = window.innerWidth;
const height = window.innerHeight - 50;

const randomIntFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateTriangle = ({ setShapes }) => {
  const size = 50;
  const x = randomIntFromRange(size, width - size);
  const y = randomIntFromRange(size, height - size);

  setShapes((prevState) => [
    ...prevState,
    {
      type: "triangle",
      x: x,
      y: y,
      size: size,
      color: "white",
      borderColor: "black",
      borderWidth: 3,
      angle: 0,
    },
  ]);
};

export const drawTriangle = (ctx, size) => {
  ctx.moveTo(-size / 2, size / 2);
  ctx.lineTo(0, -size / 2);
  ctx.lineTo(size / 2, size / 2);
};

export const generateSquare = ({ setShapes }) => {
  const size = 50;
  const x = randomIntFromRange(size, width - size);
  const y = randomIntFromRange(size, height - size);

  setShapes((prevState) => [
    ...prevState,
    {
      type: "square",
      x: x,
      y: y,
      size: size,
      color: "white",
      borderColor: "black",
      borderWidth: 3,
      angle: 0,
    },
  ]);
};

export const drawSquare = (ctx, size) => {
  ctx.rect(-size / 2, -size / 2, size, size);
};

export const generateThunder = ({ setShapes }) => {
  const size = 50;
  const x = randomIntFromRange(size, width - size);
  const y = randomIntFromRange(size, height - size);

  setShapes((prevState) => [
    ...prevState,
    {
      type: "thunder",
      x: x,
      y: y,
      size: size,
      color: "white",
      borderColor: "black",
      borderWidth: 3,
      angle: 0,
    },
  ]);
};

export const drawThunder = (ctx, size) => {
  ctx.moveTo(-size / 2, 0);
  ctx.lineTo(-size / 4, -size / 2);
  ctx.lineTo(0, -size / 4);
  ctx.lineTo(size / 2, 0);
  ctx.lineTo(size / 4, size / 2);
  ctx.lineTo(0, size / 4);
};

export const generateHouse = ({ setShapes }) => {
  const size = 50;
  const x = randomIntFromRange(size, width - size);
  const y = randomIntFromRange(size, height - size);

  setShapes((prevState) => [
    ...prevState,
    {
      type: "house",
      x: x,
      y: y,
      size: size,
      color: "white",
      borderColor: "black",
      borderWidth: 3,
      angle: 0,
    },
  ]);
};

export const drawHouse = (ctx, size) => {
  ctx.moveTo(-size / 2, -size / 2);
  ctx.lineTo(-size / 2, size / 2);
  ctx.lineTo(size / 2, size / 2);
  ctx.lineTo(size / 2, -size / 2);
  ctx.lineTo(0, -size);
};

export const generateArrow = ({ setShapes }) => {
  const size = 50;
  const x = randomIntFromRange(size, width - size);
  const y = randomIntFromRange(size, height - size);

  setShapes((prevState) => [
    ...prevState,
    {
      type: "arrow",
      x: x,
      y: y,
      size: size,
      color: "white",
      borderColor: "black",
      borderWidth: 3,
      angle: 0,
    },
  ]);
};

export const drawArrow = (ctx, size) => {
  ctx.moveTo(-size / 2, 0);
  ctx.lineTo(size / 2, 0);
  ctx.moveTo(size / 2 - size / 4, -size / 4);
  ctx.lineTo(size / 2, 0);
  ctx.lineTo(size / 2 - size / 4, size / 4);
};
