"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "@/app/store/theme";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Головна" },
    { href: "/about", label: "Про мене" },
    { href: "/portfolio", label: "Портфоліо" },
    { href: "/contact", label: "Контакти" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 shadow-md">
        <div className="container">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border-b-2 dark:border-gray-800 border-gray-200 py-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-14 h-16 relative overflow-hidden">
                  <Image
                    src="/logo.webp"
                    alt="logo"
                    fill
                    sizes="56px"
                    priority
                    className="object-cover dark:invert"
                  />
                </div>
                <p className="flex flex-col items-start leading-tight">
                  <span className="text-[22px] font-bold">Ivahnenko</span>
                  <span className="text-[22px] font-bold">Sergii</span>
                  <span className="text-[12px] text-secondary">
                    architect & sculptor
                  </span>
                </p>
              </Link>
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-10">
                  <p className="flex flex-col items-start">
                    <span className="text-[12px] text-secondary">
                      Написати мені
                    </span>
                    <a
                      href="mailto:isergo436@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      isergo436@gmail.com
                    </a>
                  </p>
                  <p className="flex flex-col items-start">
                    <span className="text-[12px] text-secondary">
                      Зателефонувати мені
                    </span>
                    <a
                      href="tel:+380666324347"
                      className="hover:text-primary transition-colors"
                    >
                      +380666324347
                    </a>
                  </p>

                  <motion.button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {theme === "dark" ? (
                      <SunIcon className="h-5 w-5" />
                    ) : (
                      <MoonIcon className="h-5 w-5" />
                    )}
                  </motion.button>
                </div>
                <motion.button
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="hidden lg:flex items-center gap-10 py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary text-nav dark:text-nav-light transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href="https://www.instagram.com/ivahnenko_serhii?igsh=aHVpN3IyYTgycWo0"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2"
            >
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
                className="object-cover object-center hover:scale-110 transition-transform"
                priority
              />
              Instagram
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 bottom-0 top-[103px] z-50 bg-white dark:bg-dark overflow-y-auto lg:hidden"
          >
            <div className="container h-full py-4 flex flex-col justify-between gap-4">
              <div className="flex flex-col items-center justify-start gap-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: menuItems.length * 0.1, duration: 0.3 }}
                  className="flex flex-col items-center justify-center py-4"
                >
                  <span className="text-[12px] text-secondary">
                    Написати мені
                  </span>
                  <a
                    href="mailto:isergo436@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    isergo436@gmail.com
                  </a>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    delay: (menuItems.length + 1) * 0.1,
                    duration: 0.3,
                  }}
                  className="flex flex-col items-center justify-center py-4"
                >
                  <span className="text-[12px] text-secondary">
                    Зателефонувати мені
                  </span>
                  <a
                    href="tel:+380666324347"
                    className="hover:text-primary transition-colors"
                  >
                    +380666324347
                  </a>
                </motion.p>
                <motion.a
                  href="https://www.instagram.com/ivahnenko_serhii?igsh=aHVpN3IyYTgycWo0"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    delay: (menuItems.length + 2) * 0.1,
                    duration: 0.3,
                  }}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/instagram.svg"
                    alt="instagram"
                    width={24}
                    height={24}
                    className="object-cover object-center hover:scale-110 transition-transform"
                    priority
                  />
                  Instagram
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: (menuItems.length + 3) * 0.1,
                  duration: 0.3,
                }}
                className="flex items-center justify-end"
              >
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 p-2 hover:text-primary transition-colors"
                >
                  {theme === "dark" ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
