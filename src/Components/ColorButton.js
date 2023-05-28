function PaintButton({ newColor, setColor, setPaintMode }) {
  const handleColorChange = (newColor) => {
    setColor(newColor);
    setPaintMode(true);
  };

  return (
    <button
      style={{
        width: "15px",
        height: "15px",
        margin: "5px",
        padding: "0",
        border: "2,5px solid black",
        backgroundColor: newColor,
      }}
      onClick={() => handleColorChange(newColor)}
    ></button>
  );
}

export default PaintButton;
