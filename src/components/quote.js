import { ArrowPathIcon, BanknotesIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, PhoneIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: "Get Your Free Quote Today",
    description:
      "Unlock your dreams with a simple call: Get your free quote today!",
    icon: BanknotesIcon,
  },
  {
    name: "Give Us a Call",
    description:
      "999-999-9999",
    icon: PhoneIcon,
  },
]

export default function quote() {
  return (
    <div id="quote" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Unlock Your Dream Home Today</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know to have your dream home
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Your home is more than just a place to live; it is where your dreams and aspirations come to life. At PS Cabinet Design, we are here to guide you through every step of the journey, ensuring that your dream home becomes a reality.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
