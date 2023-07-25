import React from "react";

const footerLogo = require("../assets/footer-logo.png");

const Footer = () => {
  return (
    <footer className=" mt-[100px]  bg-[#C9C9C9] shadow-inner border-white">
      <div className="container    ">
        <div className="flex justify-center items-center  space-x-32 p-24">
          <div className="flex flex-col space-y-4">
            <p className="text-black text-lg  font-semibold leading-relaxed tracking-widest">
              Products
            </p>
            <p className="opacity-70  text-black text-lg font-normal leading-relaxed tracking-wide">
              Features
            </p>
            <p className="opacity-70 text-black text-lg font-normal leading-relaxed tracking-wide">
              Enterprice
            </p>
            <p className="opacity-70 text-black text-lg font-normal leading-relaxed tracking-wide">
              Innovation
            </p>
            <p className="opacity-70 text-black text-lg font-normal leading-relaxed tracking-wide">
              Offline
            </p>
          </div>
          <div className="flex flex-col space-y-4 mb-[42px]">
            <p className="text-black text-lg  font-semibold leading-relaxed tracking-widest">
              Company
            </p>
            <p className="opacity-70  text-black text-lg font-normal leading-relaxed tracking-wide">
              About
            </p>
            <p className="opacity-70 text-black text-lg font-normal leading-relaxed tracking-wide">
              Our Story
            </p>
            <p className="opacity-70  text-black text-lg font-normal leading-relaxed tracking-wide">
              Careers
            </p>
            
          </div>
          <div className="flex flex-col  space-y-4">
            <p className="text-black text-lg  font-semibold leading-relaxed tracking-widest">
              Support
            </p>
            <p className="opacity-70   text-black text-lg font-normal leading-relaxed tracking-wide">
              Documentation
            </p>
            <p className="opacity-70 text-black text-lg font-normal leading-relaxed tracking-wide">
              Community
            </p>
            <p className="opacity-70 text-black text-lg font-normal leading-relaxed tracking-wide">
              contact
            </p>
            <p className="opacity-70 text-black text-lg font-normal leading-relaxed tracking-wide">
              FAQ
            </p>
          </div>

          <div className="w-0.5 h-[220px] opacity-20 bg-slate-950"></div>

          <div className="flex flex-col space-y-10">
            <img className="w-[202px] h-[40px]" src={footerLogo} alt="" />
            <p className="w-[293px] text-black text-2xl font-semibold leading-[35px]">
              Tristique senectus et netus et malesuada fames
            </p>
            <p className="opacity-70 text-zinc-900 text-[15px] font-light leading-relaxed">
              ©2023 Logoipsum. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
