import Image from "next/image";
import { clients } from "@/lib/cv-data";
import { SectionHeading } from "./Skills";

export default function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="border-b border-[var(--border)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Trusted by"
          title="Clients Worked For"
          subtitle="End-customer brands I've shipped Salesforce solutions for, across Telecommunications, Energy & Utilities, Media, and Health."
        />

        <div className="marquee-mask mt-12 overflow-hidden">
          <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="animate-marquee pause-on-hover flex w-max gap-4">
              {loop.map((client, i) => (
                <li
                  key={`${client.name}-${i}`}
                  className="flex h-28 w-44 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:w-52"
                  title={client.name}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="13rem"
                      className="object-contain"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-xs italic text-[var(--muted)]">
          All logos shown are trademarks of their respective owners. Used here
          to identify past project clients; no endorsement is implied.
        </p>
      </div>
    </section>
  );
}
