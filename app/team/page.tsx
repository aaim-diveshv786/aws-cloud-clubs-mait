import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard2D from "@/components/TeamCard2D";

const members = [
  { name: "John Doe", role: "Designer", imageSrc: "/placeholders/member-1.png" },
  { name: "Jane Smith", role: "Developer", imageSrc: "/placeholders/member-2.png" },
  { name: "Alice Johnson", role: "Manager", imageSrc: "/placeholders/member-3.png" },
  { name: "Bob Brown", role: "Analyst", imageSrc: "/placeholders/member-4.png" },
];

export default function TeamPage() {
  const [currentMember, setCurrentMember] = useState(0);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="font-headline text-4xl font-black text-on-primary-container">
            Meet the Team
          </h1>
          <p className="mt-3 max-w-2xl text-on-surface-variant">
            Click the center card to cycle through members.
          </p>

          <div className="mt-12 grid items-center gap-8 md:grid-cols-3">
            {/* Left “back” card */}
            <div className="hidden md:block h-[420px] rounded-[28px] bg-surface-container-lowest border border-surface-variant shadow-lg" />

            {/* Center clickable card */}
            <div className="flex justify-center">
              <TeamCard2D
                member={members[currentMember]}
                onClick={() => setCurrentMember((i) => (i + 1) % members.length)}
              />
            </div>

            {/* Right “back” card */}
            <div className="hidden md:block h-[420px] rounded-[28px] bg-surface-container-lowest border border-surface-variant shadow-lg" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}