import Image from "next/image";
import { profile } from "@/lib/cv-data";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[var(--border)]"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--brand)] via-[var(--brand-soft)] to-[var(--brand-accent)] opacity-95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" />

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div className="text-white">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Available for new challenges
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-white/90 sm:text-xl">
              {profile.title}
            </p>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/85 sm:text-lg">
              {profile.summary.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand)] shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
              >
                View Experience
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Contact Me
              </a>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-white">
              <Stat label="Experience" value={profile.totalExperience} />
              <Stat label="Certifications" value="20+" />
              <Stat label="Industries" value="5" />
            </dl>
          </div>

          <div className="order-first mx-auto md:order-none md:mx-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-white/20 to-white/5 p-1 shadow-2xl backdrop-blur sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80">
              <Image
                src="/profile.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 20rem, (min-width: 768px) 16rem, (min-width: 640px) 12rem, 10rem"
                className="rounded-full object-cover object-[60%_25%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-white/70">{label}</dt>
      <dd className="mt-1 text-2xl font-bold">{value}</dd>
    </div>
  );
}
