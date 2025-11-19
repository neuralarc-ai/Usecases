"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "UseCases", href: "/use-cases" },
  { name: "Why Helium", href: "/why-helium" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          </div>

          {/* Navigation Links - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex md:items-center md:space-x-12">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors text-black hover:opacity-80 relative",
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

          {/* Spacer for right side to balance logo */}
          <div className="w-10" />

          {/* Mobile menu button - can be expanded later */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-black hover:opacity-80"
              aria-label="Open main menu"
            >
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

