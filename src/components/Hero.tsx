import Image from "next/image";
import { profile } from "@/lib/cv-data";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[var(--border)]"
    >
      <div className="absolute inset-0 -z-10 animate-drift bg-gradient-to-br from-[var(--brand)] via-[var(--brand-soft)] to-[var(--brand-indigo)] opacity-95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_55%)]" />
      <CloudDecor className="pointer-events-none absolute -left-12 top-16 h-32 w-32 text-white/15 animate-float" />
      <CloudDecor
        className="pointer-events-none absolute right-8 bottom-12 hidden h-44 w-44 text-white/10 animate-float md:block"
        style={{ animationDelay: "1.4s" }}
      />
      <LightningDecor className="pointer-events-none absolute right-1/3 top-10 hidden h-10 w-10 text-[var(--brand-accent)] animate-float sm:block" />

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div className="text-white">
            <p
              className="mb-3 inline-flex animate-fade-up items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--brand-accent)]" />
              Available for new challenges
            </p>
            <h1
              className="animate-fade-up text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.15s" }}
            >
              {profile.name}
            </h1>
            <p
              className="mt-3 animate-fade-up text-lg font-medium text-white/90 sm:text-xl"
              style={{ animationDelay: "0.25s" }}
            >
              {profile.title}
            </p>
            <div
              className="mt-6 max-w-2xl animate-fade-up space-y-4 text-base leading-relaxed text-white/85 sm:text-lg"
              style={{ animationDelay: "0.35s" }}
            >
              {profile.summary.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div
              className="mt-8 flex animate-fade-up flex-wrap gap-3"
              style={{ animationDelay: "0.45s" }}
            >
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

            <dl
              className="mt-10 grid max-w-md animate-fade-up grid-cols-3 gap-4 text-white"
              style={{ animationDelay: "0.55s" }}
            >
              <Stat label="Experience" value={profile.totalExperience} />
              <Stat label="Certifications" value="20+" />
              <Stat label="Industries" value="5" />
            </dl>
          </div>

          <div
            className="order-first mx-auto animate-fade-up md:order-none md:mx-0"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-white/30 to-white/5 p-1 shadow-2xl ring-2 ring-white/30 backdrop-blur sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80">
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

function CloudDecor({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M50 90c-16 0-30-12-30-28 0-15 12-27 27-28 4-15 18-26 34-26 18 0 34 13 36 30 2 0 4-1 6-1 13 0 24 10 24 23 0 14-11 24-24 24H50z" />
    </svg>
  );
}

function LightningDecor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}
