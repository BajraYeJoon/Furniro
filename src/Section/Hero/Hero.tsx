/**
 * Renders a hero section on a webpage.
 * The hero section includes an image, a title, a description, and a button.
 */
const Hero = () => {
  return (
    <div className="relative w-full sm:h-[700px] md:h-[800px] lg:h-[700px]">
      <img
        src="/img/hero-bg.png"
        alt="Banner"
        className="object-cover aspect-auto w-full h-full"
      />

      <div className="absolute bottom-[14%] right-[3%] w-[643px] min-h-[443px] p-6 bg-[#FFF3E3] rounded-lg shadow">
        <div className="pt-8">
          <span className="text-gray-500 font-bold tracking-widest text-sm">
            New Arrival
          </span>
          <h1 className="my-2 text-5xl break-words leading-snug font-semibold text-[#B88E2F] tracking-tight">
            Discover Our <br />
            New Collection
          </h1>
          <p className="mt-4 mb-10 font-medium text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>

          <button className="inline-flex py-[20px] px-[50px] flex-start gap-3 bg-[#B88E2F] text-white">
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
