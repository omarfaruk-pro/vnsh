"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { CiUser } from "react-icons/ci";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import NavLink from "./NavLink";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "auto";
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".menu-btn")
      ) {
        setMenuOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        !e.target.closest(".search-btn")
      ) {
        setSearchOpen(false);
      }
    };

    if (menuOpen || searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, searchOpen]);

  return (
    <>
      {(menuOpen || searchOpen) && (
        <div
          onClick={() => {
            setMenuOpen(false);
            setSearchOpen(false);
          }}
          className="fixed inset-0 bg-black/50 backdrop-blur-[1px] z-5 transition-opacity"
        ></div>
      )}

      <header className="border-b border-[#12121214] relative z-40">
        <div className="bg-[#FF9900]">
          <div className="container">
            <p className="text-xs sm:text-base md:text-xs lg:text-base p-2.5 font-bold leading-[1.8] text-white text-center">
              New Product: Weapon Mounted Light Compatible Holster Now Available
              — 
              <Link href="#" className="underline">
                Buy Now and Get 2 FREE Gifts
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-foreground">
          <div className="container">
            <p className="p-2.5 text-white text-center leading-[1.3] tracking-[1px]">
              🔥 Welcome to our store. Free shipping over $50.🔥
            </p>
          </div>
        </div>

        <div className="bg-white py-6 relative overflow-hidden">
          <div className="container">
            <div className="flex items-center justify-between py-1.75">
              <div className="w-22 shrink-0">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="w-11 h-11 shrink-0 hidden lg:inline-flex items-center justify-center search-btn"
                >
                  <IoSearchOutline className="text-[1.375rem]" />
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-11 h-11 shrink-0 inline-flex items-center justify-center lg:hidden menu-btn"
                >
                  <LiaBarsSolid
                    className={`${menuOpen ? "hidden" : "block"} text-2xl`}
                  />
                  <RxCross1
                    className={`${menuOpen ? "block" : "hidden"} text-2xl`}
                  />
                </button>
              </div>

              <Link href="/">
                <Image
                  className="mix-blend-difference"
                  src="/images/logo-white.avif"
                  alt="logo"
                  width={150}
                  height={50}
                />
              </Link>

              <div className="flex">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="w-11 h-11 shrink-0 inline-flex lg:hidden items-center justify-center search-btn"
                >
                  <IoSearchOutline className="text-[1.375rem]" />
                </button>
                <button className="h-11 w-11 inline-flex justify-center items-center shrink-0">
                  <CiUser className="text-2xl" />
                </button>
                <Link
                  className="h-11 w-11 inline-flex justify-center items-center shrink-0 relative"
                  href="/cart"
                >
                  <IoBagHandleOutline className="text-2xl" />
                  <span className="h-4.25 w-4.25 absolute bottom-0.75 right-0.75 bg-red rounded-full text-white text-[.563rem] flex items-center justify-center">
                    03
                  </span>
                </Link>
              </div>
            </div>

            <nav
              ref={menuRef}
              className={`pt-60 md:pt-50 lg:pt-0 lg:mt-4 fixed lg:static top-0 left-0 -translate-x-full lg:translate-x-0 w-full max-w-100 lg:max-w-full h-full lg:h-auto overflow-auto bg-white lg:bg-transparent transition ease-linear duration-200 flex flex-col justify-between ${
                menuOpen ? "translate-x-0 -z-1" : "-translate-x-full z-[-1]"
              }`}
            >
              <ul className="lg:flex lg:justify-center">
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink href="#">Accessories</NavLink>
                </li>
                <li>
                  <NavLink href="#">Apparel and Gifts</NavLink>
                </li>
                <li>
                  <NavLink href="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink href="/contact">Contact</NavLink>
                </li>
              </ul>
              <ul className="flex justify-center lg:hidden py-5 bg-[#1212120a]">
                <li>
                  <a
                    href="#"
                    className="h-11 w-11 flex justify-center items-center"
                  >
                    <FaFacebook className="hover:scale-110 duration-300 ease-linear text-xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="h-11 w-11 flex justify-center items-center"
                  >
                    <FaInstagram className="hover:scale-110 duration-300 ease-linear text-xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="h-11 w-11 flex justify-center items-center"
                  >
                    <FaYoutube className="hover:scale-110 duration-300 ease-linear text-xl" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div
            ref={searchRef}
            className={`absolute top-0 left-0 w-full h-full opacity-0 -translate-y-50 invisible bg-white text-black z-50 transition ease-linear duration-200 ${
              searchOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-50"
            } flex justify-center items-center`}
          >
            <form className="flex items-center justify-center max-w-xl w-full mx-auto px-5 gap-2">
              <div className="relative w-full">
                <input type="search" required className="floating-input" />
                <label className="floating-label">Search</label>
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-11 h-11 shrink-0 inline-flex items-center justify-center"
              >
                <RxCross1 className="text-2xl" />
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
