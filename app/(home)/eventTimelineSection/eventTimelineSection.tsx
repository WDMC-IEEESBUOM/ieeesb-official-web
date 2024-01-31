"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const EventTimelineSection = () => {
  const animateElement = (
    selector: string,
    from: gsap.TweenVars,
    to: gsap.TweenVars
  ) => {
    const element = document.querySelector(selector);
    gsap.fromTo(
      element,
      { ...from },
      {
        ...to,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: getScrollTrigger(selector),
      }
    );
  };
  const getScrollTrigger = (trigger: string) => ({
    trigger,
    start: "top bottom",
    end: "center center",
    toggleActions: "start pause resume pause",
    scrub: 1,
  });
  //add animation to the event timeline section's event selecters
  useEffect(() => {
    animateElement(
      ".eventtitle",
      { scale: 0.2, opacity: 0 },
      { scale: 1, opacity: 1 }
    );
    gsap.fromTo(
      document.querySelectorAll(".event1"),
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".event1",
          start: "top bottom",
          end: "center center",
          toggleActions: "start start start start",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      document.querySelectorAll(".event2"),
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".event2",
          start: "top bottom",
          end: "center center",
          toggleActions: "start restart restart restart",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      document.querySelectorAll(".event3"),
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".event3",
          start: "top bottom",
          end: "center center",
          toggleActions: "start restart restart restart",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      document.querySelectorAll(".event4"),
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".event4",
          start: "top bottom",
          end: "center center",
          toggleActions: "start restart restart restart",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      document.querySelectorAll(".event5"),
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".event5",
          start: "top bottom",
          end: "center center",
          toggleActions: "start restart restart restart",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      document.querySelectorAll(".event6"),
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".event6",
          start: "top bottom",
          end: "center center",
          toggleActions: "start restart restart restart",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      document.querySelectorAll(".event7"),
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".event7",
          start: "top bottom",
          end: "center center",
          toggleActions: "start restart restart restart",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      document.querySelectorAll(".event8"),
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".event8",
          start: "top bottom",
          end: "center center",
          toggleActions: "start restart restart restart",
          scrub: 1,
        },
      }
    );
  });

  return (
    <div className="mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative">
      <h1
        className="eventtitle text-[40px] my-5 text-center bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent "
        style={{ fontFamily: "Amenti Bold" }}
      >
        EVENTS
      </h1>
      <div className="flex bg-white rounded-[60px] md:mx-16 mx-7 justify-center mb-10 py-10">
        <div className="content-center column-3">
          <div className="event1 h-[80px] flex rounded-[20px] md:mx-10 mx-5 lg:px-20 md:px-5 px-2 mt-[10px] mb-[120px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] justify-center">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p
                  className="lg:text-lg md:text-[12px] text-[10px] text-white"
                  style={{ fontFamily: "Amenti Medium" }}
                >
                  IEEEXtreme 23
                </p>
                <p
                  className="lg:text-sm md:text-[10px] text-[8px] text-white"
                  style={{ fontFamily: "Amenti Regular" }}
                >
                  - November 2023 -
                </p>
              </div>
            </div>
          </div>
          <div className="event3 h-[80px] flex rounded-[20px] md:mx-10 mx-5 lg:px-20 md:px-5 px-2 mb-[120px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] justify-center">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p
                  className="lg:text-lg md:text-[12px] text-[10px] text-white"
                  style={{ fontFamily: "Amenti Medium" }}
                >
                  IEEE Open Week 2024
                </p>
                <p
                  className="lg:text-sm md:text-[10px] text-[8px] text-white"
                  style={{ fontFamily: "Amenti Regular" }}
                >
                  - January 2024 -
                </p>
              </div>
            </div>
          </div>
          <div className="event5 h-[80px] flex rounded-[20px] md:mx-10 mx-5 lg:px-20 md:px-5 px-2 mb-[120px]  bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] justify-center">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p
                  className="lg:text-lg md:text-[12px] text-[10px] text-white"
                  style={{ fontFamily: "Amenti Medium" }}
                >
                  Mora UXPlore 2.0
                </p>
                <p
                  className="lg:text-sm md:text-[10px] text-[8px] text-white"
                  style={{ fontFamily: "Amenti Regular" }}
                >
                  - April 2024 -
                </p>
              </div>
            </div>
          </div>
          <div className="event7 h-[80px] flex rounded-[20px] md:mx-10 mx-5 lg:px-20 md:px-5 px-2 my-[10px] mb-[80px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] justify-center">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p
                  className="lg:text-lg md:text-[12px] text-[10px] text-white"
                  style={{ fontFamily: "Amenti Medium" }}
                >
                  MERCon 2024
                </p>
                <p
                  className="lg:text-sm md:text-[10px] text-[8px] text-white"
                  style={{ fontFamily: "Amenti Regular" }}
                >
                  - August 2024 -
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="event1 w-10 relative h-[100px] flex items-center justify-center">
            <div className="rounded-t-[50px] w-2 h-[100px] bg-[#0E559D] absolute"></div>
            <div className="rounded-full h-8 w-8 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] absolute "></div>
          </div>
          <div className="event2 w-10 relative h-[100px] flex items-center justify-center">
            <div className="w-2 h-[100px] bg-[#0E559D] absolute"></div>
            <div className="rounded-full h-8 w-8 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] absolute "></div>
          </div>
          <div className="event3 w-10 relative h-[100px] flex items-center justify-center">
            <div className="w-2 h-[100px] bg-[#0E559D] absolute"></div>
            <div className="rounded-full h-8 w-8 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] absolute "></div>
          </div>
          <div className="event4 w-10 relative h-[100px] flex items-center justify-center">
            <div className="w-2 h-[100px] bg-[#0E559D] absolute"></div>
            <div className="rounded-full h-8 w-8 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] absolute "></div>
          </div>
          <div className="event5 w-10 relative h-[100px] flex items-center justify-center">
            <div className="w-2 h-[100px] bg-[#0E559D] absolute"></div>
            <div className="rounded-full h-8 w-8 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] absolute "></div>
          </div>
          <div className="event6 w-10 relative h-[100px] flex items-center justify-center">
            <div className="w-2 h-[100px] bg-[#0E559D] absolute"></div>
            <div className="rounded-full h-8 w-8 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] absolute "></div>
          </div>
          <div className="event7 w-10 relative h-[100px] flex items-center justify-center">
            <div className="w-2 h-[100px] bg-[#0E559D] absolute"></div>
            <div className="rounded-full h-8 w-8 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] absolute "></div>
          </div>
          <div className="event8 w-10 relative h-[100px] flex items-center justify-center">
            <div className="w-2 h-[100px] bg-[#0E559D] absolute"></div>
            <div className="rounded-full h-8 w-8 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] absolute "></div>
          </div>
        </div>
        <div className="content-center column-3">
          <div className="event2 h-[80px] mt-[110px] flex rounded-[20px] md:mx-10 mx-5 lg:px-20 md:px-5 px-2 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] justify-center">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p
                  className="lg:text-lg md:text-[12px] text-[10px] text-white"
                  style={{ fontFamily: "Amenti Medium" }}
                >
                  JamborIEEE
                </p>
                <p
                  className="lg:text-sm md:text-[10px] text-[8px] text-white"
                  style={{ fontFamily: "Amenti Regular" }}
                >
                  - December 2023 -
                </p>
              </div>
            </div>
          </div>
          <div className="event4 h-[80px] mt-[120px] flex rounded-[20px] md:mx-10 mx-5 lg:px-20 md:px-5 px-2 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] justify-center">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p
                  className="lg:text-lg md:text-[12px] text-[10px] text-white"
                  style={{ fontFamily: "Amenti Medium" }}
                >
                  NFB Championship
                </p>
                <p
                  className="lg:text-sm md:text-[10px] text-[8px] text-white"
                  style={{ fontFamily: "Amenti Regular" }}
                >
                  - March 2024 -
                </p>
              </div>
            </div>
          </div>
          <div className="event6 h-[80px] mt-[120px] flex rounded-[20px] md:mx-10 mx-5 lg:px-20 md:px-5 px-2 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] justify-center">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p
                  className="lg:text-lg md:text-[12px] text-[10px] text-white"
                  style={{ fontFamily: "Amenti Medium" }}
                >
                  MoraForesight 2.0
                </p>
                <p
                  className="lg:text-sm md:text-[10px] text-[8px] text-white"
                  style={{ fontFamily: "Amenti Regular" }}
                >
                  - January 2024 -
                </p>
              </div>
            </div>
          </div>
          <div className="event8 h-[80px] mt-[120px] flex rounded-[20px] md:mx-10 mx-5 lg:px-20 md:px-5 px-2 bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] justify-center">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p
                  className="lg:text-lg md:text-[12px] text-[10px] text-white"
                  style={{ fontFamily: "Amenti Medium" }}
                >
                  Rise Up Mora 24
                </p>
                <p
                  className="lg:text-sm md:text-[10px] text-[8px] text-white"
                  style={{ fontFamily: "Amenti Regular" }}
                >
                  - August 2024 -
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimelineSection;
