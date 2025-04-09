import React, { useRef, useState } from "react";
import mammoth from "mammoth";
import * as pdfjsLib from "pdfjs-dist";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaInstagram, FaFacebook, FaBehance } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ResumeUploadPage = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setLoading(true);
      setAnalysisResult(null);

      let text = "";

      try {
        if (file.name.endsWith(".docx")) {
          const arrayBuffer = await file.arrayBuffer();
          const result = await mammoth.extractRawText({ arrayBuffer });
          text = result.value;
        } else if (file.name.endsWith(".pdf")) {
          text = await extractTextFromPDF(file);
        } else {
          alert("Only .docx and .pdf files are supported for real-time analysis.");
          setLoading(false);
          return;
        }
        console.log("Extracted Text:", text);
      } catch (err) {
        console.error("Error reading file:", err);
        setLoading(false);
        return;
      }

      const scoreAnalysis = analyzeResume(text);
      setAnalysisResult(scoreAnalysis);
      setLoading(false);
    }
  };

  const extractTextFromPDF = async (file) => {
    const fileReader = new FileReader();
    return new Promise((resolve, reject) => {
      fileReader.onload = async () => {
        try {
          const pdfData = new Uint8Array(fileReader.result);
          const pdfDoc = await pdfjsLib.getDocument(pdfData).promise;
          let textContent = "";
          const numPages = pdfDoc.numPages;

          for (let i = 0; i < numPages; i++) {
            const page = await pdfDoc.getPage(i + 1);
            const content = await page.getTextContent();

            content.items.forEach((item) => {
              textContent += item.str + " ";
            });
          }

          if (textContent.trim().length === 0) {
            reject("No text found in the PDF.");
          } else {
            resolve(textContent);
          }
        } catch (error) {
          reject("Error extracting text from PDF: " + error.message);
        }
      };

      fileReader.onerror = (error) => reject("File reading error: " + error.message);
      fileReader.readAsArrayBuffer(file);
    });
  };

  const analyzeResume = (text) => {
    if (!text || text.length === 0) {
      console.error("No text to analyze.");
      return { score: 0, breakdown: {} };
    }

    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const hasNumbers = /\d/.test(text);
    const bulletPoints = (text.match(/•|\n-|\n\d+\./g) || []).length;

    const wordFreq = {};
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    for (let word of words) {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    }
    const mostRepeated = Object.values(wordFreq).filter((c) => c > 5).length;

    const scores = {
      content: Math.min(100, wordCount / 5),
      grammar: 80,
      clarity: 90,
      length: wordCount >= 300 && wordCount <= 800 ? 80 : 60,
      impact: hasNumbers && bulletPoints > 2 ? 80 : 60,
      repetition: 100 - Math.min(40, mostRepeated * 5),
    };

    const avgScore = Math.round(
      (scores.content +
        scores.grammar +
        scores.clarity +
        scores.length +
        scores.impact +
        scores.repetition) / 6
    );

    return {
      nameDetected: "Unknown",
      skills: [],
      score: avgScore,
      breakdown: scores,
    };
  };

  return (
    <div className="min-h-screen bg-white text-center text-black p-6">
      <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-xl">
        <div className="flex items-center gap-2">
          <img
            src="/logo-icon (2).png"
            alt="logo"
            className="w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")} // Navigate to profile page
          />
          <h1 className="text-xl font-bold">
            Intern<span className="text-green-600">Alze</span>
          </h1>
        </div>
        <nav className="flex gap-8 text-gray-700 font-medium">
          <button
            onClick={() => navigate("/#interview")} // Navigate to interview section on the homepage
            className="hover:underline"
          >
            CareerBoost
          </button>
          <button
            onClick={() => navigate("/")} // Navigate to CareerBoost page (homepage)
            className="hover:underline"
          >
            About
          </button>
        </nav>
        <img
          src="/profile.png"
          alt="user"
          className="w-10 h-10 rounded-full border cursor-pointer"
          onClick={() => navigate("/profile")} // Navigate to profile page
        />
      </header>

      <div className="mt-16 text-center">
        <h2 className="text-md text-gray-600 mb-6">Check the CV Status</h2>
        <div className="max-w-2xl mx-auto border-2 border-dotted border-green-300 rounded-3xl p-10 bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-4">
            Upload your resume to get started<br />to Check the status
          </h3>
          <input
            type="file"
            accept=".docx, .pdf"
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
          <p className="text-sm text-gray-500 mt-2">Only .docx files supported currently</p>
          <p className="text-xs text-gray-400 mt-4">Or paste resume text</p>

          {loading && <p className="mt-4 text-green-500">Analyzing your resume...</p>}

          {analysisResult && (
            <div className="mt-12 max-w-4xl mx-auto bg-green-950 text-white p-10 rounded-3xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 justify-between items-center mb-10">
                <div className="bg-green-700 w-40 h-40 rounded-full flex items-center justify-center flex-col shadow-inner">
                  <span className="text-3xl font-bold">{analysisResult.score}%</span>
                  <span className="text-sm mt-2 text-white/80">Looks Amazing</span>
                </div>
                <div className="flex-1 space-y-4 w-full max-w-md">
                  <ProgressBar label="Content" value={analysisResult.breakdown.content} color="green" />
                  <ProgressBar label="Grammar" value={analysisResult.breakdown.grammar} color="yellow" />
                  <ProgressBar label="Clarity" value={analysisResult.breakdown.clarity} color="red" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {["length", "impact", "repetition"].map((key) => (
                  <div
                    key={key}
                    className="bg-green-900 p-6 rounded-xl border border-green-600 shadow-md text-left flex flex-col justify-between"
                  >
                    <h4 className="text-white font-semibold text-lg mb-2 capitalize">
                      {key === "length" ? "Resume Length" : key === "impact" ? "Quantifying Impact" : "Repetition"}
                    </h4>
                    <p className="text-white text-sm flex-grow">
                      {key === "length"
                        ? "The resume is concise and can be read quickly. It is one page long and uses clear and concise language."
                        : key === "impact"
                        ? "Includes measurable achievements and strong verbs to demonstrate impact."
                        : "Avoids repeating phrases or words too often throughout the resume."}
                    </p>
                    <div className="text-right mt-4 text-white font-bold text-lg">
                      {analysisResult.breakdown[key]}/100
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="mt-16 border-t pt-4 text-sm text-gray-600">
        <p>
          Copyright © 2008-2025. <strong>InternAlze</strong> and logo are proprietary trademarks of <strong>InternAlze</strong>.
        </p>
       
      </footer>
    </div>
  );
};

export default ResumeUploadPage;

const ProgressBar = ({ label, value, color }) => {
  const barColor = {
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
  }[color];

  return (
    <div>
      <div className="flex justify-between text-sm font-semibold mb-1">
        <span>{label}</span>
        <span>{value}/100</span>
      </div>
      <div className="w-full h-3 bg-gray-300 rounded-full">
        <div
          className={`${barColor} h-3 rounded-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};
