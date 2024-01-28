// "use client";

// import React from "react";
// import { useReducer } from "react";

// interface Props {
//   property1: "variant-2" | "variant-3" | "default";
//   className: any;
// }

// export const Frame = ({ property1, className }: Props): JSX.Element => {
//   const [state, dispatch] = useReducer(reducer, {
//     property1: property1 || "default",
//   });

//   return (
//     <div className={`inline-flex flex-col items-start gap-[32px] h-[850px] relative ${className}`}>
//       <div
//         className={`w-[400px] flex flex-col items-start gap-[10px] p-[32px] overflow-hidden rounded-[24px] bg-white relative ${
//           ["default", "variant-3"].includes(state.property1) ? "grow" : ""
//         } ${["default", "variant-3"].includes(state.property1) ? "flex-1" : ""} ${
//           state.property1 === "variant-2" ? "h-[639px]" : ""
//         }`}
//         onMouseEnter={() => {
//           dispatch("mouse_enter");
//         }}
//         onMouseLeave={() => {
//           dispatch("mouse_leave");
//         }}
//       >
//         <div
//           className={`w-[336px] flex left-[32px] flex-col items-start gap-[8px] ${
//             state.property1 === "variant-3" ? "top-[70px]" : "top-[331px]"
//           } ${state.property1 === "variant-3" ? "relative" : "absolute"}`}
//         >
//           <div className="[font-family:'Inter',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-[22px] text-black font-bold leading-[normal] relative">
//             Chasila Withanage
//           </div>
//           <div
//             className={`[font-family:'Inter',Helvetica] self-stretch tracking-[0] text-[14px] text-black relative font-medium leading-[normal] ${
//               state.property1 === "variant-2" ? "h-[45px]" : "h-[63px]"
//             }`}
//           >
//             Chairman
//           </div>
//           {state.property1 === "variant-2" && (
//             <p className="relative self-stretch h-[170px] [font-family:'Inter',Helvetica] font-normal text-[#4a4848] text-[14px] tracking-[0] leading-[normal]">
//               Meet Chasila Withanage, our dedicated Chairman at IEEE Student Branch, University of Moratuwa. With a
//               passion for technology and a commitment to fostering innovation, Chasila leads our team with enthusiasm
//               and vision. His leadership inspires us to reach new heights in the world of electrical and electronic
//               engineering. Join us on this exciting journey of exploration and discovery under the guidance of Chasila
//               Withanage.
//             </p>
//           )}
//         </div>
//         {["default", "variant-2"].includes(state.property1) && (
//           <img
//             className="w-[284px] object-cover h-[284px] relative"
//             alt="Chasila"
//             src="https://c.animaapp.com/FOBTMREr/img/chasila-1-15@2x.png"
//           />
//         )}
//       </div>
//       <div
//         className={`w-[400px] flex flex-col items-start gap-[10px] p-[32px] overflow-hidden rounded-[24px] bg-white relative ${
//           ["default", "variant-2"].includes(state.property1) ? "grow" : ""
//         } ${["default", "variant-2"].includes(state.property1) ? "flex-1" : ""} ${
//           state.property1 === "variant-3" ? "h-[639px]" : ""
//         }`}
//         onMouseEnter={() => {
//           dispatch("mouse_enter_95");
//         }}
//         onMouseLeave={() => {
//           dispatch("mouse_leave_95");
//         }}
//       >
//         <div
//           className={`w-[336px] flex left-[32px] flex-col items-start gap-[8px] ${
//             state.property1 === "variant-2" ? "top-[70px]" : "top-[331px]"
//           } ${state.property1 === "variant-2" ? "relative" : "absolute"}`}
//         >
//           <div className="[font-family:'Inter',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-[22px] text-black font-bold leading-[normal] relative">
//             Ganishka Widanapathirana
//           </div>
//           <div
//             className={`[font-family:'Inter',Helvetica] self-stretch tracking-[0] text-[14px] text-black relative leading-[normal] ${
//               state.property1 === "variant-3" ? "h-[45px]" : "h-[63px]"
//             } ${state.property1 === "variant-3" ? "font-normal" : "font-medium"}`}
//           >
//             Treasure
//           </div>
//           {state.property1 === "variant-3" && (
//             <p className="relative self-stretch h-[196px] [font-family:'Inter',Helvetica] font-normal text-[#4a4949] text-[14px] tracking-[0] leading-[normal]">
//               Meet Ganishka Widanapathirana, our meticulous Treasurer at IEEE Student Branch, University of Moratuwa.
//               With a keen eye for financial details and a commitment to prudent management, Ganishka ensures the smooth
//               financial operations of our branch. His dedication and financial expertise contribute significantly to the
//               success of our IEEE community. Join us in the pursuit of knowledge and excellence, guided by the financial
//               stewardship of Ganishka Widanapathirana.
//             </p>
//           )}
//         </div>
//         {["default", "variant-3"].includes(state.property1) && (
//           <img
//             className="w-[284px] object-cover h-[284px] relative"
//             alt="Chasila"
//             src="https://c.animaapp.com/FOBTMREr/img/chasila-1-14@2x.png"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// function reducer(state: any, action: any) {
//   if (state.property1 === "default") {
//     switch (action) {
//       case "mouse_enter":
//         return {
//           property1: "variant-2",
//         };

//       case "mouse_enter_95":
//         return {
//           property1: "variant-3",
//         };
//     }
//   }

//   if (state.property1 === "variant-2") {
//     switch (action) {
//       case "mouse_leave":
//         return {
//           property1: "default",
//         };
//     }
//   }

//   if (state.property1 === "variant-3") {
//     switch (action) {
//       case "mouse_leave_95":
//         return {
//           property1: "default",
//         };
//     }
//   }

//   return state;
// }
