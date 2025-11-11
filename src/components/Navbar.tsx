"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const buttonClass =
  "flex items-center px-5 py-1 rounded-full border-[1.549px] border-[rgba(253,255,245,0)] " +
  "bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)] " +
  "shadow-[0px_4.644px_17.413px_0px_rgba(0,0,0,0.35)] backdrop-blur-[37.94511032104492px] " +
  "text-[#F9F9F9] font-semibold text-xl transition hover:bg-white/20 z-10";

const mobileButtonClass =
  "flex items-center px-4 py-2 rounded-full border-[1.549px] border-[rgba(253,255,245,0)] " +
  "bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)] " +
  "shadow-[0px_4.644px_17.413px_0px_rgba(0,0,0,0.35)] backdrop-blur-[37.94511032104492px] " +
  "text-[#F9F9F9] font-semibold text-lg transition hover:bg-white/20 z-10 w-full justify-center";

const dropdownItemClass =
  "block w-full text-left px-5 py-2 rounded-full font-semibold text-[#F9F9F9] text-sm " +
  "bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)] " +
  "shadow-[0px_4.644px_17.413px_0px_rgba(0,0,0,0.35)] backdrop-blur-[37.94511032104492px] " +
  "hover:bg-white/20 transition last:mb-0";

const mobileDropdownItemClass =
  "block w-full text-center px-4 py-2 rounded-full font-semibold text-[#F9F9F9] text-base " +
  "bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)] " +
  "shadow-[0px_4.644px_17.413px_0px_rgba(0,0,0,0.35)] backdrop-blur-[37.94511032104492px] " +
  "hover:bg-white/20 transition mb-2";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-4 fixed top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4">
        <div className="px-2 md:px-4 py-2 border-[1.549px] border-[rgba(253,255,245,0)]
            bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)]
            shadow-[0px_4.644px_17.413px_0px_rgba(0,0,0,0.35)]
            backdrop-blur-[37.94511032104492px] rounded-full p-1 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <Image
            src="/nav-logo.png"
            alt="MnMs Logo"
            width={257}
            height={38}
            className="w-[180px] md:w-[257px] h-auto"
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 items-center">
        <li className="flex items-center">
          <Link href="/" className={buttonClass}>
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/about-us" className={buttonClass}>
            About Us
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/sponsors" className={buttonClass}>
            Our Sponsors
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/company-visit" className={buttonClass}>
            Company Visit
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/summit" className={buttonClass}>
            Summit
          </Link>
        </li>
        <li ref={dropdownRef} className="relative flex items-center">
          <button
            type="button"
            onClick={() => setDropdownOpen((open) => !open)}
            className={buttonClass + " min-w-[180px] justify-between"}
          >
            <span>Competition</span>
            <ChevronDown className="ml-2 w-5 h-5" />
          </button>
          <div
            className={`absolute left-0 top-full w-full z-20 flex flex-col gap-2
              ${dropdownOpen ? "opacity-100 translate-y-2 pointer-events-auto" : "opacity-0 translate-y-0 pointer-events-none"}
              transition-all duration-200`}
          >
            <Link
              href="/iic"
              className={dropdownItemClass}
              onClick={() => setDropdownOpen(false)}
            >
              Innovative Infographic Competition
            </Link>
            <Link
              href="/csc"
              className={dropdownItemClass}
              onClick={() => setDropdownOpen(false)}
            >
              Case Study Competition
            </Link>
          </div>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex items-center px-3 py-2 rounded-full border-[1.549px] border-[rgba(253,255,245,0)]
          bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)]
          shadow-[0px_4.644px_17.413px_0px_rgba(0,0,0,0.35)] backdrop-blur-[37.94511032104492px]
          text-[#F9F9F9] transition hover:bg-white/20"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 right-0 h-screen w-80 max-w-[90vw]
          bg-[linear-gradient(180deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.9)_100%)]
          backdrop-blur-[20px] border-l border-[rgba(253,255,245,0.1)]
          transform transition-transform duration-300 ease-in-out z-40
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(253,255,245,0.1)]">
          <h2 className="text-[#F9F9F9] text-xl font-semibold">Menu</h2>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="flex items-center justify-center w-10 h-10 rounded-full
              bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)]
              text-[#F9F9F9] hover:bg-white/20 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col gap-4 p-6">
          <Link
            href="/"
            className={mobileButtonClass}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          
          <Link
            href="/about-us"
            className={mobileButtonClass}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>

          <Link
            href="/sponsors"
            className={mobileButtonClass}
            onClick={closeMobileMenu}
          >
            Our Sponsors
          </Link>
          
          <Link
            href="/summit"
            className={mobileButtonClass}
            onClick={closeMobileMenu}
          >
            Event
          </Link>

          <Link
            href="/company-visit"
            className={mobileButtonClass}
            onClick={closeMobileMenu}
          >
            Company Visit
          </Link>

          {/* Mobile Competition Dropdown */}
          <div className="w-full">
            <button
              type="button"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className={mobileButtonClass + " justify-between"}
            >
              <span>Competition</span>
              <ChevronDown className={`ml-2 w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${mobileDropdownOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
            >
              <div className="flex flex-col gap-2">
                <Link
                  href="/iic"
                  className={mobileDropdownItemClass}
                  onClick={closeMobileMenu}
                >
                  Innovative Infographic Competition
                </Link>
                <Link
                  href="/csc"
                  className={mobileDropdownItemClass}
                  onClick={closeMobileMenu}
                >
                  Case Study Competition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={closeMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;