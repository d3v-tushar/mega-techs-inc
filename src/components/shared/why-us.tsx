import Image from "next/image";

const features = [
  "Interview preparation",
  "Resume Preparation",
  "100% Job Placement",
  "Job Support",
  "Unlimited Class",
  "One on one Mentoriing Session",
  "Trainers are from CSE background",
  "Lots of Mock Interview",
  "Onsite and Online class",
  "Provide Excellent study materials",
];

const WhyUs = () => {
  return (
    <section className="w-full max-w-[1440px] py-10 sm:px-6 lg:py-14 mx-auto space-y-2.5">
      <div className="flex flex-col gap-y-2 py-2.5 px-5 lg:px-2 lg:py-2.5 border-b">
        <h2 className="text-2xl font-bold uppercase text-blue-900">Why Us?</h2>
        <h3 className="text-base lg:text-lg capitalize font-medium">
          MegaTechs doesn&apos;t just teach, we also help you find great jobs
          and give you advice on your career
        </h3>
      </div>
      <div className="relative p-6 md:p-8">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl">
              We&apos;ll help you transform your career and be a leader in the
              tech world
            </h2>

            <div className="grid gap-4 mt-5">
              <ul className="flex flex-col gap-y-1.5 font-medium">
                {features.map((feature: string, featIndex: number) => (
                  <li key={featIndex} className="text-lg capitalize">
                    {`${featIndex + 1}. ${feature}`}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                <div
                  id="tabs-with-card-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <Image
                    width={400}
                    height={400}
                    className="rounded-xl w-full h-full"
                    src="https://utfs.io/f/e6af5f7e-55ac-4be8-b971-027ffae9f497-d1d4ln.svg"
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <Image
                    width={800}
                    height={800}
                    className="rounded-xl w-full h-full"
                    src="https://utfs.io/f/e6af5f7e-55ac-4be8-b971-027ffae9f497-d1d4ln.svg"
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <Image
                    width={400}
                    height={400}
                    className="rounded-xl w-full h-full"
                    src="https://utfs.io/f/e6af5f7e-55ac-4be8-b971-027ffae9f497-d1d4ln.svg"
                    alt="Image Description"
                  />
                </div>
              </div>

              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
