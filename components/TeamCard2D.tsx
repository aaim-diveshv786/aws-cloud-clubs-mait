export type TeamMember = {
  name: string;
  role: string;
  imageSrc?: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
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

export default function TeamCard2D({
  member,
  onClick,
}: {
  member: TeamMember;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group w-[280px] sm:w-[320px] h-[420px]
        rounded-[28px]
        bg-surface-container-lowest
        border border-surface-variant
        shadow-xl shadow-blue-900/10
        px-8 py-10
        text-left
        transition-transform duration-200
        hover:-translate-y-1
        active:translate-y-0
        focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-container/60
      "
      aria-label={`View ${member.name}`}
    >
      <div className="flex flex-col items-center text-center h-full">
        <div className="h-28 w-28 rounded-full bg-surface-container border border-surface-variant overflow-hidden flex items-center justify-center">
          {member.imageSrc ? (
            <img
              src={member.imageSrc}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="material-symbols-outlined text-primary text-5xl">
              person
            </span>
          )}
        </div>

        <p className="mt-8 font-headline text-sm font-extrabold tracking-[0.25em] text-primary-container">
          AWS CLOUD CLUBS
        </p>

        <h3 className="mt-3 font-headline text-2xl font-black text-on-primary-container">
          {member.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-primary">{member.role}</p>

        {/* Socials */}
        <div className="mt-auto pt-6 flex items-center justify-center gap-3">
          {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={(e) => e.stopPropagation()} // prevent cycling when clicking icon
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
              onClick={(e) => e.stopPropagation()} // prevent cycling when clicking icon
              className="w-9 h-9 rounded-full border border-surface-variant bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary-container transition-colors flex items-center justify-center"
            >
              <IconInstagram />
            </a>
          )}
        </div>

        <div className="pt-4 text-xs font-bold text-on-surface-variant">
          Click to cycle →
        </div>
      </div>
    </button>
  );
}