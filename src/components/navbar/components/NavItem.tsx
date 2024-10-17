"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  icon: JSX.Element;
  text: string;
  to: string;
}

export const NavItem = ({ icon, text, to }: Props) => {
  const pathname = usePathname();

  const isActive = pathname.startsWith(to);

  return (
    <Link
      className={`gap-2 flex items-center py-2 rounded-md px-4 bg-gameRanks_primary ${
        isActive ? "" : "opacity-20"
      }`}
      href={to}
    >
      {icon}
      {text}
    </Link>
  );
};
