"use client";

import { Code2, Menu, ChevronDown, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="h-20 flex items-center justify-between p-4 bg-background max-w-screen-xl mx-auto"
      aria-label="Main navigation"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Code2 className="h-6 w-6" />
        <span className="text-xl font-bold">danijel.</span>
      </Link>

      <div className="hidden md:flex space-x-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-0 ${
                pathname.startsWith("/portfolio")
                  ? "text-primary font-bold underline"
                  : "text-muted-foreground"
              }`}
            >
              <span className="flex items-center mr-1">
                Portfolio
                <ChevronDown className="h-4 w-4 ml-1" />
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem asChild>
              <Link href="/portfolio#about-me">About Me</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/portfolio#work-experience">Work Experience</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/portfolio#tech-stack">Tech Stack</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/portfolio#get-in-touch">Get In Touch</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="/blog"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === "/blog"
              ? "text-primary font-bold underline"
              : "text-muted-foreground"
          }`}
        >
          Blog
        </Link>
        <div className="border-l dark:border-l-gray-700 h-6 ml-2 mr-2"></div>
        <ModeToggle />
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle>Navigation Menu</SheetTitle>
          <div
            className="flex flex-col space-y-4 mt-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
            >
              <span
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname.startsWith("/portfolio")
                    ? "text-primary font-bold underline"
                    : "text-muted-foreground"
                }`}
              >
                Portfolio
              </span>
              {isPortfolioOpen ? (
                <Minus className="h-4 w-4" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
            </div>
            {isPortfolioOpen && (
              <div className="flex flex-col space-y-2 ml-4">
                <Link
                  href="/portfolio#about-me"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  About Me
                </Link>
                <Link
                  href="/portfolio#work-experience"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  Work Experience
                </Link>
                <Link
                  href="/portfolio#tech-stack"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  Tech Stack
                </Link>
                <Link
                  href="/portfolio#get-in-touch"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  Get In Touch
                </Link>
              </div>
            )}
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/blog"
                  ? "text-primary font-bold underline"
                  : "text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
          <div className="pt-4 flex justify-between items-center">
            <span className="text-sm font-medium">Theme</span>
            <ModeToggle onThemeChange={() => setIsOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
