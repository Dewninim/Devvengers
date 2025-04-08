import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, ClipboardList, FileText, Search } from "lucide-react";

export default function HomePage() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="bg-white text-black font-sans w-full">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center p-4 shadow-sm w-full">
        <div className="text-xl font-bold">
          <span className="text-black">Intern</span>
          <span className="text-green-600">AIze</span>
        </div>
        <nav className="flex flex-wrap items-center space-x-4 mt-2 sm:mt-0">
          <a href="#" className="text-gray-700 hover:text-black text-sm">CareerBoost</a>
          <a href="#" className="text-gray-700 hover:text-black text-sm">About</a>
          <a href="#" className="text-gray-700 hover:text-black text-sm">Sign Up</a>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2"
            onClick={() => setShowSignIn(true)}
          >
            Login
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex justify-center items-center py-12 px-4">
        <div className="relative w-full max-w-4xl h-[400px] sm:h-[500px] overflow-hidden rounded-3xl shadow-lg">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 bg-black/50 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              Discover new career paths With InternAIze
            </h1>
            <p className="mb-6 text-sm sm:text-base max-w-xl">
              Unlock your potential with AI-powered insights. Our platform analyzes internship
              rejections and transforms uncertainty into opportunity — helping you refine your skills,
              optimize your applications, and land the internship you deserve.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 text-sm sm:text-base px-4 py-2">
              Get Ready for an Interview
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="text-center py-10 px-4">
        <h2 className="text-sm text-gray-500 uppercase mb-6">Get ahead with InternAIze</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <Briefcase className="w-6 h-6" />
            <p className="text-sm">Join your work community</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <ClipboardList className="w-6 h-6" />
            <p className="text-sm">Find and apply to jobs</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Search className="w-6 h-6" />
            <p className="text-sm">Search company reviews</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FileText className="w-6 h-6" />
            <p className="text-sm">Compare salaries</p>
          </div>
        </div>
      </section>

      {/* Why Applications Are Rejected */}
      <section className="bg-green-50 py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold mb-4">Why Are Applications Rejected?</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Mismatched skills</li>
              <li>Weak resumes & cover letters</li>
              <li>Lack of interview preparation</li>
              <li>No industry-specific keywords</li>
            </ul>
            <Button className="mt-4 bg-green-500 text-white hover:bg-green-600 text-sm px-4 py-2">
              Upload your resume now & start improving today!
            </Button>
          </div>
          <img
            src="/rejection-image.jpg"
            alt="Application Review"
            className="w-full h-auto rounded-lg shadow"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 px-4 text-left max-w-4xl mx-auto">
        <h4 className="font-semibold mb-2 text-base sm:text-lg">Key Features</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>AI-Powered Resume & Cover Letter Analysis</li>
          <li>Skill Gap Identification & Personalized Learning Suggestions</li>
          <li>Internship Matching System</li>
          <li>Mock Interviews & Industry-Specific Insights</li>
          <li>Community & Mentorship</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-500 border-t px-4">
        <p>
          Copyright © 2024-2025. <strong>InternAIze</strong> and logo are proprietary
          trademarks of <strong>InternAIze</strong>.
        </p>
        <div className="flex justify-center flex-wrap gap-4 mt-2">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
            aria-label="Visit Twitter"
          >
            <Search size={14} />
            <span>X</span>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
            aria-label="Visit LinkedIn"
          >
            <Briefcase size={14} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
            aria-label="Visit Instagram"
          >
            <ClipboardList size={14} />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:contact@internaize.com"
            className="flex items-center space-x-1 hover:underline"
            aria-label="Send an Email"
          >
            <FileText size={14} />
            <span>Email</span>
          </a>
        </div>
      </footer>

      {/* Sign-In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black text-xl"
              onClick={() => setShowSignIn(false)}
            >
              &times;
            </button>

            <h2 className="text-lg font-semibold mb-4">Sign in to your account</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Enter email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-green-600 hover:underline">Forgot Password</a>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
