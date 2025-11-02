"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-6 py-4 lg:p-3 uppercase block font-stratumReg transition text-foreground font-semibold hover:opacity-100 lg:hover:underline lg:hover:underline-offset-3 ${ isActive ? "opacity-100 lg:underline lg:underline-offset-3 bg-[#1212120a] lg:bg-transparent" : "lg:opacity-75"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
