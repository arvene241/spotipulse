"use client";

import { navItems } from "@/libs/constants";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header
      className="fixed bottom-0 md:left-0 w-screen md:w-[100px] h-[70px] md:h-screen bg-navBlack 
    flex items-center justify-between md:flex-col"
    >
      <div className="">
      </div>
      <nav className="flex md:flex-col items-center justify-center w-full h-full md:h-auto">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.linkName}
            className={cn(
              "flex flex-col items-center justify-center basis-full grow w-full h-full text-xs text-lightGrey md:p-4 font-medium hover:hover-active",
              { "hover-active": isActive(item.href) },
            )}
          >
            <div className="text-lg mb-2">{item.icon}</div>
            {item.linkName}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
