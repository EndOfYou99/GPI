import React, { useState } from "react";
import { saveAs } from "file-saver";
import Modal from "react-modal";

const SaveForm = ({ data }) => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (name.trim() !== "") {
      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      saveAs(blob, `${name}.json`);
      alert(`Saved data under name "${name}"`);
    } else {
      alert("Please enter a name for the data");
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleToggleModal}>Save Data</button>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Save Data Modal"
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
        <form onSubmit={handleSave}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <button type="submit">Save</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default SaveForm;
