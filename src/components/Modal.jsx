import { useEffect, useRef } from "react";

const Modal = ({ handleClose, open, setOpen }) => {
  const ref = useRef();
  
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open, handleClose]);
  return (
    <div className={`${open ? "modal-container" : "close"}`}>
      <div ref={ref} className="modal">
        <h2>Look at me! I'm an open Modal</h2>
        <button className="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
