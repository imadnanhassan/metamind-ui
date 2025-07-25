"use client";


import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { AnimatedHamburger } from "../animated-hamburger";
import { MegaMenu } from "../mega-menu";
import { MobileDrawer } from "../mobile-drawer";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: "Products", hasMegaMenu: true, href: "/ai-tools" },
    { name: "Solutions", hasMegaMenu: true, href: "/solutions" },
    { name: "Enterprise", hasMegaMenu: false, href: "/enterprise" },
    { name: "Customers", hasMegaMenu: false, href: "/customers" },
    { name: "Resources", hasMegaMenu: true, href: "/resources" },
    { name: "Pricing", hasMegaMenu: false, href: "/pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    if (activeMegaMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [activeMegaMenu]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMegaMenu(null);
      }
    };

    if (activeMegaMenu) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeMegaMenu]);

  const handleMouseEnter = (itemName: string, hasMegaMenu: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(itemName);
    if (hasMegaMenu) {
      setActiveMegaMenu(itemName);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      setActiveMegaMenu(null);
    }, 300);
  };

  const handleMegaMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
      setHoveredItem(null);
    }, 300);
  };

  const handleNavItemClick = (item: {
    name: string;
    hasMegaMenu: boolean;
    href: string;
  }) => {
    if (item.hasMegaMenu) {
      setActiveMegaMenu(activeMegaMenu === item.name ? null : item.name);
    } else {
      setActiveMegaMenu(null);
    }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-800/50"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-2xl font-bold text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              MetaMind
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  handleMouseEnter(item.name, item.hasMegaMenu)
                }
                onMouseLeave={handleMouseLeave}
              >
                {item.hasMegaMenu ? (
                  <motion.button
                    className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-1 px-2 py-1 rounded ${
                      hoveredItem === item.name ? "text-white" : ""
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => handleNavItemClick(item)}
                    aria-expanded={activeMegaMenu === item.name}
                    aria-haspopup={item.hasMegaMenu}
                  >
                    {item.name}
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{
                        rotate: activeMegaMenu === item.name ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </motion.button>
                ) : (
                  <Link href={item.href}>
                    <motion.div
                      className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium px-2 py-1 rounded ${
                        hoveredItem === item.name ? "text-white" : ""
                      }`}
                      whileHover={{ y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
           
            <Link href="/login">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="relative inline-flex h-12 overflow-hidden rounded-full  p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Log In
                  </span>
                </button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <AnimatedHamburger
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mega Menu */}
        {activeMegaMenu && (
          <div
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
          >
            <MegaMenu
              type={activeMegaMenu}
              onItemClick={() => setActiveMegaMenu(null)}
            />
          </div>
        )}
      </motion.nav>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
