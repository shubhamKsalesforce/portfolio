import Link from "next/link";
import { profile } from "@/lib/cv-data";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--card)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">
              Let&apos;s talk
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Have a Salesforce challenge?
            </h2>
            <p className="mt-3 max-w-lg text-base text-[var(--muted)]">
              Whether you&apos;re looking for an architect, a delivery lead, or
              an OmniStudio expert — I&apos;d love to hear about your project.
            </p>
            <Link
              href="/resume"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--brand-indigo)] hover:shadow-lg"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download Resume
            </Link>
          </div>

          <ul className="space-y-3 text-sm md:text-right">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--brand)]"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s|-/g, "")}`}
                className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--brand)]"
              >
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--brand)]"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.trailblazer}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--brand)]"
              >
                Trailblazer profile
              </a>
            </li>
            <li className="text-[var(--muted)]">{profile.location}</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
