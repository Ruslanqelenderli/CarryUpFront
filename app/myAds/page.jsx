import Image from "next/image";
import React from "react";

const myAds = () => {
  return (
    <div>
      <div class="relative isolate bg-cyan-400 pb-32 pt-24 sm:pt-32">
        <div
          class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
            // style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          ></div>
        </div>
        <div
          class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            // style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          ></div>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
              history
            </h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We changend history (legends)
            </p>
          </div>
          <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>
                  “Learn from yesterday , live for taday , hop for tomorrow. The
                  important thing is not to stop questioning. ”
                </p>
              </blockquote>
              <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                {/* <img class="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://insidetheperimeter.ca/wp-content/uploads/2015/11/Albert_einstein_by_zuzahin-d5pcbug-WikiCommons.jpg" alt="" /> */}
                <div class="flex-auto">
                  <div class="font-semibold">Albert Einstein</div>
                </div>
              </figcaption>
            </figure>
            <div class="space-y-8 xl:contents xl:space-y-0">
              <div class="space-y-8 xl:row-span-2">
                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  {/* <blockquote class="text-gray-900">
                    <p>
                      “Juventus is against racism and this club has to celebrate
                      whith different religions and other people.”
                    </p>
                  </blockquote> */}
                  {/* <figcaption class="mt-6 flex items-center gap-x-4">
                    <div>
                      <div class="font-semibold">Juventus's old lady</div>
                    </div>
                  </figcaption>
                  */}

                  <Image src="/" />
                </figure>
              </div>
              <div class="space-y-8 xl:row-start-1">
                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote class="text-gray-900">
                    <p>
                      “Everithing on earth is a game. A passing thing. We all
                      end up dead. We all end up the same, don't we ?”
                    </p>
                  </blockquote>
                  <figcaption class="mt-6 flex items-center gap-x-4">
                    {/* <img class="h-10 w-10 rounded-full bg-gray-50" src="data:image/jpeg;base64,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" alt=""> */}
                    <div>
                      <div class="font-semibold">Legend Pele</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="space-y-8 xl:contents xl:space-y-0">
              <div class="space-y-8 xl:row-start-1">
                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote class="text-gray-900">
                    <p>
                      “If there is a book that you want to read but it's not yet
                      out, the you must be the one to write it.”
                    </p>
                  </blockquote>
                  <figcaption class="mt-6 flex items-center gap-x-4">
                    {/* <img class="h-10 w-10 rounded-full bg-gray-50" src="https://hips.hearstapps.com/hmg-prod/images/william-shakespeare-194895-1-402.jpg" alt=""> */}
                    <div>
                      <div class="font-semibold">William Shakespeare</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div class="space-y-8 xl:row-span-2">
                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote class="text-gray-900">
                    <p>
                      “Lots of legends, lots of people have come before me, but
                      this is my time.”
                    </p>
                  </blockquote>
                  <figcaption class="mt-6 flex items-center gap-x-4">
                    {/* <img class="h-10 w-10 rounded-full bg-gray-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OL5Z5J8CdB941RIOAypIxMJHHlbI_cCYIQ&usqp=CAU" alt=""> */}
                    <div>
                      <div class="font-semibold">Usain Bolt</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myAds;
