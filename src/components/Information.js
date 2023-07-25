import React from "react";
import Buttons from "./Buttons";
const pieChartICon = require("../assets/icons/pie-icon.png");
const lineChartIcon = require("../assets/icons/line-icon.png");
const columnChartIcon = require("../assets/icons/column-icon.png");
const correctCircle = require("../assets/icons/correct-circle.png");
const dataChart = require("../assets/data-chart.png");
const primaryButton = {
  backgroundColor: "#58BF73",
  borderRadius: "10px",
  color: "#fff",
  width: "175px",
  height: "52px",
};
const Information = (props) => {
  return (
    <section className="mt-[100px]">
      <div className="container ">
        <div className="flex space-x-6  justify-center items-center px-[100px] ">
          <div className="information-card  justify-center  flex flex-col px-[40px] ">
            <div className="w-[76px] h-[63px]">
              <img className="w-full h-full " src={pieChartICon} alt="" />
            </div>
            <p className=" mt-[60px] w-[325px] h-[59px] text-black text-[22px] font-semibold leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="mt-10 w-[325px] h-[109px] opacity-70 text-neutral-950 text-opacity-90 text-lg font-normal leading-7">
              Convallis a cras semper auctor neque. Fringilla est ullamcorper
              eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut
              labore
            </p>
          </div>
          <div className="information-card-2  justify-center  flex flex-col px-[40px] ">
            <div className="w-[76px] h-[63px]">
              <img className="w-full h-full " src={columnChartIcon} alt="" />
            </div>
            <p className=" mt-[60px] w-[325px] h-[59px] text-black text-[22px] font-semibold leading-loose">
              Sed do eiusmod tempor incididunt ut labore{" "}
            </p>
            <p className="mt-10 w-[325px] h-[109px] opacity-70 text-neutral-950 text-opacity-90 text-lg font-normal leading-7">
              Convallis a cras semper auctor neque. Fringilla est ullamcorper
              eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut
              labore
            </p>
          </div>
          <div className="information-card  justify-center  flex flex-col px-[40px] ">
            <div className="w-[76px] h-[63px]">
              <img className="w-full h-full " src={lineChartIcon} alt="" />
            </div>
            <p className=" mt-[60px] w-[325px] h-[59px] text-black text-[22px] font-semibold leading-loose">
              Quis autem vel eum iure reprehenderit qui in ea voluptate
            </p>
            <p className="mt-10 w-[325px] h-[109px] opacity-70 text-neutral-950 text-opacity-90 text-lg font-normal leading-7">
              Convallis a cras semper auctor neque. Fringilla est ullamcorper
              eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut
              labore
            </p>
          </div>
        </div>
        <div className="w-full mt-[150px] flex  space-x-4 ">
          <div className="flex flex-col">
            <p className="w-[591px] text-zinc-900 text-[51px] font-medium leading-[64.77px]">
              Nemo enim ipsam quia{" "}
            </p>
            <p className=" mt-4 w-[757px] opacity-70 text-zinc-900 text-2xl font-normal leading-[37.92px] tracking-wide">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed qu nemo enim
            </p>
            <div className="flex flex-col gap-4 mt-20">
              <div className="card space-x-3">
                <img src={correctCircle} alt="" />
                <p className="RefundPolicy w-[274px] text-gray-900 text-[22px] font-medium">
                  Sed ut perspiciatis unde
                </p>
              </div>
              <div className="card space-x-3">
                <img src={correctCircle} alt="" />
                <p className="RefundPolicy w-[274px] text-gray-900 text-[22px] font-medium">
                  Omnis iste natus
                </p>
              </div>
              <div className="card space-x-3">
                <img src={correctCircle} alt="" />
                <p className="RefundPolicy w-[274px] text-gray-900 text-[22px] font-medium">
                  Error sit voluptatem
                </p>
              </div>
              <div className="card space-x-3">
                <img src={correctCircle} alt="" />
                <p className="RefundPolicy w-[274px] text-gray-900 text-[22px] font-medium">
                  Accusantium doloremque
                </p>
              </div>
            </div>
            <div className="mt-[40px]">
              <Buttons style={primaryButton} text="Try out now!" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={dataChart} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
