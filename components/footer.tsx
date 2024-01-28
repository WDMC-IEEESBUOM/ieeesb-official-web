"use client";
import Image from "next/image";
import "../styles/footerStyles.css";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  return (
    <div className="footerouter bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#07060D] w-screen md:rounded-t-[70px] rounded-t-[50px] py-5 relative ">
      <div className="grid justify-center md:mx-16 mx-7">
        <div className="grid grid-cols-8 gap-2 items-center mt-[70px] ">
          <div className="bg-white phone:col-span-8 md:col-span-4 flex justify-center h-[108px] rounded-[20px]">
            <div style={{ width: "60%", height: "auto", position: "relative" }}>
              <Image
                src="/IEEE STUDENT B LOGO BLUE.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </div>
          <div className=" bg-white phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px]">
            <Image src="/fbicon.svg" alt="fb" width={60} height={60} />
          </div>
          <div className="bg-white phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px] ">
            <Image src="/linkedinicon.svg" alt="in" width={60} height={60} />
          </div>
          <div className="bg-white phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px] ">
            <Image src="/yticon.svg" alt="yt" width={60} height={60} />
          </div>
          <div className="bg-white phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px] ">
            <Image src="/instaicon.svg" alt="inst" width={60} height={60} />
          </div>
        </div>
        <div className="bg-white w-full md:h-[168px] rounded-[20px]  mt-[13px] flex justify-center items-center mb-[70px] ">
          <div className="md:mx-14 mx-7 mt-8 mb-8 md:text-sm text-xs text-justify bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>
            <ul>
              <li>IEEE Student Branch University of Moratuwa</li>
              <li> © Copyright 2024 IEEE - All rights reserved.</li>
              <li>
                Use of this Web site signifies your agreement to the IEEE
                Terms and Conditions.
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