import React from "react";

function Table({ socialtableImgSrc, children }) {
  const imgSrc = socialtableImgSrc;

  return (
    <section className="mt-[100px]">
      <div className="container flex flex-col justify-center items-center gap-10">
        <div>{children}</div>
        <div className="w-[1590px] overflow-x-hidden h-[497px]  ">
          <img className="w-full h-full" src={imgSrc} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Table;
