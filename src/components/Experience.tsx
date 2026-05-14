import { experience } from "@/lib/cv-data";
import { SectionHeading } from "./Skills";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[var(--border)] bg-[var(--card)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Career journey"
          title="Work Experience"
          subtitle="Seven years of progressive leadership across telecommunications, energy & utilities, health, and insurance — at IBM, Capgemini, Deloitte, and Cloobees."
        />

        <ol className="relative mt-14 space-y-10 border-l-2 border-[var(--border)] pl-8">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span className="absolute -left-[42px] grid h-7 w-7 place-items-center rounded-full border-2 border-[var(--brand)] bg-[var(--background)] text-xs font-bold text-[var(--brand)]">
                {job.company[0]}
              </span>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    {job.company}
                  </h3>
                  <span className="rounded-full bg-[var(--brand)]/10 px-3 py-1 text-xs font-semibold text-[var(--brand)]">
                    {job.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-[var(--brand-soft)]">
                  {job.role}
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  {job.period} &middot; Client: {job.client}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--foreground)]/90">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
