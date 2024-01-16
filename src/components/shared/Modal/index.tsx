import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

export const Modal = ({ children, isOpen, onClose }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {children}
        </div>
      )}
    </>
  );
};
