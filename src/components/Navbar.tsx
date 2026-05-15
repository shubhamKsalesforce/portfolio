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
        <Link href="#about" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-indigo)] text-sm font-bold text-white shadow-md shadow-[var(--brand)]/30 transition-transform group-hover:-translate-y-0.5">
            {initials}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -right-1 -top-1 h-3.5 w-3.5 text-[var(--brand-accent)] drop-shadow"
              aria-hidden="true"
            >
              <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
            </svg>
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
