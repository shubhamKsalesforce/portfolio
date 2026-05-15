import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  awards,
  certifications,
  experience,
  industries,
  profile,
  skills,
  trailhead,
} from "@/lib/cv-data";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: `${profile.name} — Resume`,
  description: `Resume of ${profile.name}, ${profile.title}.`,
};

export default function ResumePage() {
  const salesforceCerts = certifications.filter(
    (c) => c.name.startsWith("Salesforce") || c.name.includes("Accredited"),
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 print:bg-white">
      <div className="mx-auto max-w-[8.5in] px-4 py-6 print:max-w-none print:px-0 print:py-0">
        <div className="mb-4 flex items-center justify-between print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#0176d3]"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M15 10H5M9 5l-5 5 5 5" />
            </svg>
            Back to portfolio
          </Link>
          <PrintButton />
        </div>

        <article className="mx-auto bg-white p-10 text-[10.5pt] leading-relaxed text-slate-900 shadow-sm print:shadow-none">
          <header className="flex items-start justify-between gap-6 border-b-2 border-[#0176d3] pb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                {profile.name}
              </h1>
              <p className="mt-1 text-base font-semibold text-[#0176d3]">
                {profile.title}
              </p>
              <p className="mt-2 text-xs text-slate-700">
                {profile.email} · {profile.phone} · {profile.location}
              </p>
              <p className="mt-1 text-xs">
                <a
                  href={profile.linkedin}
                  className="text-[#0176d3] underline-offset-2 hover:underline"
                >
                  LinkedIn
                </a>
                <span className="text-slate-400"> · </span>
                <a
                  href={profile.trailblazer}
                  className="text-[#0176d3] underline-offset-2 hover:underline"
                >
                  Trailblazer
                </a>
              </p>
            </div>
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-[#0176d3]/30">
              <Image
                src="/profile.jpg"
                alt={profile.name}
                fill
                sizes="6rem"
                className="object-cover object-[60%_25%]"
                priority
              />
            </div>
          </header>

          <Section title="Summary">
            {profile.summary.split("\n\n").map((para, i) => (
              <p key={i} className={i === 0 ? "" : "mt-2"}>
                {para}
              </p>
            ))}
          </Section>

          <Section title="Skills">
            <p>{skills.join(" · ")}</p>
          </Section>

          <Section title="Industries">
            <p>{industries.join(" · ")}</p>
          </Section>

          <Section title="Work Experience">
            <ol className="space-y-4">
              {experience.map((job) => (
                <li
                  key={job.company + job.period}
                  className="break-inside-avoid"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="font-semibold text-slate-900">
                      {job.role} —{" "}
                      <span className="text-[#0176d3]">{job.company}</span>
                    </p>
                    <p className="text-xs italic text-slate-600">
                      {job.period} · {job.duration}
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs italic text-slate-600">
                    Client: {job.client}
                  </p>
                  <ul className="mt-1.5 list-outside list-disc space-y-0.5 pl-4 text-[10pt] text-slate-800">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Section>

          <Section title={`Salesforce Certifications (${salesforceCerts.length})`}>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[10pt]">
              {salesforceCerts.map((c) => (
                <li key={c.name} className="flex gap-2">
                  <span className="text-[#0176d3]">✓</span>
                  <span>{c.name}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Awards">
            <ul className="space-y-1 text-[10pt]">
              {awards.map((a, i) => (
                <li key={`${a.organization}-${a.year}-${i}`} className="flex gap-2">
                  <span className="font-semibold text-[#0176d3] w-12 shrink-0">
                    {a.year}
                  </span>
                  <span>
                    {a.name} <span className="text-slate-500">— {a.organization}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Trailhead">
            <p className="text-[10pt]">
              <span className="font-semibold text-[#0176d3]">{trailhead.rank}</span>
              {" — "}
              {trailhead.badges} Badges · {trailhead.points.toLocaleString()} Points ·{" "}
              {trailhead.trails} Trails
            </p>
          </Section>
        </article>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5 break-inside-avoid">
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0176d3]">
        {title}
      </h2>
      <div className="mt-1.5 h-px bg-[#0176d3]/20" />
      <div className="mt-2 text-slate-800">{children}</div>
    </section>
  );
}
