import Image from "next/image";
import { certifications, awards, trailhead } from "@/lib/cv-data";
import { profile } from "@/lib/cv-data";
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

        <a
          href={profile.trailblazer}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 flex flex-col items-center gap-6 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[#032E61]/[0.04] via-[var(--card)] to-[#032E61]/[0.04] p-6 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:gap-8 sm:p-8"
        >
          <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
            <Image
              src="/trailhead-ranger.png"
              alt="Trailhead Ranger rank"
              fill
              sizes="(min-width: 640px) 7rem, 6rem"
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">
              Trailhead
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight">
              {trailhead.rank}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Active learner on Salesforce Trailhead.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform group-hover:-translate-y-0.5">
              View full profile
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 10h10M11 5l5 5-5 5" />
              </svg>
            </span>
          </div>
          <dl className="grid w-full grid-cols-3 gap-4 text-center sm:w-auto sm:gap-8 sm:text-left">
            <TrailheadStat label="Badges" value={trailhead.badges.toLocaleString()} />
            <TrailheadStat label="Points" value={trailhead.points.toLocaleString()} />
            <TrailheadStat label="Trails" value={trailhead.trails.toLocaleString()} />
          </dl>
        </a>

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

function TrailheadStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="order-2 text-xs uppercase tracking-wider text-[var(--muted)]">
        {label}
      </dt>
      <dd className="text-xl font-bold text-[var(--brand)] sm:text-2xl">
        {value}
      </dd>
    </div>
  );
}
