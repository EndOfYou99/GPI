import React, { useState } from "react";
import FileSaver from "file-saver";
import Modal from "react-modal";

function LoadForm({ setShapes }) {
  const [savedData, setSavedData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleLoad = (data) => {
    setShapes(data); // pass the loaded data to the setShapes function
    alert(`Loaded data from file: ${JSON.stringify(data)}`);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleLoadFile = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        const data = JSON.parse(contents);
        handleLoad(data);
      };

      reader.readAsText(selectedFile);
      setSelectedFile(null);
      handleCloseModal();
    }
  };

  const handleDownload = (name) => {
    const data = JSON.parse(localStorage.getItem(name));
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    FileSaver.saveAs(blob, `${name}.json`);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
  };

  React.useEffect(() => {
    const keys = Object.keys(localStorage);
    const data = keys
      .filter((key) => key !== "__react_fiber")
      .map((key) => ({
        name: key,
        data: JSON.parse(localStorage.getItem(key)),
      }));
    setSavedData(data);
  }, []);

  return (
    <div>
      <button onClick={handleToggleModal}>Load Data</button>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Load Data Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "none",
            padding: 0,
          },
        }}
      >
        <h2>Select a file to load:</h2>
        <input type="file" accept=".json" onChange={handleFileChange} />
        <button onClick={handleLoadFile}>Load</button>
        <button onClick={handleCloseModal}>Cancel</button>
      </Modal>
    </div>
  );
}

export default LoadForm;
