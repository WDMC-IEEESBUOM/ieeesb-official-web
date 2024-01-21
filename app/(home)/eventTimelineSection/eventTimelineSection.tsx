import * as React from "react";
import Image from "next/image";

const EventTimelineSection = () => {
  return (
    <div className="container rounded-[20px] w-[375px] h-[100%] block bg-midnight lg:w-[100%] lg:h-[100%] lg:rounded-[40px]">

      <p className="block text-[30px] my-5 text-center text-cyan-400 lg:text-[60px] lg:my-10">EVENTS</p>

      <div className="container block lg:flex ">
        <div className="mx-auto gap-9 content-start column-3 w-[90%] lg:w-[475px] lg:h-[100%] ">

          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:mb-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraForesight 1.0</p>
              <p className="text-md">2023</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
          </div>
          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraForesight 1.0</p>
              <p className="text-md">2023</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
          </div>
          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraForesight 1.0</p>
              <p className="text-md">2023</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
          </div>

        </div>

        <div className="lg:flex">
          <div className="lg:mx-auto lg:rounded-[50px] lg:column-1 lg:w-2 lg:h-[1350px] lg:bg-cyan-lite"></div>
          
          <div className="lg:grid lg:grid-rows-6 gap-0">
            <div className="lg:-ml-6 lg:z-20 lg:mt-[120px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:items-center lg:bg-cyan-lite"></div>
            <div className="lg:-ml-6 lg:z-20 lg:mt-[90px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:items-center lg:bg-cyan-lite"></div> 
            <div className="lg:-ml-6 lg:z-20 lg:mt-[50px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:items-center lg:bg-cyan-lite"></div> 
            <div className="lg:-ml-6 lg:z-20 lg:mt-[20px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:items-center lg:bg-cyan-lite"></div> 
            <div className="lg:-ml-6 lg:z-20 lg:-mt-[35px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:items-center lg:bg-cyan-lite"></div> 
            <div className="lg:-ml-6 lg:z-20 lg:-mt-[65px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:items-center lg:bg-cyan-lite"></div>  
          </div>
        </div>
        

        <div className="mx-auto gap-9 content-start column-3 w-[90%] lg:w-[475px] lg:h-[100%] pt-[40px]">
          <div className="w-full h-[150px]  bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">MoraForesight 1.0</p>
                <p className="text-md">2023</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
            </div>

            <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">MoraForesight 1.0</p>
                <p className="text-md">2023</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
            </div>

            <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">MoraForesight 1.0</p>
                <p className="text-md">2023</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/eventbg.jpg" width={200} height={200} alt="" /></div>
            </div>
        </div>
      </div>
      
    </div>
  );
}


export default EventTimelineSection;