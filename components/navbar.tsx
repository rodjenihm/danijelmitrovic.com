"use client";

import { Code2, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="flex items-center justify-between p-4 bg-background max-w-screen-xl mx-auto"
      aria-label="Main navigation"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Code2 className="h-6 w-6" />
        <span className="text-xl font-bold">danijel.</span>
      </Link>
      <div className="hidden md:flex space-x-4 items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === item.href
                ? "text-primary font-bold underline"
                : "text-muted-foreground"
            }`}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-primary font-bold underline"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex justify-between items-center">
              <span className="text-sm font-medium">Theme</span>
              <ModeToggle onThemeChange={() => setIsOpen(false)} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
