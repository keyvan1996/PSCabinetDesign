/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from "next/image";
const callouts = [
  {
    name: "Cabinet",
    description: "Smooth Cabinet",
    imageSrc:
      "https://media.istockphoto.com/id/1134845692/photo/kitchen-cabinets.jpg?s=612x612&w=0&k=20&c=aim5Za8na2wKnw4selFNIeuwN643TqDX-mvN4IBhf38=",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Full Kitchen",
    description: "Tailor-Made Cabinetry",
    imageSrc:
      "https://media.istockphoto.com/id/1124517056/photo/modern-kitchen-design-with-open-concept-and-bar-counter.jpg?s=612x612&w=0&k=20&c=-0RbUatuNDF71I-97EfPrZvzjT0XrO8NB3t5lWYrqyI=",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Kitchen",
    description: "Dreamy Kitchen",
    imageSrc:
      "https://media.istockphoto.com/id/1267060023/photo/modern-scandinavian-kitchen-and-dining-room-with-matte-black-traditional-cabinet-design.jpg?s=612x612&w=0&k=20&c=TGM6OJ2S8LFoH9oLhBXJAGzEKVSQedSW2LmwS2fLAgk=",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Lounge",
    description: "Airport Lounge, Downtown ATL",
    imageSrc:
      "https://media.istockphoto.com/id/157509130/photo/building-lobby.jpg?s=612x612&w=0&k=20&c=p4OgjyXUsVjKM2_7T3laVYmEF_kE19O3YPeC-myKPVI=",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Office",
    description: "Comfortable Office Space",
    imageSrc:
      "https://media.istockphoto.com/id/1290846069/photo/eco-friendly-modern-office-interior-with-brick-wall-waiting-area-and-indoor-plants.jpg?s=612x612&w=0&k=20&c=dHN0QY5xQxEktImdQVsz2H_ZcpCZtRi76781cM6kE44=",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Hotel",
    description: "Lobby of Hotel, Downtown ATL",
    imageSrc:
      "https://media.istockphoto.com/id/908258590/photo/3d-render-of-hotel-entrance-and-reception.jpg?s=612x612&w=0&k=20&c=E-NcryVNcGq-1uYsIkfTPNGxEgvzW5LBqd0daffLbZQ=",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function tiles() {
  return (
    <div id="projects" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:max-w-none lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    height={500}
                    width={500}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
