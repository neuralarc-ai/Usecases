"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "UseCases", href: "/use-cases" },
  { name: "Why Helium", href: "/why-helium" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Navbar - Simple layout with hamburger on left, logo on right */}
      <nav className="fixed top-4 left-0 right-0 z-50 md:hidden px-4">
        <div className="flex items-center justify-between">
          {/* Hamburger Menu Button - Left */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-black hover:opacity-80 transition-transform"
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>

          {/* Logo - Right */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className={cn(
                "h-10 w-10 transition-all duration-300",
                pathname === "/why-helium" && "brightness-0"
              )}
              priority
            />
          </Link>
        </div>
      </nav>

      {/* Desktop Navbar - Transparent with backdrop blur */}
      <nav className="fixed top-4 left-0 right-0 z-50 bg-transparent px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md rounded-4xl border border-white/20 shadow-sm">
            <div className="flex h-16 items-center justify-center px-4 sm:px-6 relative">
              {/* Logo */}
              <div className="absolute left-4 sm:left-6 flex items-center justify-center">
                <Link href="/" className="flex items-center justify-center">
                  <Image
                    src="/Logo.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                    className={cn(
                      "h-12 w-12 transition-all duration-300",
                      pathname === "/why-helium" && "brightness-0"
                    )}
                    priority
                  />
                </Link>
              </div>

              {/* Navigation Links - Centered */}
              <div className="flex items-center justify-center space-x-8 sm:space-x-12">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-base sm:text-lg font-medium transition-colors text-black hover:opacity-80 relative",
                        isActive && "font-semibold"
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 md:hidden bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="fixed top-20 left-4 z-50 md:hidden w-[calc(100%-2rem)] max-w-sm">
            <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
              <nav className="py-2">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-4 px-6 py-4 transition-all duration-200 relative",
                        isActive
                          ? "bg-gray-700/50 text-white"
                          : "text-gray-300 hover:bg-gray-700/30 hover:text-white"
                      )}
                    >
                      {/* Icon */}
                      <div className={cn(
                        "flex-shrink-0 w-6 h-6 flex items-center justify-center",
                        isActive ? "text-white" : "text-gray-400"
                      )}>
                        {item.name === "Home" && (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        )}
                        {item.name === "Features" && (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {item.name === "UseCases" && (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        )}
                        {item.name === "Why Helium" && (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                      </div>
                      
                      {/* Text */}
                      <span className={cn(
                        "text-base font-medium flex-1",
                        isActive ? "text-white font-semibold" : "text-gray-300"
                      )} style={{ fontFamily: "var(--font-sora)" }}>
                        {item.name}
                      </span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}

