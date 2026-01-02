"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-9" />
          <span className="font-semibold text-slate-800">
            Loneliness Listener
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#how">How it works</a>
          <a href="#benefits">Benefits</a>
          <a href="#questions">Questions</a>
          <a href="#listener" className="font-medium text-primary">
            For Listener
          </a>
          <a
            href="#start"
            className="ml-4 px-5 py-2 rounded-full bg-primary text-white"
          >
            Start a Session
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-4 text-slate-700">
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
          <a href="#questions" onClick={() => setMenuOpen(false)}>Questions</a>
          <a href="#listener" className="font-medium text-primary">For Listener</a>

          <a
            href="#start"
            className="block mt-4 text-center px-5 py-3 rounded-full bg-primary text-white"
          >
            Start a Session
          </a>
        </div>
      )}
    </header>
  );
}
