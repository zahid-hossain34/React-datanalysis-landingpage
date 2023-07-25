import React from "react";
const linearChart = require("../assets/line-chart.png");
const facebookChartData = require("../assets/facebook-data-chart.png");
const dataChart = require("../assets/data-chart-2.png");
const firstTouchImg = require("../assets/first-touch.png");
const lastTouchImg = require("../assets/last-touch.png");

const ChartAnalysis = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex justify-center items-center flex-col gap-4">
          <p className=" w-[871px] text-center text-zinc-900 text-[51px] font-medium leading-[64.77px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <p className=" w-[815px] opacity-70 text-center text-zinc-900 text-2xl font-normal leading-[37.92px] tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
        </div>
        <div className="mt-14">
          <img src={linearChart} alt="linearChart" className="w-full" />
        </div>
        <div className="flex space-x-10  justify-center items-center px-[100px]  mt-[60px]">
          <div className="flex justify-center items-center flex-col gap-2">
            <p className=" text-zinc-900 text-xl font-semibold leading-normal">
              Facebook data
            </p>
            <img src={facebookChartData} alt="" />
          </div>
          <div className="flex justify-center flex-col gap-2 items-center">
            <p className=" text-zinc-900 text-xl font-semibold leading-normal">
              Logoipsum data
            </p>
            <img src={dataChart} alt="" />
          </div>
        </div>
        <div className="mt-[150px] flex  justify-center  space-x-[100px] ">
          <div className="flex flex-col space-y-3">
            <p className=" w-[471.90px] text-zinc-900 text-[51px] font-medium leading-[64.77px]">
              Consectetur adipiscing elit
            </p>
            <p className=" w-[534.19px] opacity-70 text-zinc-900 text-2xl font-normal leading-[37.92px] tracking-wide">
              Convallis a cras semper auctor neque. Fringilla est ullamcorper
              eget nulla facilisi etiam dignissim viverra
            </p>
          </div>
          <div className="flex space-x-12">
            <div className="">
              <div className="column-chart-card flex justify-center items-center">
                <img src={firstTouchImg} alt="" />
              </div>
              <div className=" mt-6 w-[184.99px] h-[46.07px] bg-white rounded-[10px] shadow-custome border border-white border-opacity-20 flex justify-center items-center">
                <p className="w-[161px] h-10 text-green-400 text-[28px] font-medium leading-[44.24px] tracking-wide">
                  First Touch
                </p>
              </div>
            </div>
            <div>
              <div className="column-chart-card flex justify-center items-center">
                <img src={lastTouchImg} alt="" />
              </div>
              <div className=" mt-6 w-[184.99px] h-[46.07px] bg-white rounded-[10px] shadow-custome border border-white border-opacity-20 flex justify-center items-center">
                <p className="w-[161px] h-10 text-amber-300 text-[28px] font-medium leading-[44.24px] tracking-wide">
                  Last Touch
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
               <div className=" w-[190.65px] h-[202px] flex justify-center items-center     bg-white rounded-full shadow-custome border border-white border-opacity-20">
            <p className=" w-[113.48px] h-[102.92px] text-center">
             <span className="text-zinc-900 text-[83px] font-normal leading-[29px]">
              3<br />
             </span>
             <span className="text-zinc-900 text-[26px] font-normal leading-[29px]">
              +Custom ones
             </span>
             </p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartAnalysis;
