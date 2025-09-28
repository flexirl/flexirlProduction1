import React, { useState } from "react";
import JamFacebook from "/images/jam_facebook.svg";

import line from "/images/Line.svg";
import vector from "/images/arrows.svg";

import Instagram from "/images/gram.svg";

export const Formslide = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleClose = () => {
    console.log("Close button clicked");
  };

  const contactInfo = [
    { text: "+91-8002315259", top: "726px", left: "227px" },
    { text: "info@flexirl.com", top: "746px", left: "236px" },
    { text: "Bhubaneswar,Odisha", top: "781px", left: "208px" },
  ];

  return (
    <div className="relative w-[393px] h-[852px] bg-[#183942]">
      <header>
        <h1 className="absolute top-[113px] left-10 w-[186px] [font-family:'Syne',Helvetica] font-bold text-white text-5xl tracking-[1.92px] leading-[49.0px]">
          To Say <br />
          hello
        </h1>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="relative">
          <div className="absolute top-[271px] left-[41px]">
            <label
              htmlFor="name"
              className="block [font-family:'Syne-Regular',Helvetica] font-normal text-[#ffffff85] text-[14.5px] tracking-[1.74px] leading-[14.8px] whitespace-nowrap mb-2"
            >
              Say hello
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-[304px] bg-transparent text-white text-[14.5px] pb-2 focus:outline-none"
              aria-label="Your name"
            />
            <img
              className="w-[304px] h-px object-cover"
              alt=""
              src={line}
              role="presentation"
            />
          </div>

          <div className="absolute top-[319px] left-[41px]">
            <label
              htmlFor="email"
              className="block [font-family:'Syne-Regular',Helvetica] font-normal text-[#ffffff85] text-[14.5px] tracking-[1.74px] leading-[14.8px] whitespace-nowrap mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-[304px] bg-transparent text-white text-[14.5px] pb-2 focus:outline-none"
              aria-label="Your email address"
              required
            />
            <img
              className="w-[304px] h-px object-cover"
              alt=""
              src={line}
              role="presentation"
            />
          </div>

          <div className="absolute top-[367px] left-[41px]">
            <label
              htmlFor="message"
              className="block [font-family:'Syne-Regular',Helvetica] font-normal text-[#ffffff85] text-[14.5px] tracking-[1.74px] leading-[14.8px] whitespace-nowrap mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-[304px] bg-transparent text-white text-[14.5px] resize-none focus:outline-none"
              rows="6"
              aria-label="Your message"
            />
            <div className="space-y-[42px]">
              <img
                className="w-[304px] h-px object-cover"
                alt=""
                src={line}
                role="presentation"
              />
              <img
                className="w-[304px] h-px object-cover"
                alt=""
                src={line}
                role="presentation"
              />
              <img
                className="w-[304px] h-px object-cover"
                alt=""
                src={line}
                role="presentation"
              />
              <img
                className="w-[304px] h-px object-cover"
                alt=""
                src={line}
                role="presentation"
              />
            </div>
          </div>

          <button
            type="submit"
            className="absolute top-[537px] left-[41px] w-[304px] h-[34px] bg-white hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#183942]"
            aria-label="Send message"
          >
            <span className="absolute top-[12px] left-[12px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#1c2042] text-[9px] tracking-[1.26px] leading-[9.2px] whitespace-nowrap">
              SEND
            </span>
            <img
              className="absolute top-[14px] right-[27px] w-4 h-3"
              alt=""
              src={vector}
              role="presentation"
            />
          </button>
        </form>
      </main>

      <footer className="absolute bottom-0 left-0 right-0">
        <address className="not-italic">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="absolute [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#ffffff85] text-[12.5px] tracking-[-0.50px] leading-[12.7px] whitespace-nowrap"
              style={{ top: info.top, left: info.left }}
            >
              {index === 0 ? (
                <a href={`tel:${info.text}`} className="hover:underline">{info.text}</a>
              ) : index === 1 ? (
                <a href={`mailto:${info.text}`} className="hover:underline">{info.text}</a>
              ) : (
                info.text
              )}
            </div>
          ))}
        </address>
        <div className="absolute top-[768px] left-[39px] flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img
              className="w-6 h-6 aspect-[1]"
              alt="Facebook"
              src={JamFacebook}
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              className="w-[22px] h-[22px] aspect-[1]"
              alt="Instagram"
              src={Instagram}
            />
          </a>
        </div>
      </footer>

      <button
        onClick={handleClose}
        className="absolute top-[-18px] left-[268px] w-[123px] h-[121px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#183942]"
        aria-label="Close"
      >
        <div className="absolute top-0 left-0 w-[121px] h-[121px] bg-[#ef4b6e] rounded-[60.5px] hover:bg-[#e63d5f] transition-colors duration-200" />
        <span className="absolute top-[55px] left-[42px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-sm tracking-[0.14px] leading-[14.3px] whitespace-nowrap">
          Close
        </span>
      </button>
    </div>
  );
};

export default Formslide;
