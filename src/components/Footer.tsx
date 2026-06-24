import Link from "next/link";
import { NAV_ITEMS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-12 sm:px-8 md:flex-row md:justify-between">
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="nav-link text-white/55 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs font-light tracking-wide text-white/45">
          © 2026 Kara Silvestri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
