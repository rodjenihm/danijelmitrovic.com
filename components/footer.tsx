import { Github, Linkedin, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/rodjenihm",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/danijel-mitrović",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "X",
      url: "https://x.com/dan_mitrovic_91",
      icon: <X className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="w-full bg-background border-t">
      <div className="max-w-screen-xl mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Danijel Mitrović. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
