import React from "react";
import { GoDownload } from "react-icons/go";

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = "/Diana-Cordero-CV.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Diana-Cordero-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="mt-4 relative px-3 py-3 text-lg  bg-[#F19ED2] text-gray-800 rounded-lg flex items-center font-bold tracking-wide"
      onClick={handleDownload}
    >
      <span className="animate-bounce">
        <GoDownload size={20} />
      </span>
      <span className="ml-2">Download CV</span>
    </button>
  );
};

export default DownloadButton;
