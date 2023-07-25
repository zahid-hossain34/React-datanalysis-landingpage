import React from "react";
import Buttons from "./Buttons";
import SocialMedia from "./SocialMedia";
const facebook = require("../assets/facebook.png");
const twitter = require("../assets/twitter.png");
const drive = require("../assets/drive.png");
const pintrest = require("../assets/pinterest.png");
const snapchat = require("../assets/snapchat.png");
const shopify = require("../assets/shopify.png");
const tiktok = require("../assets/tiktok.png");
const avatar = require("../assets/social-avatar.png");
const discord = require("../assets/discord.png");
const primaryButton = {
  backgroundColor: "#58BF73",
  borderRadius: "10px",
  color: "#fff",
  width: "175px",
  height: "52px",
};

const Social = () => {
  return (
    <section className="mt-[100px]">
      <div className="container flex space-x-[100px] ">
        <div className="flex flex-col gap-8 pt-[140px]">
          <p className="w-[791px]">
            <span className="text-zinc-900 text-[51px] font-medium leading-[64.77px]">
              Sed ut perspiciatis unde omnis iste natus error.{" "}
            </span>
            <span className="text-zinc-900 text-[51px] font-black leading-[64.77px]">
              Try out!
            </span>
          </p>
          <p className="w-[757px] opacity-70 text-zinc-900 text-2xl font-normal leading-[37.92px] tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore ullamco esse cillium
          </p>
          <Buttons style={primaryButton} text="Try Out Now!" />
        </div>
        <div className=" flex space-x-14 ">
          <div className="flex flex-col gap-10">
            <SocialMedia
              style={{ width: "72px", height: "72px" }}
              imageSrc={drive}
            />
            <SocialMedia
              style={{ width: "34px", height: "72px" }}
              imageSrc={facebook}
            />
            <SocialMedia
              style={{ width: "63px", height: "63px" }}
              imageSrc={shopify}
            />
          </div>
          <div className="flex flex-col gap-10 pt-[120px]">
            <SocialMedia
              style={{ width: "66px", height: "66px" }}
              imageSrc={tiktok}
            />
            <SocialMedia
              style={{ width: "67px", height: "67px" }}
              imageSrc={pintrest}
            >
              <p className="text-black text-sm font-normal leading-[17.78px]">Commin sonn</p>
            </SocialMedia>
            <SocialMedia
              style={{ width: "76px", height: "76px" }}
              imageSrc={twitter}
            >
               <p className="text-black text-sm font-normal leading-[17.78px]">Commin sonn</p>
            </SocialMedia>
          </div>
          <div className=" flex flex-col gap-10">
            <SocialMedia
              style={{ width: "92px", height: "92px" }}
              imageSrc={snapchat}
            > <p className="text-black text-sm font-normal leading-[17.78px]">Commin sonn</p></SocialMedia>
            <SocialMedia
              style={{ width: "67px", height: "52px" }}
              imageSrc={discord}
            > <p className="text-black text-sm font-normal leading-[17.78px]">Commin sonn</p></SocialMedia>
            <SocialMedia
              style={{ width: "68px", height: "68px" }}
              imageSrc={avatar}
            > <p className="text-black text-sm font-normal leading-[17.78px]">Commin sonn</p></SocialMedia>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
