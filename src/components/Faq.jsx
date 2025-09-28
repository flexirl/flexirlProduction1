import Button from "./ui/Button";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 0,
      question: "How fast is same-day delivery?",
      answer:
        "Same-day delivery typically takes 4-8 hours depending on your location and order time.",
    },
    {
      id: 1,
      question: "Is it expensive to offer same-day delivery?",
      answer:
        "Our same-day delivery rates are competitive and vary based on distance and package size.",
    },
    {
      id: 2,
      question: "Where are these fulfilment centers located?",
      answer:
        "We have fulfillment centers strategically located in major cities across the country.",
    },
    {
      id: 3,
      question: "How will customers be able to choose this delivery option?",
      answer:
        "Customers can select same-day delivery during checkout if available in their area.",
    },
    {
      id: 4,
      question: "How can I get Localli?",
      answer:
        "You can sign up for Localli through our website or mobile app to get started.",
    },
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="w-full py-6 sm:py-10 md:py-12 lg:py-0 ml-[10px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-auto">
          {/* Main FAQ container */}
          <div className="flex justify-start items-center w-full px-4 sm:px-8 md:px-12 lg:px-[56px] mr-[26px]">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[94%] bg-[#d8f6ff] rounded-[12px] sm:rounded-[30px] md:rounded-[44px] lg:rounded-[70px] p-4 sm:p-6 md:p-8 lg:px-[56px] lg:py-[52px]">
              <div className="flex flex-col lg:flex-row justify-start items-start w-full mb-[12px]">
                {/* Left side - FAQ title and description */}
                <div className="flex flex-col justify-start items-start w-full lg:w-[36%] mb-8 lg:mb-0">
                  <h2 className="text-[35px] sm:text-[50px] md:text-[60px] lg:text-[69px] font-bold leading-[42px] sm:leading-[60px] md:leading-[73px] lg:leading-[83px] text-left text-black font-syne">
                    Faqs
                  </h2>
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[19px] sm:leading-[21px] md:leading-[23px] text-left text-[#939393] font-syne w-full lg:w-[66%] mt-[10px]">
                    Discover answers to the most commonly asked questions about
                    us
                  </p>
                </div>

                {/* Right side - FAQ list */}
                <div className="flex flex-col justify-start items-center self-end w-full lg:w-[64%] mt-[12px] mr-[8px]">
                  <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full p-2 sm:p-4">
                    {faqs?.map((faq) => (
                      <div key={faq?.id} className="w-full">
                        <button
                          onClick={() => toggleFAQ(faq?.id)}
                          className={`flex justify-between items-center w-full text-left p-3 ${
                            expandedFAQ === faq?.id ? "bg-white" : "bg-transparent"
                          } border-b border-gray-300`}
                          aria-expanded={expandedFAQ === faq?.id}
                        >
                          <span className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-black font-roboto flex-1 text-left">
                            {faq?.question}
                          </span>
                          <FiChevronDown
                            className={`w-6 h-6 text-black transition-transform duration-200 ${
                              expandedFAQ === faq?.id ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {expandedFAQ === faq?.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.36, ease: 'easeOut' }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div className="mt-2 p-3 sm:p-4 bg-white">
                                <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-gray-700">
                                  {faq?.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* Bottom separator line */}
                  <div className="w-full h-[1px] bg-black mt-[6px]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Services ticker */}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
