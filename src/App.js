import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import {
  updateShapes,
  getSelectedShapes,
  selectMultipleShapes,
} from "./HandleShapes/SelectShape";
import { handleMultipleColorChange } from "./HandleShapes/PaintShape";
import {
  handleDeleteMultipleShapes,
  handleDeleteShape,
} from "./HandleShapes/DeleteShape";
import {
  drawSquare,
  drawTriangle,
  drawThunder,
  drawArrow,
  drawHouse,
} from "./HandleShapes/GenerateShape";
import { changeShapeSize, moveShape } from "./HandleShapes/ManipulateShape";
import { ChromePicker } from "react-color";

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);
  const [angle, setAngle] = useState(0);
  const [deleteMode, setDeleteMode] = useState(false);
  const [paintMode, setPaintMode] = useState(false);
  const [color, setColor] = useState("white");

  const [multiSelectMode, setMultiSelectMode] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });
  const [endCoords, setEndCoords] = useState({ x: 0, y: 0 });
  const [selectedShapeIndexes, setSelectedShapeIndexes] = useState([]);
  let clickedShapeIndexes = [];
  const canvasRef = useRef(null);

  const width = window.innerWidth - 20;
  const height = window.innerHeight - 50;

  const handleShapeClick = (event) => {
    const isMultipleSelect = multiSelectMode === true;

    getSelectedShapes(
      event,
      startCoords,
      endCoords,
      isMultipleSelect,
      clickedShapeIndexes,
      shapes,
      setShapes
    );

    updateShapes([], setShapes);

    if (deleteMode) {
      if (isMultipleSelect) {
        handleDeleteMultipleShapes(clickedShapeIndexes, setShapes);
      } else {
        handleDeleteShape(
          clickedShapeIndexes[0],
          setShapes,
          setSelectedShapeIndex
        );
        setSelectedShapeIndex(null);
      }
    } else if (paintMode) {
      handleMultipleColorChange(clickedShapeIndexes, setShapes, shapes, color);
    } else {
      setSelectedShapeIndex(clickedShapeIndexes[0]);
      setShapes(
        shapes.map((shape, index) => ({
          ...shape,
          borderColor: clickedShapeIndexes.includes(index) ? "red" : "black",
        }))
      );
    }
    setSelectedShapeIndexes(clickedShapeIndexes);
    return clickedShapeIndexes;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    shapes.forEach((shape) => {
      const { type, x, y, size, color, borderColor, borderWidth, angle } =
        shape;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.beginPath();
      if (type === "triangle") {
        drawTriangle(ctx, size);
      } else if (type === "square") {
        drawSquare(ctx, size);
      } else if (type === "thunder") {
        drawThunder(ctx, size);
      } else if (type === "house") {
        drawHouse(ctx, size);
      } else if (type === "arrow") {
        drawArrow(ctx, size);
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    });

    if (isDrawing && multiSelectMode) {
      ctx.beginPath();
      ctx.rect(
        startCoords.x,
        startCoords.y - 40,
        endCoords.x - startCoords.x,
        endCoords.y - startCoords.y
      );
      ctx.stroke();
    }
  }, [shapes, isDrawing, startCoords, endCoords]);

  useEffect(() => {
    if (selectedShapeIndex != null) {
      const handleKeyDown = (event) => {
        const updatedShapes = [...shapes];

        console.log(selectedShapeIndexes);
        changeShapeSize(event, selectedShapeIndexes, shapes);
        moveShape(event, selectedShapeIndexes, shapes);
        setShapes(updatedShapes);
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedShapeIndex, shapes]);

  const handleMouseDown = (event) => {
    setIsDrawing(true);
    setStartCoords({ x: event.clientX, y: event.clientY });
    setEndCoords({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (isDrawing) {
      setEndCoords({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = (event) => {
    setIsDrawing(false);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  return (
    <div>
      <Navbar
        setDeleteMode={setDeleteMode}
        multiSelectMode={multiSelectMode}
        deleteMode={deleteMode}
        setMultiSelectMode={setMultiSelectMode}
        width={width}
        height={height}
        setShapes={setShapes}
        shapes={shapes}
        selectedShapeIndex={selectedShapeIndex}
        selectedShapeIndexes={selectedShapeIndexes}
        color={color}
        setColor={setColor}
        paintMode={paintMode}
        setPaintMode={setPaintMode}
        angle={angle}
        setAngle={setAngle}
        setSelectedShapeIndexes={setSelectedShapeIndexes}
      />

      <canvas
        ref={canvasRef}
        style={{ backgroundColor: "grey" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleShapeClick}
      ></canvas>
      <div>
        <ChromePicker color={color} onChange={handleColorChange} />
        <button>Close</button>
      </div>
    </div>
  );
};

export default App;
