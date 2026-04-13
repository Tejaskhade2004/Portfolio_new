'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, PROFILE, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001427] px-4 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md sm:px-6 lg:px-10">
      {/* Navbar Container */}
      <div className="m-auto flex h-full w-full items-center justify-between px-[6px] sm:px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={56}
            height={56}
            draggable={false}
            className="h-14 w-14 cursor-pointer select-none sm:h-[64px] sm:w-[64px]"
          />
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300">
            {PROFILE.name}
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden h-full flex-row items-center justify-between md:mr-6 md:flex md:w-[460px] lg:mr-20 lg:w-[500px]">
          <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[20px] py-[10px] text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}

            {/* Source Code */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              Source Code
            </Link>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-3xl text-white focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-[65px] w-full border-t border-white/10 bg-[#030014] p-5 text-gray-300 shadow-xl md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="w-full rounded-lg px-4 py-2 text-center text-base transition hover:bg-white/5 hover:text-[rgb(112,66,248)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full rounded-lg px-4 py-2 text-center text-base transition hover:bg-white/5 hover:text-[rgb(112,66,248)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};