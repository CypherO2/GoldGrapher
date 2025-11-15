import { DynamicIcon } from "lucide-react/dynamic";
import React from "react";

interface InitialModalProps {
  setIsOpen: any;
  isOpen: boolean;
  children?: React.ReactNode;
}

const InitialModal: React.FC<InitialModalProps> = ({
  setIsOpen,
  isOpen,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur"
      onClick={() => setIsOpen(false)}
      data-testid="modal-backdrop"
    >
      <div
        className="bg-white p-6 rounded shadow-lg relative min-w-[300px] max-w-full min-h-[200px]"
        onClick={(e) => e.stopPropagation()}
        data-testid="modal-content"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 transition-all duration-300 hover:scale-110"
          aria-label="Close Modal"
        >
          <DynamicIcon name="x" strokeWidth={2} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default InitialModal;
