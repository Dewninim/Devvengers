import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaInstagram, FaFacebook, FaBehance } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ResumeUploadPage = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // trigger file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // You can add upload logic here (e.g., send to server or analyze it)
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="min-h-screen bg-white text-center text-black p-6">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-xl">
        <div className="flex items-center gap-2">
          <img src="/logo-icon (2).png" alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">
            Intern<span className="text-green-600">Alze</span>
          </h1>
        </div>
        <nav className="flex gap-8 text-gray-700 font-medium">
          <span>CareerBoost</span>
          <span>About</span>
        </nav>
        <img src="/profile.png" alt="user" className="w-10 h-10 rounded-full border" />
      </header>

      {/* Upload Section */}
      <div className="mt-16 text-center">
        <h2 className="text-md text-gray-600 mb-6">Check the CV Status</h2>
        <div className="max-w-2xl mx-auto border-2 border-dotted border-green-300 rounded-3xl p-10 bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-4">
            Upload your resume to get started<br />to Check the status
          </h3>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full text-lg"
            onClick={handleButtonClick}
          >
            Upload
          </Button>
          {selectedFile && (
            <p className="text-sm text-gray-600 mt-2">
              Selected: <span className="font-medium">{selectedFile.name}</span>
            </p>
          )}
          <p className="text-sm text-gray-500 mt-2">as .pdf or .docx file</p>
          <p className="text-xs text-gray-400 mt-4">Or paste resume text</p>
        </div>

        {/* Chat Button */}
        <Button className="fixed bottom-24 right-6 w-10 h-10 rounded-full bg-green-500 text-white">
          💬
        </Button>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t pt-4 text-sm text-gray-600">
        <p>
          Copyright © 2008-2025. <strong>InternAlze</strong> and logo are proprietary trademarks of <strong>InternAlze</strong>.
        </p>
        <div className="flex justify-center gap-4 mt-4 text-xl">
          <MdEmail className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaBehance className="cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export default ResumeUploadPage;
