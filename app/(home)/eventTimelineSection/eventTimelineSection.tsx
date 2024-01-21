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
              <p className="text-lg font-large">IEEE Open Week</p>
              <p className="text-md">January 2024</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/open.png" width={200} height={200} alt="" /></div>
          </div>
          
          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraUXplore 2.0</p>
              <p className="text-md">April 2024</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/uxpl.png" width={200} height={200} alt="" /></div>
          </div>

          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraForesight 2.0</p>
              <p className="text-md">July 2024</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/foresighy.png" width={200} height={200} alt="" /></div>
          </div>

          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">Rise Up Mora 24'</p>
              <p className="text-md">August 2024</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/rum.png" width={200} height={200} alt="" /></div>
          </div>

        </div>

        <div className="lg:flex">
          <div className="lg:mx-auto lg:rounded-[50px] lg:column-1 lg:w-2 lg:h-[1700px] lg:bg-cyan-lite"></div>
          
          <div className="lg:block">
            <div className="lg:-ml-6 lg:z-20 lg:mt-[120px] lg:rounded-full lg:h-10 lg:w-10 lg:flex  lg:bg-cyan-lite"></div>
            <div className="lg:-ml-6 lg:z-20 lg:mt-[170px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div> 
            <div className="lg:-ml-6 lg:z-20 lg:mt-[160px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div> 
            <div className="lg:-ml-6 lg:z-20 lg:mt-[155px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div> 
            <div className="lg:-ml-6 lg:z-20 lg:mt-[155px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div> 
            <div className="lg:-ml-6 lg:z-20 lg:mt-[155px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div>  
            <div className="lg:-ml-6 lg:z-20 lg:mt-[155px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div>  
            <div className="lg:-ml-6 lg:z-20 lg:mt-[160px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div>  
          </div>
        </div>
        

        <div className="mx-auto gap-9 content-start column-3 w-[90%] lg:w-[475px] lg:h-[100%] mt-10">

          <div className="w-full h-[150px]  bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">NFB Championship</p>
                <p className="text-md">February</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/nfb.png" width={200} height={200} alt="" /></div>
            </div>

            <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">Mora Ventures</p>
                <p className="text-md">June 2024</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/uxpl.png" width={200} height={200} alt="" /></div>
            </div>

            <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">MERCon 2024</p>
                <p className="text-md">August 2024</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/merc.png" width={200} height={200} alt="" /></div>
            </div>

            <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">Annual General Meeting</p>
                <p className="text-md">September 2024</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/uxpl.png" width={200} height={200} alt="" /></div>
            </div>
        </div>
      </div>
      
    </div>
  );
}



export default EventTimelineSection;