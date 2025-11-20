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
    <nav className="fixed top-4 left-0 right-0 z-50 bg-transparent px-4 sm:px-6 lg:px-8">
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

            {/* Mobile menu button */}
            <div className="absolute right-4 sm:right-6 md:hidden">
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
      </div>
    </nav>
  );
}

