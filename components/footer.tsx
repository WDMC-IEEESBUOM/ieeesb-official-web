"use client";
import Image from "next/image";
import "../styles/footerStyles.css";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { use, useEffect, useRef } from "react";

const Footer = () => {
  gsap.registerPlugin(ScrollSmoother);

  useEffect(() => {
    gsap.fromTo(
      "#smooth-wrapper",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.5, y: -10, ease: "back" }
    );
  });
  return (
    <div id="smooth-wrapper">
      <div >
        <footer
          className="footer FooterColoursGradiant"
        
        >
          <div className="w-full grid justify-center  ">
            <div className="grid grid-cols-8 gap-2 items-center mt-[70px] ">
              <div className="FooterColoursGradiant2 phone:col-span-8 md:col-span-4 flex justify-center h-[108px] rounded-[20px]">
                <div
                  style={{ width: "60%", height: "auto", position: "relative" }}
                >
                  <Image
                    src="/UOM IEEE SB LOGO - WHITE scale downed 1 (1).png"
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </div>
              </div>
              <div className="FooterColoursGradiant2 phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px]">
                <Image src="/fb.svg" alt="fb" width={39} height={39} />
              </div>
              <div className="FooterColoursGradiant2 phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px] ">
                <Image src="/in.svg" alt="in" width={39} height={39} />
              </div>
              <div className="FooterColoursGradiant2 phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px] ">
                <Image src="/yt.svg" alt="yt" width={39} height={39} />
              </div>
              <div className="FooterColoursGradiant2 phone:col-span-2 md:col-span-1 flex justify-center h-[108px] rounded-[20px] ">
                <Image src="/inst.svg" alt="inst" width={39} height={39} />
              </div>
            </div>

            <div className="FooterColoursGradiant2 w-full md:h-[168px] rounded-[20px]  mt-[13px] flex justify-center items-center mb-[70px]">
              <div className="ml-14 mr-14 mt-8 mb-8 text-base">
                <ul>
                  <li>IEEE Student Branch University of Moratuwa</li>
                  <li> © Copyright 2021 IEEE - All rights reserved.</li>
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
        </footer>
      </div>
    </div>
  );
};

export default Footer;

// "use client"

// import * as React from "react";

// export default function Footer() {
//     return (
//         <div className="flex flex-col justify-center items-stretch">
//             <div className="bg-slate-800 flex w-full flex-col items-center px-20 py-12 rounded-[40px_40px_0px_0px] max-md:max-w-full max-md:px-5">
//                 <div className="items-stretch flex w-[888px] max-w-full gap-2.5 max-md:flex-wrap">
//                     <div className="bg-cyan-900 flex grow basis-[0%] flex-col justify-center items-center px-16 py-7 rounded-3xl max-md:px-5">
//                         <img
//                             loading="lazy"
//                             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0f76af10f8db0fffb1794ee2db2ba61a811fc587d5074ef1a312cd362c937e73?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f76af10f8db0fffb1794ee2db2ba61a811fc587d5074ef1a312cd362c937e73?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f76af10f8db0fffb1794ee2db2ba61a811fc587d5074ef1a312cd362c937e73?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f76af10f8db0fffb1794ee2db2ba61a811fc587d5074ef1a312cd362c937e73?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f76af10f8db0fffb1794ee2db2ba61a811fc587d5074ef1a312cd362c937e73?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f76af10f8db0fffb1794ee2db2ba61a811fc587d5074ef1a312cd362c937e73?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f76af10f8db0fffb1794ee2db2ba61a811fc587d5074ef1a312cd362c937e73?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f76af10f8db0fffb1794ee2db2ba61a811fc587d5074ef1a312cd362c937e73?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&"
//                             className="aspect-[4.59] object-contain object-center w-[234px] overflow-hidden max-w-full"
//                         />
//                     </div>
//                     <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c37dd8a66a051ea7880fdac9724116f80b56e095ab70b2336108d0f20e4eb9b?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&"
//                         className="aspect-square object-contain object-center w-[108px] overflow-hidden shrink-0 max-w-full"
//                     />
//                     <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb0c913027edac03c5e33992c175d4fd0422a4450ecc7ac09e17cc7f066acc8?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&"
//                         className="aspect-square object-contain object-center w-[108px] overflow-hidden shrink-0 max-w-full"
//                     />
//                     <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfba7c652f39c0ae0836343f89730a015c848aaf6e23f53a6bab0141191c2b2a?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&"
//                         className="aspect-square object-contain object-center w-[108px] overflow-hidden shrink-0 max-w-full"
//                     />
//                     <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbded5e5947346c80b69ea4a94817e420d95922d868ef514dc7c27e45f78539f?apiKey=39dfc3b978ae45f4b85a273d82dcb99e&"
//                         className="aspect-square object-contain object-center w-[108px] overflow-hidden shrink-0 max-w-full"
//                     />
//                 </div>
//                 <span className="text-gray-100 text-sm font-semibold bg-cyan-900 w-[888px] max-w-full justify-center items-stretch mt-3.5 mb-5 px-14 py-9 rounded-3xl max-md:max-w-full max-md:px-5">
//                     IEEE Student Branch University of Moratuwa
//                     <br />© Copyright 2021 IEEE - All rights reserved.
//                     <br />
//                     Use of this Web site signifies your agreement to the IEEE Terms and
//                     Conditions.
//                     <br />A not-for-profit organization, IEEE is the worlds largest
//                     technical professional organization dedicated to advancing technology
//                     for the benefit of humanity.
//                 </span>
//             </div>
//         </div>
//     );
// }
