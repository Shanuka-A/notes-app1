import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode; // Fixing import and type
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">

        <div className="modal-action">
          <label onClick={() => setModalOpen(false)} className="btn">x</label>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
