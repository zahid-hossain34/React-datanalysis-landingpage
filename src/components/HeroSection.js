import React from "react";
import heroImg from "../assets/hero-img.png";
import Buttons from "./Buttons";
const  iconPlay = require("../assets/play-icon.png")
const primaryButton = {
  backgroundColor: "#58BF73",
  borderRadius: "10px",
  color: "#fff",
  width: "238px",
  height: "52px",
};

const secondaryButton = {
  backgroundColor: "white",
  borderRadius: "10px",
  color: "#181F1B",
  width: "238px",
  height: "52px",
  border: "0.50px #181F1B solid",
};

function HeroSection() {
  return (
    <section>
      <div className="container flex relative h-[1046px] ">
        <div className="flex flex-col gap-10 pt-[140px]">
          <p className="LoreIpsumDolorSit w-[701px] h-[259px]">
            <span className="text-zinc-900 text-[126px] font-normal leading-[143.88px]">
              Lore
            </span>
            <span className="text-zinc-900 text-[126px] font-semibold leading-[143.88px]">
              {" "}
            </span>
            <span className="text-zinc-900 text-[126px] font-extrabold leading-[143.88px]">
              ipsum.{" "}
            </span>
            <span className="text-zinc-900 text-[126px] font-normal leading-[143.88px]">
              Dolor
            </span>
            <span className="text-zinc-900 text-[126px] font-semibold leading-[143.88px]">
              {" "}
              sit
            </span>
            <span className="text-zinc-900 text-[126px] font-extrabold leading-[143.88px]">
              .
            </span>
          </p>
          <p className="w-[658px]  h-[103px] opacity-70 text-zinc-900 text-2xl font-normal leading-[37.92px] tracking-wide">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde
            omnis iste natus error.
          </p>
          <div className="flex space-x-4 ">
            <Buttons text="Viverra orci sagittis" style={secondaryButton} />
           
               
              <Buttons text="Get a demo"  style={primaryButton}>
              <img className="mr-3" src={iconPlay} alt="" />
              </Buttons>
            
          </div>
        </div>
        <div className="w-[974px] h-full absolute top-0 right-[-215px]">
          <img className="w-full h-full  " src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
