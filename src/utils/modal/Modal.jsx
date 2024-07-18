import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Modal = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState(null);

  useImperativeHandle(ref, () => ({
    show: (item) => {
      setItem(item);
      setVisible(true);
    }
  }));

  const handleClose = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    props.onDelete(item);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete {item.title}?</p>
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
});

export default Modal;
