import Link from "next/link";
import { profile } from "@/lib/cv-data";

const sections = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#clients", label: "Clients" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <header className="sticky top-0 z-30 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#about" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--brand)] text-sm font-bold text-white">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold sm:inline">
            {profile.name}
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-[var(--muted)] md:flex">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="transition-colors hover:text-[var(--brand)]"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-soft)] sm:inline-block"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
