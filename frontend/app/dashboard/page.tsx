"use client";
import InitialModal from "@/components/modals/InitialModal/InitialModal";
import InitialModalContent from "@/components/modals/InitialModal/InitialModalContent";
import { useState } from "react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <InitialModal isOpen={isOpen} setIsOpen={setIsOpen}>
          <InitialModalContent />
        </InitialModal>
      )}
    </>
  );
}
