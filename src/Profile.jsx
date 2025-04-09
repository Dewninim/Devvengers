import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaInstagram, FaFacebook, FaBehance } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

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
          <span
            onClick={() => navigate("/#interview")} // Navigate to the CareerBoost section on the homepage
            className="cursor-pointer hover:underline"
          >
            CareerBoost
          </span>
          <span
            onClick={() => navigate("/")} // Navigate to the CareerBoost page (homepage)
            className="cursor-pointer hover:underline"
          >
            About
          </span>
        </nav>
        <img
          src="/profile.png"
          alt="user"
          className="w-10 h-10 rounded-full border cursor-pointer"
          onClick={() => navigate("/profile")} // Navigate to profile page
        />
      </header>

      <div className="mt-10">
        <img
          src="/profile.png"
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-3xl font-light mt-4">Welcome, Sam Smith</h2>

        <Card className="max-w-md mx-auto mt-6 rounded-2xl p-6 shadow">
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-500">
              <strong>User Id:</strong> 123#sam
            </p>
            <h3 className="text-xl font-semibold">Sam Smith</h3>
            <p className="text-lg font-bold">Samsmith@gmail.com</p>
            <p className="text-md">+9472 1 303 098</p>
            <p className="text-sm text-gray-500 mt-2">
              Kings street, Alabama,<br />Washington DC
            </p>
          </CardContent>
        </Card>

        <Button className="fixed bottom-24 right-6 w-10 h-10 rounded-full bg-green-500 text-white">
          +
        </Button>
      </div>

      <footer className="mt-12 border-t pt-4 text-sm text-gray-600">
        <p>
          Copyright © 2008-2025. <strong>InternAlze</strong> and logo are proprietary trademarks of <strong>InternAlze</strong>.
        </p>
     
      </footer>
    </div>
  );
};

export default ProfilePage;
