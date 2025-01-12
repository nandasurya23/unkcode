"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          {isScrolled ? (
            <Image
              src="https://res.cloudinary.com/df82hir2r/image/upload/v1735668002/unkcode/blue.svg"
              alt="Logo Biru"
              width={192}
              height={48}
              className="w-24 md:w-36 "
            />
          ) : (
            <Image
              src="https://res.cloudinary.com/df82hir2r/image/upload/v1736708026/unkcode/white.svg"
              alt="Logo Putih"
              width={192}
              height={48}
              className="w-24 md:w-36 "
            />
          )}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className={`hover:text-blue-500 transition ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-blue-500 transition ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-blue-500 transition ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-blue-500 transition ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-gray-700 ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40"></div> // Overlay effect
      )}
      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="mt-16 space-y-4 px-6 text-gray-700">
          <li>
            <a href="#" className="block hover:text-blue-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
