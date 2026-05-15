import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              <span className="text-white">SHUAE</span>
              <span className="text-magenta">MUSIC</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glassmorphism rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#tracks" className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Tracks
            </a>
            <a href="#services" className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Services
            </a>
            <a href="#gear" className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Studio Gear
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#contact"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-magenta/20 border-magenta/50 hover:bg-magenta/40 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300"
            >
              Book Session
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden glassmorphism border-t-0">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-800">
            <div className="pt-5 pb-6 px-5">
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#about" className="-m-3 p-3 flex items-center rounded-md hover:bg-white/5">
                    <span className="ml-3 text-base font-medium text-white">About</span>
                  </a>
                  <a href="#tracks" className="-m-3 p-3 flex items-center rounded-md hover:bg-white/5">
                    <span className="ml-3 text-base font-medium text-white">Tracks</span>
                  </a>
                  <a href="#services" className="-m-3 p-3 flex items-center rounded-md hover:bg-white/5">
                    <span className="ml-3 text-base font-medium text-white">Services</span>
                  </a>
                  <a href="#gear" className="-m-3 p-3 flex items-center rounded-md hover:bg-white/5">
                    <span className="ml-3 text-base font-medium text-white">Studio Gear</span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-magenta/20 border-magenta/50 hover:bg-magenta/40"
              >
                Book Session
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
