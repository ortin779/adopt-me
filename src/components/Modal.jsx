import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  if (!modalRef.current) {
    modalRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalElement = document.getElementById("modal");
    modalElement.onclick = onClose;
    modalElement.appendChild(modalRef.current);

    return () => {
      modalElement.removeChild(modalRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, modalRef.current);
};
