import React from "react";

const AvailabilityButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="mt-4 relative px-3 py-3 text-lg bg-[#F19ED2] text-gray-800 rounded-lg flex items-center font-bold tracking-wide"
      onClick={scrollToContact}
    >
      <span className="absolute top-0 left-0 flex h-4 w-4 -mt-1 -ml-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400"></span>
      </span>
      Available to work
    </button>
  );
};

export default AvailabilityButton;
