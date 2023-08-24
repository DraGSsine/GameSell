import React, { useState } from 'react';

export const SwagButton = () => {


  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <button
      className=" z-50 absolute top-4 left-2 flex flex-col h-12 w-12 rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${isOpen
            ? "rotate-45 translate-y-3 opacity-70 group-hover:opacity-100"
            : "opacity-70 group-hover:opacity-100"
          }`}
      />
      <div
        className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-70 group-hover:opacity-100"
          }`}
      />
      <div
        className={`${genericHamburgerLine} ${isOpen
            ? "-rotate-45 -translate-y-3 opacity-70 group-hover:opacity-100"
            : "opacity-70 group-hover:opacity-100"
          }`}
      />
    </button>
  );
};
