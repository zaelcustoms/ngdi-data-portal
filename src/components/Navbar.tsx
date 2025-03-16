
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 glassmorphism border-b border-slate-200/30" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
            >
              <div className="bg-ngdi-600 text-white font-bold text-xl p-2 rounded-md">
                NGDI
              </div>
              <span className="text-lg font-medium hidden md:inline-block">
                Nigeria Geospatial Data Infrastructure
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About NGDI</NavLink>
            <NavLink href="/committee">NGDI Committee</NavLink>
            <NavLink href="/publications">Publications</NavLink>
            <NavLink href="/metadata/add">Add Metadata</NavLink>
            <Button 
              variant="default" 
              size="sm" 
              className="ml-2 px-4 py-2 font-medium rounded-md transition-smooth bg-ngdi-600 hover:bg-ngdi-700"
            >
              Login
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex md:hidden text-gray-800 hover:text-ngdi-600 transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] z-50 md:hidden bg-white shadow-lg transition-transform duration-300 transform",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="py-4 px-6">
          <nav className="flex flex-col space-y-3">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/about">About NGDI</MobileNavLink>
            <MobileNavLink href="/committee">NGDI Committee</MobileNavLink>
            <MobileNavLink href="/publications">Publications</MobileNavLink>
            <MobileNavLink href="/metadata/add">Add Metadata</MobileNavLink>
            <Button 
              variant="default" 
              size="default" 
              className="mt-2 w-full bg-ngdi-600 hover:bg-ngdi-700"
            >
              Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      to={href}
      className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-ngdi-600 transition-smooth"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      to={href}
      className="py-2 text-base font-medium text-gray-800 hover:text-ngdi-600 transition-smooth"
      onClick={() => {}}
    >
      {children}
    </Link>
  );
};

export default Navbar;
