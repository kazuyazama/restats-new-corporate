import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useModal from "../../hooks/useModal";

type Props = {
  children: ReactNode;
};

type ContextType = {
  openModal: (modal: ReactNode) => void;
  closeModal: () => void;
};



export const ModalContext = createContext<ContextType>({} as ContextType);

export const ModalProvider: FC<Props> = ({ children }) => {
  const [modalNode, setModalNode] = useState<ReactNode>();
  const [showModal, setShowModal] = useState(false);

  const modalElement = useModal("modal");

  const openModal = (modal: ReactNode) => {
    setModalNode(modal);
  };

  const closeModal = () => {
    setModalNode(null);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  if (!showModal) {
    return null;
  }


  if (!modalElement) {
    return null;
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal}}>
      {children}
      {createPortal(modalNode, modalElement)}
    </ModalContext.Provider>
  );
};