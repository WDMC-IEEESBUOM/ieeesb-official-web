import * as React from "react";
import Image from "next/image";

const EventTimelineSection = () => {
  return (
    <div className="container bg-midnight lg:w-[1360px] lg:h-[1438px] rounded-[40px] block">

      <p className="block text-center text-cyan-400 text-[60px] my-10">EVENTS</p>

      <div className="container flex">
        <div className="mx-auto gap-9 column-3 w-[475px] content-start">

          <div className="w-full rounded-[50px] h-[200px] my-20 bg-white grid justify-items-end">
            <Image className="w-[200px] h-[200px] bg-black rounded-r-[50px]" src="/eventbg.jpg" width={200} height={200} alt="" />
          </div>
          <div className="w-full rounded-[50px] h-[200px] my-20 bg-white"></div>
          <div className="w-full rounded-[50px] h-[200px] my-20 bg-white"></div>

        </div>

        <div className="mx-auto column-1">2</div>

        <div className="mx-auto column-3 w-[475px] content-start ">
          <div className="w-full rounded-[50px] h-[200px] my-20 bg-white"></div>
          <div className="w-full rounded-[50px] h-[200px] my-20 bg-white"></div>
          <div className="w-full rounded-[50px] h-[200px] my-20 bg-white"></div>
        </div>
      </div>
            
    </div>
  );
}


export default EventTimelineSection;