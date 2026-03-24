"use client";

import { useMemo, useState } from "react";

type Member = {
  id: number;
  name: string;
  role: string;
  img?: string;
  group?: string;
  socials?: { linkedin?: string; instagram?: string };
};

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.6v1.9h.1c.6-1.1 2.2-2.2 4.5-2.2 4.8 0 5.7 3.1 5.7 7.1V22H17v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22H8V8z" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.8-.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}

const sampleTeam: Member[] = [
  { id: 1, name: "Pari Goel", role: "PR", group: "PR", socials: { linkedin: "https://linkedin.com/in/johndoe", instagram: "https://instagram.com/johndoe" } },
  { id: 2, name: "Md Faisal Quaiyum", role: "Technical", group: "Technical", socials: { linkedin: "https://linkedin.com/in/janesmith", instagram: "https://instagram.com/janesmith" } },
  { id: 3, name: "Sukriti Chauhan", role: "Social Media", group: "Social Media", socials: { linkedin: "https://linkedin.com/in/alicejohnson", instagram: "https://instagram.com/alicejohnson" } },
  { id: 4, name: "Gaurang Dhall", role: "Event Management", group: "Event Management", socials: { linkedin: "https://linkedin.com/in/bobbrown", instagram: "https://instagram.com/bobbrown" } },
];

const categories = [
  "All",
  "Technical",
  "PR",
  "Content",
  "Event Management",
  "Social Media",
] as const;

export default function TeamGridView() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return sampleTeam;
    return sampleTeam.filter((m) => m.group === filter);
  }, [filter]);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={[
              "px-5 py-2.5 rounded-full text-sm font-bold font-headline transition-all duration-200 border",
              filter === c
                ? "bg-primary-container text-on-primary-container border-primary-container shadow-lg shadow-blue-900/10"
                : "bg-surface-container-lowest text-on-surface-variant border-surface-variant hover:text-primary hover:border-primary/40",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((member) => (
            <article
                key={member.id}
                className="rounded-[24px] bg-surface-container-lowest border border-surface-variant shadow-lg shadow-blue-900/5 overflow-hidden hover:-translate-y-1 transition-transform"
            >
                <div className="h-44 bg-surface-container flex items-center justify-center overflow-hidden">
                {member.img ? (
                    <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                ) : (
                    <span className="material-symbols-outlined text-primary text-5xl">person</span>
                )}
                </div>

                <div className="p-5">
                <h3 className="font-headline font-black text-lg text-on-primary-container">
                    {member.name}
                </h3>
                <p className="text-sm text-primary font-semibold mt-1">{member.role}</p>

                {/* socials row */}
                <div className="mt-4 flex gap-3">
                    {member.socials?.linkedin && (
                    <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-full border border-surface-variant bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary-container transition-colors flex items-center justify-center"
                    >
                        <IconLinkedIn />
                    </a>
                    )}
                    {member.socials?.instagram && (
                    <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-9 h-9 rounded-full border border-surface-variant bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary-container transition-colors flex items-center justify-center"
                    >
                        <IconInstagram />
                    </a>
                    )}
                </div>
                </div>
            </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-on-surface-variant text-lg">
            No team members found in this category.
          </p>
        </div>
      )}
    </div>
  );
}