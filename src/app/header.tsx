"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header>
      <div className="flex justify-between px-[120px] w-full z-10 text-[18px] leading-[1.8] py-3 absolute top-0">
        <div>kekekuli</div>
        <ul className="flex gap-12">
          {navItems.map(({ label, path }, index) => (
            <li
              key={index}
              onClick={() => router.push(path)}
              className="px-4 py-2 inline-block cursor-pointer hover:bg-secondary/30 rounded-xl hover:shadow-[0_2px_8px_color-mix(in_oklab,_var(--foreground)_20%,_transparent)]"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
