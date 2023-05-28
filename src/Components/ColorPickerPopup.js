import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Modal from "react-modal";

export const ColorPickerPopup = ({
  isOpen,
  onRequestClose,
  color,
  setColor,
}) => {
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Color Picker Popup"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "transparent", // Updated: Set background to transparent
          padding: 0, // Updated: Remove padding
        },
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChromePicker color={color} onChange={handleColorChange} />
        <button
          style={{
            alignSelf: "flex-start",
            marginTop: "10px",
          }}
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
