import * as React from "react";
import Image from "next/image";

const EventTimelineSection = () => {
  return (
    <div className="container rounded-[20px] w-[375px] h-[100%] block bg-midnight lg:w-[95%] lg:h-[100%] lg:rounded-[40px]">

      <p className="block text-[30px] my-5 text-center text-cyan-400 sm:text-[60px] sm:my-10">EVENTS</p>

      <div className="container block sm:flex ">
        <div className="mx-auto gap-9 content-start column-3 w-[90%] sm:w-[475px] sm:h-[100%] ">

          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] sm:rounded-[50px] sm:h-[200px] sm:mb-[200px]">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraForesight 1.0</p>
              <p className="text-md">2023</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] sm:rounded-r-[50px] sm:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
          </div>
          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] sm:rounded-[50px] sm:h-[200px] sm:my-[200px]">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraForesight 1.0</p>
              <p className="text-md">2023</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] sm:rounded-r-[50px] sm:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
          </div>
          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] sm:rounded-[50px] sm:h-[200px] sm:my-[200px]">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraForesight 1.0</p>
              <p className="text-md">2023</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] sm:rounded-r-[50px] sm:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
          </div>

        </div>

        <div className="sm:flex">
          <div className="sm:mx-auto sm:rounded-[50px] sm:column-1 sm:w-2 sm:h-[1350px] sm:bg-cyan-lite"></div>
          
          <div className="sm:grid sm:grid-rows-6 gap-0">
            <div className="sm:-ml-6 sm:z-20 sm:mt-[120px] sm:rounded-full sm:h-10 sm:w-10 sm:flex sm:items-center sm:bg-cyan-lite"></div>
            <div className="sm:-ml-6 sm:z-20 sm:mt-[90px] sm:rounded-full sm:h-10 sm:w-10 sm:flex sm:items-center sm:bg-cyan-lite"></div> 
            <div className="sm:-ml-6 sm:z-20 sm:mt-[50px] sm:rounded-full sm:h-10 sm:w-10 sm:flex sm:items-center sm:bg-cyan-lite"></div> 
            <div className="sm:-ml-6 sm:z-20 sm:mt-[20px] sm:rounded-full sm:h-10 sm:w-10 sm:flex sm:items-center sm:bg-cyan-lite"></div> 
            <div className="sm:-ml-6 sm:z-20 sm:-mt-[35px] sm:rounded-full sm:h-10 sm:w-10 sm:flex sm:items-center sm:bg-cyan-lite"></div> 
            <div className="sm:-ml-6 sm:z-20 sm:-mt-[65px] sm:rounded-full sm:h-10 sm:w-10 sm:flex sm:items-center sm:bg-cyan-lite"></div>  
          </div>
        </div>
        

        <div className="mx-auto gap-9 content-start column-3 w-[90%] sm:w-[475px] sm:h-[100%] pt-[40px]">
          <div className="w-full h-[150px]  bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] sm:rounded-[50px] sm:h-[200px] sm:my-[200px]">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">MoraForesight 1.0</p>
                <p className="text-md">2023</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] sm:rounded-r-[50px] sm:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
            </div>

            <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] sm:rounded-[50px] sm:h-[200px] sm:my-[200px]">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">MoraForesight 1.0</p>
                <p className="text-md">2023</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] sm:rounded-r-[50px] sm:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
            </div>

            <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] sm:rounded-[50px] sm:h-[200px] sm:my-[200px]">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">MoraForesight 1.0</p>
                <p className="text-md">2023</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] sm:rounded-r-[50px] sm:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
            </div>
        </div>
      </div>
      
    </div>
  );
}


export default EventTimelineSection;