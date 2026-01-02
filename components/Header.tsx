"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Platform logo"
            className="h-9 w-auto"
          />
          <span className="font-semibold text-slate-800 text-lg">
            Your Listening Buddy
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">

          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#benefits" className="hover:text-slate-900">Benefits</a>
          <a href="#questions" className="hover:text-slate-900">Questions</a>

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-slate-900"
            >
              More
              <span className="text-xs">▾</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <a className="block px-4 py-3 hover:bg-slate-50 text-sm">
                  About the platform
                </a>
                <a className="block px-4 py-3 hover:bg-slate-50 text-sm">
                  Safety & Privacy
                </a>
                <a className="block px-4 py-3 hover:bg-slate-50 text-sm font-medium text-primary">
                  For Listener
                </a>
                <a className="block px-4 py-3 hover:bg-slate-50 text-sm">
                  Contact
                </a>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#start"
            className="ml-4 px-5 py-2 rounded-full bg-primary text-white shadow-sm hover:shadow-md transition"
          >
            Start a Session
          </a>
        </nav>

      </div>
    </header>
  );
}
