"use client";
import Image from 'next/image';
import RAS from "./images/RAS.png";
import PES from "./images/PES.png";
import WIE from "./images/WIE.png";
import EMB from "./images/EMB.png";
import NPSS from "./images/NPSS.png";
import IES from "./images/IES.png";
import SPS from "./images/SPS.png";
import COMSOC from "./images/comsoc.png";
import PELS from "./images/PELS.png";
import IAS from "./images/IAS.png";
import CS from "./images/CS.png";
import PROCOM from "./images/procom.png";

const chaptersSection = () => {
  const images = [
    RAS, PES, WIE, EMB, NPSS, IES, SPS, COMSOC, PELS, IAS, CS, PROCOM,
  ];

  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-white p-8 w-screen"
      style={{
        width: "fit-content",
        height: "fit-content",
        minHeight: "auto", 
        padding: "1.5rem",
      }}
    >
      <div className="p-4"> 
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-700 pb-5">
          CHAPTERS
        </h2>
   
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
  {images.map((imagePath, index) => (
    <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Image
        src={imagePath}
        alt={`Image from ${imagePath}`}
        width={300}
        height={300}
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

export default chaptersSection;
