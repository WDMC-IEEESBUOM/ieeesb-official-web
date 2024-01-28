"use client";
import Image from "next/image";
import "../styles/footerStyles.css";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // animateElement( { opacity: 0 }, { scale: 1, opacity: 1 });
    [
      "footerpart01",
      "footerpart02",
      "footerpart03",
      "footerpart04",
      "footerpart05",
      "footerpart06",
    ].forEach((className) =>
      animateElement(
        `.${className}`,
        { x: 200, opacity: 0 },
        { x: 0, scale: 1, opacity: 1 }
      )
    );
    ["footercomp"].forEach((className) =>
      animateElement(
        `.${className}`,
        { x: 200, opacity: 0 },
        { x: 0, scale: 1, opacity: 1 }
      )
    );
  });
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
    end: "bottom bottom",
    toggleActions: "start pause resume pause",
    scrub: 1,
  });
  const handleRedirect = (url: string) => {
    window.open(`https://${url}`, "_blank");
  };
  return (
    <div className=" bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#07060D] w-[100%] md:rounded-t-[70px] rounded-t-[50px] py-5 relative ">
      <div className=" grid justify-center md:mx-16 mx-7">
        <div className=" grid grid-cols-8 gap-2 items-center mt-[70px] ">
          <div  onClick={() =>
              handleRedirect("ieeesbuom.vercel.app")
            } className=   "footercomp  ieeesbuom.vercel.app cursor-pointer bg-white phone:col-span-8 md:col-span-4 flex justify-center h-[108px] rounded-[20px]">
            <div style={{ width: "60%", height: "auto", position: "relative" }}>
              <Image
                src="/IEEE STUDENT B LOGO BLUE.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </div>

          <div
            onClick={() =>
              handleRedirect("web.facebook.com/IEEEUOMSB/?_rdc=1&_rdr")
            }
            className="footerpart02 cursor-pointer bg-white phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px]"
          >
            <Image src="/fbicon.svg" alt="fb" width={60} height={60} />
          </div>
          <div
            onClick={() =>
              handleRedirect(
                "www.linkedin.com/company/ieeeuomsb/?originalSubdomain=lk"
              )
            }
            className="footerpart03 cursor-pointer bg-white phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px] "
          >
            <Image src="/linkedinicon.svg" alt="in" width={60} height={60} />
          </div>
          <div
            onClick={() =>
              handleRedirect("www.youtube.com/channel/UCuhXxJbZMhYYRhDkRcA1n0w")
            }
            className="footerpart04 cursor-pointer bg-white phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px] "
          >
            <Image src="/yticon.svg" alt="yt" width={60} height={60} />
          </div>
          <div
            onClick={() => handleRedirect("www.instagram.com/ieeesbuom/?hl=en")}
            className="footerpart05 cursor-pointer bg-white phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px] "
          >
            <Image src="/instaicon.svg" alt="inst" width={60} height={60} />
          </div>
        </div>
        <div className="footerpart06  bg-white w-full md:h-[168px] rounded-[20px]  mt-[13px] flex justify-center items-center mb-[70px] ">
          <div
            className="footerBottom  md:mx-14 mx-7 mt-8 mb-8 md:text-sm text-xs text-justify bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] bg-clip-text text-transparent"
            style={{ fontFamily: "Amenti Bold" }}
          >
            <ul>
              <li>IEEE Student Branch University of Moratuwa</li>
              <li> © Copyright 2024 IEEE - All rights reserved.</li>
              <li>
                Use of this Web site signifies your agreement to the IEEE Terms
                and Conditions.
              </li>
              <li>
                A not-for-profit organization, IEEE is the world's largest
                technical professional organization dedicated to advancing
                technology for the benefit of humanity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
