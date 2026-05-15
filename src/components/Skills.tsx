import { skills, industries } from "@/lib/cv-data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--border)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Industries"
          subtitle="Deep Salesforce ecosystem expertise across the full delivery lifecycle — from design-time configuration to production-grade integrations."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Technical Skills
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--brand-soft)] hover:text-[var(--brand)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Industries / Domains
            </h3>
            <ul className="mt-5 space-y-3">
              {industries.map((industry) => (
                <li
                  key={industry}
                  className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-medium shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl animate-fade-up">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
