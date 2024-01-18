"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

import ThemeToggle from "./theme-toggle";

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="py-8 flex items-center justify-between container">
        <ul className="flex gap-10">
          <li>
            <Link
              href="/"
              className={cn("inline-link", pathname === "/" ? "active" : "")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/publications"
              className={cn(
                "inline-link",
                pathname === "/publications" ? "active" : ""
              )}
            >
              Publications
            </Link>
          </li>
          <li>
            <Link
              href="/cv_henry.pdf"
              target="_blank"
              // className=""
            >
              Resume
              <OpenInNewWindowIcon className="inline-block ml-1" />
            </Link>
          </li>
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
