"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`p-3 uppercase font-stratumReg transition text-foreground font-semibold hover:opacity-100 hover:underline hover:underline-offset-3 ${ isActive ? "opacity-100 underline underline-offset-3" : "opacity-75"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
