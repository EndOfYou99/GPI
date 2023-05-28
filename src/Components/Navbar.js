import React, { useState, useRef } from "react";
import "../App.css";
import PaintButton from "./ColorButton";
import {
  generateTriangle,
  generateThunder,
  generateHouse,
  generateArrow,
} from "../HandleShapes/GenerateShape";
import { generateSquare } from "../HandleShapes/GenerateShape";
import { handleRotateTriangle } from "../HandleShapes/RotateShape";
import { handleMultipleRotates } from "../HandleShapes/RotateShape";
import { selectMultipleShapes } from "../HandleShapes/SelectShape";
import SaveForm from "./SaveForm";
import LoadForm from "./LoadForm";
import { CgShapeTriangle, CgShapeSquare } from "react-icons/cg";
import { BiRotateRight, BiRotateLeft } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { GrMultiple } from "react-icons/gr";
import { AiOutlineArrowRight, AiOutlineThunderbolt } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { ColorPickerPopup } from "./ColorPickerPopup";

const Navbar = ({
  setMultiSelectMode,
  multiSelectMode,
  deleteMode,
  setDeleteMode,
  width,
  height,
  setShapes,
  shapes,
  selectedShapeIndex,
  color,
  setColor,
  paintMode,
  setPaintMode,
  angle,
  setAngle,
  selectedShapeIndexes,
  setSelectedShapeIndexes,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuDropdown, setMenuDropDown] = useState(false);
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleButtonClick = (color) => {
    console.log(`Button with color ${color} was clicked`);
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
    setPaintMode(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav className="navbar">
      <button
        className="navbar__button"
        onDoubleClick={() => {
          setMenuDropDown(!menuDropdown);
        }}
      >
        <li>File</li>
        {menuDropdown && (
          <div className="menu-dropdown">
            <div>
              <p>
                <button
                  onClick={() => {
                    setShapes([]);
                  }}
                >
                  New
                </button>
              </p>
              <p>
                <SaveForm data={shapes} />
              </p>
              <p>
                <LoadForm setShapes={setShapes} />
              </p>
            </div>
          </div>
        )}
      </button>

      <button onClick={() => generateSquare({ setShapes })}>
        <CgShapeSquare size={20} />
      </button>
      <button onClick={() => generateTriangle({ setShapes })}>
        <CgShapeTriangle size={20} />
      </button>
      <button onClick={() => generateThunder({ setShapes })}>
        <AiOutlineThunderbolt size={20} />
      </button>
      <button onClick={() => generateArrow({ setShapes })}>
        <AiOutlineArrowRight size={20} />
      </button>
      <button onClick={() => generateHouse({ setShapes })}>
        <BsHouseDoor size={20} />
      </button>

      {multiSelectMode ? (
        <button
          onClick={() =>
            handleMultipleRotates(setShapes, shapes, angle, setAngle, -45)
          }
        >
          <BiRotateLeft size={20} />
        </button>
      ) : (
        <button
          onClick={() =>
            handleRotateTriangle(
              setShapes,
              shapes,
              selectedShapeIndex,
              angle,
              setAngle,
              -45
            )
          }
        >
          <BiRotateLeft size={20} />
        </button>
      )}

      {multiSelectMode ? (
        <button
          onClick={() =>
            handleMultipleRotates(setShapes, shapes, angle, setAngle, 45)
          }
        >
          <BiRotateRight size={20} />
        </button>
      ) : (
        <button
          onClick={() =>
            handleRotateTriangle(
              setShapes,
              shapes,
              selectedShapeIndex,
              angle,
              setAngle,
              45
            )
          }
        >
          <BiRotateRight size={20} />
        </button>
      )}

      <button
        style={{ backgroundColor: deleteMode ? "red" : "green" }}
        onClick={() => {
          setDeleteMode(!deleteMode);
        }}
      >
        <TiDeleteOutline size={20} />
      </button>
      <button
        style={{ backgroundColor: multiSelectMode ? "red" : "green" }}
        onClick={() => setMultiSelectMode(!multiSelectMode)}
      >
        <GrMultiple size={20} />
      </button>
      <button
        className="navbar__button"
        onClick={handleDropdown}
        onDoubleClick={() => {
          setPaintMode(false);
        }}
      >
        {paintMode ? <span>Change/Stop</span> : <span>Select a Color</span>}
        {showDropdown && (
          <div className="navbar__dropdown">
            <PaintButton
              setColor={setColor}
              newColor={"#ff0000"}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#dc143c"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ff355e"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#800000"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#a52a2a"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#8b4513"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#f5deb3"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#c2b280"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ffa500"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ff8c00"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ffa343"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ffd700"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ffcc00"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ffff00"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#00ff00"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#adff2f"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#7fff00"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#32cd32"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#9acd32"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#6b8e23"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#808000"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#008000"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#8fbc8f"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#90ee90"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#98fb98"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#adff2f"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#008080"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#40e0d0"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#00ffff"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#afeeee"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#0000ff"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#87cefa"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#000080"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#0038a8"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#800080"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#dda0dd"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ba55d3"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#9932cc"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ff00ff"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#c71585"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ffc0cb"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ffb6c1"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ff69b4"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#808080"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#c0c0c0"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#d3d3d3"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#f8f8ff"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#f5f5f5"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#ffffff"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <PaintButton
              newColor={"#000000"}
              setColor={setColor}
              setPaintMode={setPaintMode}
            />
            <p>
              <PaintButton
                newColor={inputValue}
                setColor={setColor}
                setPaintMode={setPaintMode}
              />
            </p>
            <div>
              <button onClick={handleTogglePopup}>Open Color Picker</button>
            </div>
          </div>
        )}
      </button>
      {selectedShapeIndexes.length > 1 ? (
        <p>
          {" "}
          <button
            onClick={() =>
              selectMultipleShapes(
                "triangle",
                shapes,
                setShapes,
                selectedShapeIndexes,
                setSelectedShapeIndexes
              )
            }
          >
            <CgShapeSquare size={20} />
          </button>
          <button
            onClick={() =>
              selectMultipleShapes(
                "square",
                shapes,
                setShapes,
                selectedShapeIndexes,
                setSelectedShapeIndexes
              )
            }
          >
            <CgShapeTriangle size={20} />
          </button>
          <button
            onClick={() =>
              selectMultipleShapes(
                "arrow",
                shapes,
                setShapes,
                selectedShapeIndexes,
                setSelectedShapeIndexes
              )
            }
          >
            <AiOutlineArrowRight size={20} />
          </button>
          <button
            onClick={() =>
              selectMultipleShapes(
                "thunder",
                shapes,
                setShapes,
                selectedShapeIndexes,
                setSelectedShapeIndexes
              )
            }
          >
            <AiOutlineThunderbolt size={20} />
          </button>
          <button
            onClick={() =>
              selectMultipleShapes(
                "house",
                shapes,
                setShapes,
                selectedShapeIndexes,
                setSelectedShapeIndexes
              )
            }
          >
            <BsHouseDoor size={20} />
          </button>
        </p>
      ) : (
        <p></p>
      )}
      {showPopup && (
        <ColorPickerPopup
          isOpen={showPopup}
          onRequestClose={handleClosePopup}
          setColor={setColor}
          color={color}
        />
      )}
    </nav>
  );
};

export default Navbar;
