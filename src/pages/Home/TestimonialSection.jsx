import React from "react";
import { InfiniteMovingCards } from "../../components/ui/InfiniteMovingCards";
import quoteicon from "/images/coma.svg";

const testimonials = [
  {
    rating: 5,
    text: "I found the copywriting tool to be incredibly helpful in streamlining my writing process.",
    name: "Mikaily Garayev",
    role: "Product Designer",
    avatar: "/images/img_ellipse_827.png",
    bgColor: "#efefef",
    textColor: "#4b4f47",
  },
  {
    rating: 2,
    text: "The copywriting tool saved me time and helped me come up with more compelling copy.",
    name: "Mikaily Garayev",
    role: "Product Designer",
    avatar: "/images/img_ellipse_827_44x44.png",
    bgColor: "#183942",
    textColor: "#ffffff",
  },
  {
    rating: 5,
    text: "Using the copywriting AI tool helped me improve my writing skills with great suggestions.",
    name: "Mikaily Garayev",
    role: "UX Designer",
    avatar: "/images/img_ellipse_827_1.png",
    bgColor: "#efefef",
    textColor: "#4b4f47",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-white dark:bg-black relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center mb-12">
          <h2 className="text-[28px] sm:text-[38px] md:text-[48px] font-normal text-center text-black dark:text-white font-syne">
            Hear it From Our Clients
          </h2>
          <div className="flex justify-center items-center w-full mt-4">
            <img src={quoteicon} alt="Quote" className="w-20 h-20 opacity-70" />
            <img
              src={quoteicon}
              alt="Quote"
              className="w-20 h-20 -ml-10 opacity-70"
            />
          </div>
        </div>

        {/* Infinite moving testimonials */}
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="medium"
          className="mt-8"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
