import { certifications, awards } from "@/lib/cv-data";
import { SectionHeading } from "./Skills";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b border-[var(--border)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Awards"
          subtitle="20+ Salesforce and Vlocity certifications spanning architect, developer, and consultant tracks — plus recognition from every employer along the way."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Certifications ({certifications.length})
            </h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 text-sm shadow-sm"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--brand)]/10 text-[10px] font-bold text-[var(--brand)]">
                    &#10003;
                  </span>
                  <span className="leading-snug">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Awards
            </h3>
            <ul className="mt-5 space-y-3">
              {awards.map((award) => (
                <li
                  key={award}
                  className="rounded-lg border border-[var(--border)] bg-gradient-to-br from-[var(--brand)]/5 to-transparent p-4 text-sm font-medium shadow-sm"
                >
                  <span className="block text-2xl leading-none">&#127942;</span>
                  <span className="mt-2 block">{award}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
