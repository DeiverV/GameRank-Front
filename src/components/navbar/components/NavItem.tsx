"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

interface Props {
  icon: JSX.Element;
  text: string;
  to: string;
}

export const NavItem = ({ icon, text, to }: Props) => {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname.startsWith(to), [pathname, to]);

  return (
    <Link
      className={`gap-2 flex items-center py-2 rounded-md px-4 bg-gameRanks_primary ${
        isActive ? "" : "opacity-20"
      }`}
      href={to}
    >
      {icon}
      <div className="hidden md:block">{text}</div>
    </Link>
  );
};
