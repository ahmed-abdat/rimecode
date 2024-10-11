"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

const AceternityLogo = () => (
  <svg
    width="66"
    height="65"
    viewBox="0 0 66 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-3 text-black dark:text-white"
  >
    <path
      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
      stroke="currentColor"
      strokeWidth="15"
      strokeMiterlimit="3.86874"
      strokeLinecap="round"
    />
  </svg>
);

const Header = () => {
  return (
    <header className="fixed w-full bg-background shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center">
            <Image src="/logo.png" alt="RimCode Logo" className="h-10 w-10 mr-2" width={40} height={40} />
            RimCode
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-foreground hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-foreground hover:text-primary">
              Pricing
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary">
              Contact
            </Link>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2"
            >
              <AceternityLogo />
              <span>Join Our Program</span>
            </HoverBorderGradient>
            <ThemeToggle />
          </nav>
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="ml-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Menu</SheetTitle>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="#features" className="text-foreground hover:text-primary">
                    Features
                  </Link>
                  <Link href="#pricing" className="text-foreground hover:text-primary">
                    Pricing
                  </Link>
                  <Link href="#contact" className="text-foreground hover:text-primary">
                    Contact
                  </Link>
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2"
                  >
                    <AceternityLogo />
                    <span>Join Our Program</span>
                  </HoverBorderGradient>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
