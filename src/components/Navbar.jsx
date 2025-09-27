import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // lucide-react icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-sm 
     w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-xl font-bold">
          <span className="text-fuchsia-600">CS</span> — Ticket System</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-600">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">FAQ</li>
          <li className="hover:text-indigo-600 cursor-pointer">Changelog</li>
          <li className="hover:text-indigo-600 cursor-pointer">Blog</li>
          <li className="hover:text-indigo-600 cursor-pointer">Download</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right - Button */}
        <div className="hidden md:block">
          <button className="bg-indigo-600 text-white text-sm px-4 py-2
           rounded-md hover:bg-indigo-700">
            + New Ticket
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3">
          <ul className="flex flex-col gap-3 text-sm text-gray-700">
            <li className="hover:text-indigo-600 cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer">FAQ</li>
            <li className="hover:text-indigo-600 cursor-pointer">Changelog</li>
            <li className="hover:text-indigo-600 cursor-pointer">Blog</li>
            <li className="hover:text-indigo-600 cursor-pointer">Download</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
          </ul>
          <button className="bg-indigo-600 w-full text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700">
            + New Ticket
          </button>
        </div>
      )}
    </nav>
  );
}
