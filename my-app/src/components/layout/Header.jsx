import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-700">GlamTowers</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-amber-700 transition">Home</a>
          <a href="#" className="hover:text-amber-700 transition">About</a>
          <a href="#" className="hover:text-amber-700 transition">Products</a>
          <a href="#" className="hover:text-amber-700 transition">Contact</a>
        </nav>

        {/* CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-800 transition">
            Shop Now
          </button>

          {/* Hamburger button */}
          <button
            className="md:hidden text-amber-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg w-full absolute top-full left-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-amber-700 transition" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="hover:text-amber-700 transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" className="hover:text-amber-700 transition" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#" className="hover:text-amber-700 transition" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-800 transition">
            Shop Now
          </button>
        </nav>
      </div>
    </header>
  );
}
