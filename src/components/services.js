const features = [
  {
    name: "Cabinet Installation",
    description:
      "Our experienced team ensures flawless cabinet installation, transforming your space with precision and efficiency.",
  },
  {
    name: "Custom Cabinet Crafting",
    description:
      "Elevate your interior with bespoke cabinets tailored to your style and needs, handcrafted with attention to detail.",
  },
  {
    name: "Cabinet Painting",
    description:
      "Renew the look of your cabinets with our professional painting service, delivering a fresh and vibrant finish.",
  },
  {
    name: "Cabinet Issue Repairs",
    description:
      "From minor fixes to complex issues, our experts provide reliable solutions to restore the functionality and appearance of your cabinets.",
  },
];

export default function services() {
  return (
    <div id="services" className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-gray-500">
            your one-stop destination for all things cabinets. From installation
            and custom cabinet crafting to painting and expert cabinet repairs,
            we have got your needs covered. With a focus on craftsmanship and
            customer satisfaction, we are here to turn your cabinet dreams into
            reality.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://media.istockphoto.com/id/1093238052/photo/man-installing-kitchen-cabinets-door.jpg?s=612x612&w=0&k=20&c=IdFFlvoYRv-zYk12TkyF1ItSEAYU83BqhhP5HEVbU54="
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://media.istockphoto.com/id/1181267542/photo/fitting-a-kitchen.jpg?s=612x612&w=0&k=20&c=QJykjhTNrG_UV5es25ggvzDrTLEk54qZDtiq11IDwKs="
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://media.istockphoto.com/id/1147351892/photo/custom-projects-with-artistic-design-oriented-value-portrait-of-caucasian-worker-holding-a.jpg?s=612x612&w=0&k=20&c=n6L3ID6eUW5ebmwhFYveiVe5Oij4d0rNm-KoJ_NTNOc="
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://media.istockphoto.com/id/1126079391/photo/painting-cabinets-with-spray-gun-painting-chamber-spray-gun-furniture-manufacture.jpg?s=612x612&w=0&k=20&c=oruFtcspKVxTI35KWofL2NeWPbZG1b1XFDXHeveW4aA="
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
