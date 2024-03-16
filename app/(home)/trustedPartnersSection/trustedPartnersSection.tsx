"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StrategicPartnerSection = () => {
  const imagePath = './trustedPartnersImages/IFS.png';
  const partnerName = 'visit - '; // Replace with the actual partner name
  const partnerDescription = 'IFS develops and delivers enterprise software for companies around the world who manufacture and distribute goods, build and maintain assets, and manage service-focused operations. Within our single platform, our industry specific products are innately connected to a single data model and use embedded digital innovation so that our customers can be their best when it really matters to their customers – at the Moment of Service. The industry expertise of our people and of our growing ecosystem, together with a commitment to deliver value at every single step, has made IFS a recognized leader and the most recommended supplier in our sector.'; // Replace with the actual descripti
  const websiteLink = 'https://www.ifs.com/';

  useEffect(() => {
    ["chapterinner"].forEach((className) =>
      animateElement(
        `.${className}`,
        { x: 200, opacity: 0, scale: 1 },
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
    start: "left right",
    end: "left center",
    toggleActions: "start pause resume pause",
    scrub: 1,
  });

  return (
    <div className="mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
      <h1 className="chaptertitle my-1 md:text-[40px] text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>OFFICIAL STRATEGIC PARTNER</h1>
      <div className='chapterinner bg-white md:mx-16 mx-7 rounded-[60px] p-10'>
        <div className="grid grid-cols-1 grid-rows md:grid-cols-2 md:grid-rows-1 md:gap-4">
          <div className="flex items-center justify-center py-10 lg:p-12">
            <Link href={websiteLink}>
            <Image
              src={imagePath}
              alt={`IFS Logo`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div style={{ fontFamily: 'Amenti Medium' }} className="flex flex-col items-start w-full space-y-4 md:border-l md:border-gray-300 pl-4 text-justify bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] bg-clip-text text-transparent">
              <p>{partnerDescription}</p>
              <h2 className="text-lg font-semibold mb-2">
                {partnerName}
              <Link href={websiteLink}>
              www.ifs.com
            </Link>
            </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPartnerSection;
