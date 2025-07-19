"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { de } from "zod/locales";

const buttonClass =
  "flex items-center px-5 py-1 rounded-full border-[1.549px] border-[rgba(253,255,245,0)] " +
  "bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)] " +
  "shadow-[0px_4.644px_17.413px_0px_rgba(0,0,0,0.35)] backdrop-blur-[37.94511032104492px] " +
  "text-[#F9F9F9] font-semibold text-xl transition hover:bg-white/20 z-10";

const dropdownItemClass =
  "block w-full text-left px-5 py-2 rounded-full font-semibold text-[#F9F9F9] text-sm " +
  "bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)] " +
  "shadow-[0px_4.644px_17.413px_0px_rgba(0,0,0,0.35)] backdrop-blur-[37.94511032104492px] " +
  "hover:bg-white/20 transition last:mb-0";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between px-12 py-4 fixed top-0 z-50">
      <Link href="/" className="flex items-center gap-4">
        <div className="px-4 py-2 border-[1.549px] border-[rgba(253,255,245,0)]
            bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)]
            shadow-[0px_4.644px_17.413px_0px_rgba(0,0,0,0.35)]
            backdrop-blur-[37.94511032104492px] rounded-full p-1 rounded-full transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <Image
            src="/nav-logo.png"
            alt="MnMs Logo"
            width={257}
            height={38}
          />
        </div>
      </Link>
      <ul className="flex gap-6 items-center">
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
              href="/ccs"
              className={dropdownItemClass}
              onClick={() => setDropdownOpen(false)}
            >
              Case Study Competition
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;