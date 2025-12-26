"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Department", href: "/#department" },
  { name: "BESS", href: "/#bess" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact Us", href: "/#contacts" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={cn(
        "fixed w-full z-50 transition-all duration-500 ease-out",
        menuOpen
          ? "bg-primary py-4"
          : scrolled
          ? "bg-black/30 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container px-4 lg:px-12  mx-auto flex justify-between items-center  ">
        <div
          className={cn(
            "transition-all duration-500",
            menuOpen
              ? "scale-100 opacity-100"
              : scrolled
              ? "scale-90 opacity-90"
              : "scale-100 opacity-100"
          )}
        >
          <Image
            src={
              menuOpen
                ? "/images/ff.png"
                : scrolled
                ? "/images/gg.png"
                : "/images/ff.png"
            }
            className="w-20 lg:w-28 h-auto cursor-pointer"
            width={500}
            height={500}
            alt="Sarasavi Geesisila Logo"
          />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-10 text-[22px] text-white">
            {navLinks.map((link) => (
              <li key={link.href} className="font-poppins">
                <Link
                  href={link.href}
                  className="relative inline-block after:absolute after:left-0 after:-bottom-1
                     after:h-0.5 after:w-full after:origin-left
                     after:scale-x-0 after:bg-white after:transition-transform
                     after:duration-300 after:ease-out
                     hover:after:scale-x-100"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex">
          <Link href="https://www.sarasavigeesisila.com/" target="_blank">
            <Button className="text-[22px] rounded-full font-poppins hover:text-white  bg-gold">
              Reserve Seats
            </Button>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            className="lg:hidden"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-8 h-10 text-white" />
            ) : (
              <Menu className={cn(`w-8 h-10 text-white`)} />
            )}
          </button>
        </div>
      </div>
      <div>
        <div
          className={cn(
            `absolute h-screen mt-3  bg-white w-full invisible duration-200 opacity-0`,
            "bg-linear-to-t from-primary/50 to-white",
            {
              "visible border": menuOpen,
              "opacity-100": menuOpen,
            }
          )}
        >
          <div className="container mx-auto px-3.5 lg:px-8 pt-5">
            <ul className="space-y-5 text-xl">
              {navLinks.map((link) => (
                <li key={link.name} className="font-poppins">
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className=" cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
