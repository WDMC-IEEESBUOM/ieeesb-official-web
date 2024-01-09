"use client";

import { Frame } from "../../components/Frame";

const TeamsPage = () => {
  return (
    <div className="bg-[#f6fbff] flex justify-center h-[3500px] relative">

        {/* Team Title */}
        <div className="absolute w-full h-[594px]">
          <div className="absolute w-full h-[594px] top-0 left-0 opacity-[0.38] bg-[url(https://c.animaapp.com/FOBTMREr/img/image-2.png)] bg-cover bg-[100%_100%]">
            <div className="relative w-full h-[594px] bg-[url(https://c.animaapp.com/FOBTMREr/img/rectangle-1.svg)] bg-[100%_100%]">
              <img
                className="h-[593px] top-0 bg-blend-hue absolute w-[1440px] left-[120px]"
                alt="Rectangle"
                src="https://c.animaapp.com/FOBTMREr/img/rectangle-2.svg"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute top-[257px] [font-family:'Inter'] font-bold text-white tracking-[3.84px] leading-[109.4px] text-[96px]">
            Teams
        </div>
        
        <div className="absolute w-full h-[1225px] top-[595px] bg-[#f6fbff]">
          <div className="absolute top-[87px] left-[474px] [font-family:'Inter'] font-bold text-[#6A9DCD] text-main-title text-[54px] text-center tracking-[0] leading-[normal]">
            Executive Committee
          </div>
          <Frame className="!shadow-[0px_4px_4px_#0000000] !left-[71px] !absolute !top-[245px]" property1="default" />
          <Frame className="!shadow-[0px_4px_4px_#0000000] !left-[525px] !absolute !top-[245px]" property1="default" />
          <Frame className="!shadow-[0px_4px_4px_#0000000] !left-[979px] !absolute !top-[245px]" property1="default" />
        </div>

        
        {/* Desing Committe */}
        <div className="absolute w-full h-[1225px] top-[1941px] bg-[#e7e7e7]">
          <div className="absolute top-[87px] left-[474px] [font-family:'Inter',Helvetica] font-bold text-main-title text-[54px] text-center tracking-[0] leading-[normal]">
            Design Committee
          </div>
          <Frame className="!shadow-[0px_4px_4px_#0000000] !left-[72px] !absolute !top-[245px]" property1="default" />
          <Frame className="!shadow-[0px_4px_4px_#0000000] !left-[526px] !absolute !top-[245px]" property1="default" />
          <Frame className="!shadow-[0px_4px_4px_#0000000] !left-[980px] !absolute !top-[245px]" property1="default" />
        </div>
    </div>
  );
}

export default TeamsPage;

