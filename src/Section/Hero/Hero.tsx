const Hero = () => {
  return (
    <div className="relative w-full sm:h-[700px] md:h-[800px] lg:h-[700px]">
      <img
        src="/img/hero-bg.png"
        alt="Banner"
        className="object-cover aspect-auto w-full h-full "
      />

      <div className="absolute bottom-[14%] right-[10%] max-w-[500px] min-h-[400px] p-6 bg-[#FFF3E3]  rounded-lg shadow">
        <div className="pt-8">
          <span className="text-black tracking-widest text-sm ">
            New Arrival
          </span>
          <h1 className=" my-2 text-5xl break-all font-semibold text-[#B88E2F] tracking-tight">
            Discover Our New Collection
          </h1>
          <p className="mt-4 mb-10 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>

          <button
            className="inline-flex
py-[20px] px-[50px]  flex-start gap-3 bg-[#B88E2F] text-white "
          >
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
