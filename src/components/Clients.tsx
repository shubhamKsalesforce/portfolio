import Image from "next/image";
import { clients } from "@/lib/cv-data";
import { SectionHeading } from "./Skills";

export default function Clients() {
  return (
    <section
      id="clients"
      className="border-b border-[var(--border)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Trusted by"
          title="Clients Worked For"
          subtitle="End-customer brands I've shipped Salesforce solutions for, across Telecommunications, Energy & Utilities, and Media."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <li
              key={client.name}
              className="flex h-28 items-center justify-center rounded-xl border border-[var(--border)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              title={client.name}
            >
              <div className="relative h-full w-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(min-width: 1024px) 12rem, (min-width: 640px) 14rem, 40vw"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs italic text-[var(--muted)]">
          All logos shown are trademarks of their respective owners. Used here
          to identify past project clients; no endorsement is implied.
        </p>
      </div>
    </section>
  );
}
