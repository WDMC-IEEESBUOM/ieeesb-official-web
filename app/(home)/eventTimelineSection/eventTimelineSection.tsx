"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const EventTimelineSection = () => {

  //add animation to the event timeline section's event selecters
  useEffect(() => {
    gsap.fromTo(
      document.querySelector('.event1'),
        {scale: 0.2 , opacity: 0},
        {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
            scrollTrigger:{
                trigger: '.event1',
                start: "top bottom",
                end: "center center",
                toggleActions: "start start start start",
                scrub: 1,
            }
        }
    )

  })

  useEffect(() => {
    gsap.fromTo(
      document.querySelector('.event3'),
        {scale: 0.2 , opacity: 0},
        {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
            scrollTrigger:{
                trigger: '.event3',
                start: "top bottom",
                end: "center center",
                toggleActions: "start start start start",
                scrub: 1,
            }
        }
    )

  })

  useEffect(() => {
    gsap.fromTo(
      document.querySelector('.event2'),
        {scale: 0.2 , opacity: 0},
        {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
            scrollTrigger:{
                trigger: '.event-right',
                start: "top bottom",
                end: "center center",
                toggleActions: "start restart restart restart",
                scrub: 1,
            }
        }
    )

  })

  useEffect(() => {
    gsap.fromTo(
      document.querySelector('.event4'),
        {scale: 0.2 , opacity: 0},
        {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
            scrollTrigger:{
                trigger: '.event4',
                start: "top bottom",
                end: "center center",
                toggleActions: "start restart restart restart",
                scrub: 1,
            }
        }
    )

  })

  useEffect(() => {
    gsap.fromTo(
      document.querySelector('.event5'),
        {scale: 0.2 , opacity: 0},
        {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
            scrollTrigger:{
                trigger: '.event5',
                start: "top bottom",
                end: "center center",
                toggleActions: "start restart restart restart",
                scrub: 1,
            }
        }
    )

  })

  useEffect(() => {
    gsap.fromTo(
      document.querySelector('.event6'),
        {scale: 0.2 , opacity: 0},
        {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
            scrollTrigger:{
                trigger: '.event6',
                start: "top bottom",
                end: "center center",
                toggleActions: "start restart restart restart",
                scrub: 1,
            }
        }
    )

  })


  useEffect(() => {
    gsap.fromTo(
      document.querySelector('.event7'),
        {scale: 0.2 , opacity: 0},
        {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
            scrollTrigger:{
                trigger: '.event7',
                start: "top bottom",
                end: "center center",
                toggleActions: "start restart restart restart",
                scrub: 1,
            }
        }
    )

  })

  useEffect(() => {
    gsap.fromTo(
      document.querySelector('.event8'),
        {scale: 0.2 , opacity: 0},
        {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
            scrollTrigger:{
                trigger: '.event8',
                start: "top bottom",
                end: "center center",
                toggleActions: "start restart restart restart",
                scrub: 1,
            }
        }
    )

  })


  return (
    <div className="container rounded-[20px] w-[375px] h-[100%] block bg-midnight lg:w-[100%] lg:h-[100%] lg:rounded-[40px]">

      <p className="block text-[30px] my-5 text-center bg-gradient-to-r from-[#007198] to-[#f1C4EF] text-transparent bg-clip-text lg:text-[60px] lg:my-10">EVENTS</p>

      <div className="container block lg:flex ">
        <div className="mx-auto gap-9 content-start column-3 w-[90%] lg:w-[475px] lg:h-[100%] ">

          <div className="event1 w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:mb-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">IEEE Open Week</p>
              <p className="text-md">January 2024</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/open.png" width={200} height={200} alt="" /></div>
          </div>
          
          <div className="event3 w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraUXplore 2.0</p>
              <p className="text-md">April 2024</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/uxpl.png" width={200} height={200} alt="" /></div>
          </div>

          <div className="event5 w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">MoraForesight 2.0</p>
              <p className="text-md">July 2024</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/foresighy.png" width={200} height={200} alt="" /></div>
          </div>

          <div className="event7 w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
            <div className="w-1/2 grid place-items-center">
              <p className="text-lg font-large">Rise Up Mora 24'</p>
              <p className="text-md">August 2024</p>
              </div>
            <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/rum.png" width={200} height={200} alt="" /></div>
          </div>

        </div>

        <div className="lg:flex">
          <div className="lg:mx-auto lg:rounded-[50px] lg:column-1 lg:w-2 lg:h-[1700px] lg:bg-gradient-to-b from-[#007198] to-[#146dc6]"></div>
          
          <div className="lg:block">
            <div className="lg:event1 lg:-ml-6 lg:z-20 lg:mt-[120px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div>
            <div className="lg:event2 lg:-ml-6 lg:z-20 lg:mt-[170px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div> 
            <div className="lg:event3 lg:-ml-6 lg:z-20 lg:mt-[160px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div> 
            <div className="lg:event4 lg:-ml-6 lg:z-20 lg:mt-[155px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div> 
            <div className="lg:event5 lg:-ml-6 lg:z-20 lg:mt-[155px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div> 
            <div className="lg:event6 lg:-ml-6 lg:z-20 lg:mt-[155px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div>  
            <div className="lg:event7 lg:-ml-6 lg:z-20 lg:mt-[155px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div>  
            <div className="lg:event8 lg:-ml-6 lg:z-20 lg:mt-[160px] lg:rounded-full lg:h-10 lg:w-10 lg:flex lg:bg-cyan-lite"></div>  
          </div>
        </div>
        

        <div className="mx-auto gap-9 content-start column-3 w-[90%] lg:w-[475px] lg:h-[100%] mt-10">

          <div className="event2 w-full h-[150px]  bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">NFB Championship</p>
                <p className="text-md">February</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/nfb.png" width={200} height={200} alt="" /></div>
            </div>

            <div className="event4 w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">Mora Ventures</p>
                <p className="text-md">June 2024</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/uxpl.png" width={200} height={200} alt="" /></div>
            </div>

            <div className="event6 w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
              <div className="w-1/2 grid place-items-center">
                <p className="text-lg font-large">MERCon 2024</p>
                <p className="text-md">August 2024</p>
                </div>
              <div className="w-1/2 grid justify-items-end"><Image className="w-[200px] h-[148px] bg-black rounded-r-[20px] lg:rounded-r-[50px] lg:h-[198px]" src="/images/eventimeline/merc.png" width={200} height={200} alt="" /></div>
            </div>

            <div className="event8 w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-10 flex rounded-[20px] lg:rounded-[50px] lg:h-[200px] lg:my-[200px] lg:w-[90%] lg:mx-5">
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