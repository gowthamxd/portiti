import React, { useMemo, useState } from "react";

type Project = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  fullDescription: string;
};

const projects: Project[] = [
  {
    id: 1,
    category: "Logo Design",
    title: "Android Logo Recreation",
    image: "https://github.com/gowthamxd/portiti/blob/main/android-logo.jpg,
    description:
      "A clean vector-style recreation of the Android mascot using simple geometry and bold visual identity.",
    fullDescription:
      "This project focuses on recreating the Android mascot with a clean and minimal visual approach. The design emphasizes balance, symmetry, and strong brand recognition through geometric construction and simplified form.",
  },
  {
    id: 2,
    category: "Photography",
    title: "Ashirvad Store Front",
    image: "",
    description:
      "A documentary-style capture highlighting rustic textures, cultural depth, and everyday local storytelling.",
    fullDescription:
      "This photograph documents the character of a traditional local storefront. The composition highlights aged textures, handcrafted objects, and an authentic cultural atmosphere to preserve the visual identity of the place.",
  },
  {
    id: 3,
    category: "Editorial Design",
    title: "Bloomscape Brochure",
    image: "",
    description:
      "A modern brochure layout combining bold color blocks, typography hierarchy, and clean spatial composition.",
    fullDescription:
      "The brochure was designed to present a plant-focused studio in a bold and memorable way. It uses strong green branding, structured layout, and clean typography to create both visual impact and readability.",
  },
  {
    id: 4,
    category: "Photography",
    title: "Cat Portrait",
    image: "",
    description:
      "A moody natural portrait using depth, framing, and soft light to create an intimate visual moment.",
    fullDescription:
      "This portrait explores natural framing and soft focus to create a calm but cinematic mood. The leaves surrounding the subject help build depth and draw attention to the expression of the cat.",
  },
  {
    id: 5,
    category: "Brand Mockup",
    title: "Coffee Branding",
    image: "",
    description:
      "A minimal coffee shop branding mockup focused on warm tones, clean iconography, and real-world application.",
    fullDescription:
      "This branding concept presents a coffee identity through a signage mockup. The design uses warm neutral tones, simple iconography, and clean placement to show how the brand would work in an urban environment.",
  },
  {
    id: 6,
    category: "Logo Design",
    title: "Cult Fit Concept",
    image: "",
    description:
      "A bold fitness identity combining typography and symbol design to create a strong, energetic brand feel.",
    fullDescription:
      "The goal of this concept was to create a powerful fitness identity with a straightforward visual language. The barbell-inspired graphic and bold type help communicate strength, discipline, and clarity.",
  },
  {
    id: 7,
    category: "Photography",
    title: "Sleeping Puppies",
    image: "",
    description:
      "A candid emotional frame capturing warmth, softness, and natural bonding in a peaceful moment.",
    fullDescription:
      "This image captures a quiet and emotional moment between puppies resting together. The visual strength of the piece comes from its natural softness, honesty, and sense of comfort.",
  },
  {
    id: 8,
    category: "Photography",
    title: "Flower Composition",
    image: "",
    description:
      "A vibrant composition using color contrast and arrangement to create a visually rich decorative scene.",
    fullDescription:
      "This close-up composition explores the beauty of floral arrangement through color, repetition, and visual rhythm. The warm palette makes the frame feel festive and alive.",
  },
  {
    id: 9,
    category: "Photography",
    title: "Abandoned Jeep",
    image: "",
    description:
      "A storytelling image showing nature reclaiming man-made objects, creating contrast and narrative depth.",
    fullDescription:
      "The photograph presents a vehicle gradually being overtaken by greenery. It explores time, abandonment, and the relationship between nature and man-made structures through a strong narrative frame.",
  },
  {
    id: 10,
    category: "Advertising",
    title: "McDonald's Concept Ad",
    image: "",
    description:
      "A playful visual combining cultural elements and brand storytelling for a bold and engaging campaign idea.",
    fullDescription:
      "This ad concept combines fast-food branding with cross-cultural visual references to create a playful promotional piece. It is designed to be attention-grabbing, humorous, and highly shareable.",
  },
  {
    id: 11,
    category: "Poster Design",
    title: "Moto Event Poster",
    image: "",
    description:
      "A dynamic event poster using motion-based composition and bold typography for high visual impact.",
    fullDescription:
      "This event poster is designed to feel energetic and loud. The illustration, typography curve, and bold accents work together to communicate movement and excitement around the biking event.",
  },
  {
    id: 12,
    category: "Event Design",
    title: "Music Night Poster",
    image: "",
    description:
      "A high-energy poster capturing crowd atmosphere and excitement through lighting and composition.",
    fullDescription:
      "The poster uses dramatic stage lighting and crowd silhouettes to create anticipation for a live music event. The hierarchy is structured to highlight the main event information clearly.",
  },
  {
    id: 13,
    category: "Advertising",
    title: "Nike Performance Ad",
    image: "",
    description:
      "A strong product-focused design emphasizing motion, energy, and modern sports branding.",
    fullDescription:
      "This sports advertisement focuses on movement, scale, and strong product presence. The composition is made to feel fast, confident, and aligned with high-performance athletic branding.",
  },
  {
    id: 14,
    category: "Advertising",
    title: "Endurance Campaign",
    image: "",
    description:
      "A clean visual communicating durability and performance through minimal composition and strong messaging.",
    fullDescription:
      "This campaign visual highlights endurance and long-distance comfort using direct typography and a tight product crop. The design is minimal but clear in its performance message.",
  },
  {
    id: 15,
    category: "Concept Design",
    title: "Nike Motion Visual",
    image: "",
    description:
      "A futuristic concept combining motion graphics feel with product storytelling.",
    fullDescription:
      "This concept piece explores how a sports product can be presented in a more experimental and futuristic visual world. Motion, fragments, and perspective are used to suggest speed and innovation.",
  },
  {
    id: 16,
    category: "Product Design",
    title: "Nike Detail Shot",
    image: "",
    description:
      "A minimal product-focused composition highlighting texture, shape, and detail.",
    fullDescription:
      "This piece focuses on product texture and form through a clean, minimal composition. The close crop helps direct attention toward shape, sole detail, and brand linework.",
  },
  {
    id: 17,
    category: "Digital Art",
    title: "Red Shadow Figure",
    image: "",
    description:
      "A dark visual exploration using silhouette and contrast to create mystery and tension.",
    fullDescription:
      "This digital artwork uses a minimal red-and-black palette to create a mysterious and unsettling visual tone. The use of silhouette and negative space drives the mood.",
  },
  {
    id: 18,
    category: "Merch Design",
    title: "Spider Bookmark",
    image: "",
    description:
      "A vibrant design inspired by comic visuals and bold character storytelling.",
    fullDescription:
      "This bookmark concept uses layered character placement, vivid colors, and comic-inspired energy to create a playful collectible-style design suitable for fan merchandise.",
  },
  {
    id: 19,
    category: "Poster Design",
    title: "University Admissions Poster",
    image: "",
    description:
      "A structured promotional design combining student imagery and clear call-to-action elements.",
    fullDescription:
      "This poster was designed as an admissions promotion piece. It combines campus visuals, student-centered imagery, and bold callouts to create a clear and visually direct announcement.",
  },
  {
    id: 20,
    category: "Album Design",
    title: "Wedding Cover",
    image: "",
    description:
      "A romantic collage-style album cover using layered imagery and emotional storytelling.",
    fullDescription:
      "This wedding album cover uses collage-style composition to bring together intimate and celebratory moments. The arrangement is designed to feel premium, emotional, and memory-focused.",
  },
];

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) ?? null,
    [selectedProjectId]
  );

  return (
    <div className="min-h-screen bg-[#f6f4ef] text-black">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f4ef]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-6 py-5 lg:px-16">
          <a
            href="#home"
            className="rounded-md font-serif text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-black"
          >
            G.
          </a>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-3 sm:gap-6">
              <li>
                <a
                  href="#home"
                  className="rounded-md px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="rounded-md px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="rounded-md px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="rounded-md px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-[1450px] px-6 py-10 lg:px-16">
        <section className="grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] xl:grid-cols-[460px_minmax(0,1fr)]">
          <aside className="self-start lg:sticky lg:top-[110px]">
            <div className="rounded-[22px] border border-black/10 bg-[#fbfaf7] p-8 lg:p-10">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d26d6d]">
                Selected Works
              </p>

              <h1 className="font-serif text-[72px] leading-[0.88] tracking-tight sm:text-[88px] lg:text-[100px]">
                PORT
                <br />
                FOLIO
              </h1>

              <p className="mt-5 max-w-[280px] text-base leading-8 text-black/65">
                Creative work by Gowtham — branding, posters, photography,
                layouts, and visual storytelling.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center bg-black px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white focus:outline-none focus:ring-2 focus:ring-black"
                >
                  View Portfolio
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border border-black px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Contact Me
                </a>
              </div>

              <section id="about" className="mt-12 border-t border-black/10 pt-8">
                <h2 className="mb-5 font-serif text-4xl italic">About</h2>

                <div className="space-y-4">
                  <InfoRow label="Name" value="Gowtham" />
                  <InfoRow
                    label="Email"
                    value="gowthamdandu999@gmail.com"
                    href="mailto:gowthamdandu999@gmail.com"
                  />
                  <InfoRow
                    label="Phone"
                    value="+91 7569562981"
                    href="tel:+917569562981"
                  />
                  <InfoRow
                    label="Focus"
                    value="Graphic Design & Digital Media"
                  />
                </div>

                <p className="mt-8 max-w-[330px] text-sm leading-7 text-black/65">
                  I create visual work across branding, posters, photography,
                  and digital media with a clean, modern, and story-driven
                  approach.
                </p>
              </section>
            </div>
          </aside>

          <section id="portfolio" className="min-w-0">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-black/45">
                  Portfolio Collection
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl">
                  Selected Creative Projects
                </h2>
              </div>

              <a
                href="#contact"
                className="hidden border border-black px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black md:inline-flex"
              >
                Let’s Work
              </a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-[18px] border border-black/10 bg-[#fbfaf7] p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-5 h-[220px] overflow-hidden rounded-[14px] border border-black/10 bg-[#f3f1eb]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-center">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
                            Image Placeholder
                          </p>
                          <p className="mt-2 text-sm text-black/50">
                            Add your image link in the project data
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d26d6d]">
                    {project.category}
                  </p>

                  <h3 className="font-serif text-[28px] leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-black/65">
                    {project.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    View Project
                    <span aria-hidden="true">+</span>
                  </button>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section
          id="contact"
          className="mt-20 border-t border-black/10 pt-12 lg:mt-24 lg:pt-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-black/45">
                Contact
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Let’s build something strong.
              </h2>
              <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-black/65">
                Available for posters, branding work, social media creatives,
                visual concepts, and design collaborations.
              </p>
            </div>

            <div className="rounded-[18px] border border-black/10 bg-[#fbfaf7] p-8">
              <div className="space-y-5">
                <InfoRow
                  label="Email"
                  value="gowthamdandu999@gmail.com"
                  href="mailto:gowthamdandu999@gmail.com"
                />
                <InfoRow
                  label="Phone"
                  value="+91 7569562981"
                  href="tel:+917569562981"
                />
                <InfoRow label="Location" value="India" />
                <InfoRow
                  label="Role"
                  value="Graphic Designer / Digital Media Student"
                />
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:gowthamdandu999@gmail.com"
                  className="inline-flex items-center justify-center bg-black px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Email Me
                </a>

                <a
                  href="#home"
                  className="inline-flex items-center justify-center border border-black px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Back To Top
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-6 py-6 lg:px-16">
        <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
          © {new Date().getFullYear()} Gowtham
        </p>
      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[22px] bg-[#fbfaf7] p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedProjectId(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              ×
            </button>

            <div className="pr-10">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d26d6d]">
                {selectedProject.category}
              </p>

              <h3 className="font-serif text-4xl leading-tight sm:text-5xl">
                {selectedProject.title}
              </h3>
            </div>

            <div className="mt-8 h-[260px] overflow-hidden rounded-[18px] border border-black/10 bg-[#f1efe8]">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
                      Project Image Area
                    </p>
                    <p className="mt-2 text-sm text-black/50">
                      Add your image link in the project data
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[150px_1fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
                  Project Type
                </p>
                <p className="mt-3 text-base text-black/75">
                  {selectedProject.category}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
                  Description
                </p>
                <p className="mt-3 text-[15px] leading-8 text-black/70">
                  {selectedProject.fullDescription}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setSelectedProjectId(null)}
                className="inline-flex items-center justify-center bg-black px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                Close
              </button>

              <a
                href="#contact"
                onClick={() => setSelectedProjectId(null)}
                className="inline-flex items-center justify-center border border-black px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
  href?: string;
};

function InfoRow({ label, value, href }: InfoRowProps) {
  return (
    <div className="grid grid-cols-[84px_1fr] items-start gap-4">
      <span className="pt-[2px] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d26d6d]">
        {label}
      </span>

      {href ? (
        <a
          href={href}
          className="break-words text-[16px] leading-7 text-black/75 transition hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
        >
          {value}
        </a>
      ) : (
        <p className="break-words text-[16px] leading-7 text-black/75">
          {value}
        </p>
      )}
    </div>
  );
}