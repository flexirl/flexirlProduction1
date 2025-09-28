import React from "react";
import ArrowRight from "/images/arrowr.svg";
import PNGOfficeImage from "/images/office.svg";
import fridayChristmas1 from "/images/NAMSTE.gif";

export const Hellosection = ({ onOpenCta }) => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: SAY HELLO with gif */}
          <div className="lg:w-1/2 w-full">
            <div
              className="flex items-center flex-wrap lg:flex-nowrap gap-4 cursor-pointer"
              onClick={onOpenCta}
              role="button"
              aria-label="Open contact"
            >
              <h1 className="[font-family:'Inter',Helvetica] font-extralight text-[#183942] text-[72px] sm:text-[96px] md:text-[110px] lg:text-[133px] leading-[1] tracking-[1px]">
                SAY
              </h1>

              {/* small gif inline */}
              <img
                src={fridayChristmas1}
                alt="decorative gif"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-sm"
              />

              <h1 className="[font-family:'Inter',Helvetica] font-extralight text-[#183942] text-[72px] sm:text-[96px] md:text-[110px] lg:text-[133px] leading-[1] tracking-[-6px]">
                HELLO<span className="text-[#ef4b6e]">!</span>
              </h1>
            </div>

            <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-xl">
              We love making things. If you have a project, idea or just want to
              say hi, reach out — we’d love to chat and explore how we can help.
            </p>

            {/* Get in touch button matching original design */}
            <div className="mt-6">
              <button onClick={onOpenCta} className="relative inline-flex items-center px-6 py-3 rounded-full border border-black text-black bg-white hover:bg-black hover:text-white transition-colors duration-200 group">
                <span className="pr-6 font-extralight text-gray-800 group-hover:text-white transition-colors duration-200">Get in touch</span>
                <span className="absolute right-1 flex items-center justify-center w-10 h-10 bg-[#183942] text-white rounded-full">
                  <img src={ArrowRight} alt="arrow" className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          {/* Right: decorative office image (kept) */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <img src={PNGOfficeImage} alt="Office" className="flex-shrink-0 w-full max-w-[420px] lg:max-w-[520px] h-auto object-contain pointer-events-none lg:ml-12 xl:ml-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hellosection;
