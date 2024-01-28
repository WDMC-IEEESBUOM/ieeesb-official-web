"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const imagePaths = [
  '/chapterimages/RAS.png',
  '/chapterimages/PES.png',
  '/chapterimages/WIE.png',
  '/chapterimages/EMB.png',
  '/chapterimages/NPSS.png',
  '/chapterimages/IES.png',
  '/chapterimages/SPS.png',
  '/chapterimages/ComSoc.png',
  '/chapterimages/PELS.png',
  '/chapterimages/IAS.png',
  '/chapterimages/CS.png',
  '/chapterimages/ProCom.png',
];

const ChaptersSection = () => {
  const images = imagePaths.map((imagePath) => imagePath);

  useEffect(() => {
    animateElement('.chaptertitle', { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.logos', { scale:0.2, opacity: 0 }, {scale: 1, opacity: 1, duration: 1 });
  });

  const animateElement = (selector: string, from: gsap.TweenVars, to: gsap.TweenVars) => {
    const element = document.querySelectorAll(selector);
    gsap.fromTo(element, { ...from }, { ...to, duration: 15, ease: 'power.in', stagger: 100, scrollTrigger: getScrollTrigger(selector) });
  };

  const getScrollTrigger = (trigger: string) => ({
    trigger,
    start: 'top center',
    end: 'center center',
    toggleActions: 'start pause resume pause',
    scrub: 1,
  });

  return (
    <div className="mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
      <h1 className="chaptertitle my-1 text-[40px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>CHAPTERS</h1>
      <div className='chapterinner bg-white md:mx-16 mx-7 rounded-[60px] p-10'>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-10 gap-6">
          {images.map((imagePath, index) => (
            <div className="logos" key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image
                src={imagePath}
                alt={`Image from ${imagePath}`}
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChaptersSection;
