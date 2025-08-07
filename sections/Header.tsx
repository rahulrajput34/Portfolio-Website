"use client";

import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [active, setActive] = useState<string>("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experiences" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-25">
      <nav className="flex gap-1 p-0.5 border border-white/25 rounded-full bg-black backdrop:blur">
        {links.map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={() => setActive(id)}
            className={`nav-item ${
              active === id ? "bg-white text-gray-900" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
