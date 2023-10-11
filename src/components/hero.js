export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Crafting Custom Cabinets for Your Dream Home.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Bringing Your Unique Design Concepts to Life with Exquisite,
              Tailor-Made Cabinetry for the Home You have Always Dreamed Of.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://hips.hearstapps.com/hmg-prod/images/kitchen-backsplash-ideas-garrow-tp-gke79-022-1671732871.jpg?crop=1.00xw:0.686xh;0,0.146xh&resize=360:*"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://hips.hearstapps.com/hmg-prod/images/kitchen-lighting-ideas-texture-1663855964.png?crop=1.00xw:0.782xh;0,0&resize=360:*"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://hips.hearstapps.com/hmg-prod/images/hbx120120kyleeshintaffer-009-copy-1605132846-6452d4346a795.jpg?crop=0.750xw:1.00xh;0.241xw,0&resize=360:*"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://hips.hearstapps.com/hmg-prod/images/hbx120121arienebethea-004-large-64b6e9182b41f.jpeg?crop=0.803xw:1.00xh;0.197xw,0&resize=360:*"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://hips.hearstapps.com/hmg-prod/images/modern-kitchen-ideas-design-1664295332.png?crop=0.413xw:0.626xh;0.402xw,0.243xh&resize=360:*"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1360324668/photo/modern-home-kitchen-interior-design-in-white-tones.jpg?s=612x612&w=0&k=20&c=8dxNoeRJoZ1FubtLaR97c-huDK1Qm-4gJcY5sCZq2Uk="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1210163654/photo/beautiful-kitchen-in-new-luxury-home-with-island-pendant-lights-and-hardwood-floors-features.jpg?s=612x612&w=0&k=20&c=z1TqA7zIBIprGe_kJoo_iHVrf-1nppFcmE1x88ns_NU="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#quote"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
