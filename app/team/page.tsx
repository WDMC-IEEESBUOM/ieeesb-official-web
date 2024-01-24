import { Frame } from "../../components/Frame";
import FlipCard from "./components/FlipCard";

import "bootstrap/dist/css/bootstrap.min.css";

const card_left = [
  {
    id: "1",
    variant: "hover",
    front_name: "Senel Ephraims",
    title: "CHAIRMAN",
    email: "senel.ephraims@ieee.org",
    phone: "+94 77 04 10 762",
    linkedin: "www.linkedin.com/in/senel-ephraims",
    image: "img/senel.jpg"
  },
  {
    id: "2",
    variant: "hover",
    front_name: "Supul Heshan",
    title: "TREASURER",
    email: "supulheshan@ieee.org",
    phone: "+94 71 33 44 150",
    linkedin: "www.linkedin.com/in/supul-heshan",
    image: "img/supul.jpg"
  }
];

const card_middle = [
  {
    id: "1",
    variant: "hover",
    front_name: "Chathurya Ekanayake",
    title: "SECRATARY",
    email: "chathuryaekanayake@ieee.org",
    phone: "+94 70 25 25 880",
    linkedin: "www.linkedin.com/in/chathurya-ekanayake",
    image: "img/chathurya.jpg"
  },
  {
    id: "2",
    variant: "hover",
    front_name: "Malithi Abayadeera",
    title: "ASSISTANT SECRETARY",
    email: "malithirumalka@gmail.com",
    phone: "+94 77 65 36 321",
    linkedin: "www.linkedin.com/in/malithiabayadeera",
    image: "img/malithi.jpg"
  },
  {
    id: "3",
    variant: "hover",
    front_name: "Malinsha Vithanage",
    title: "CHAPTER & AFFINITY GROUP COORDINATOR",
    email: "malinshakv@gmail.com",
    phone: "+94 70 38 29 878",
    linkedin: "www.linkedin.com/in/malinshavithanage",
    image: "img/malinsha.jpg"
  }
];

const card_right = [
  {
    id: "1",
    variant: "hover",
    front_name: "Yasith Senarath",
    title: "VICE CHAIRMAN",
    email: "yasithsenarath@ieee.org",
    phone: "+94 71 59 60 336",
    linkedin: "www.linkedin.com/in/yasith-senarath",
    image: "img/yasith.jpg"
  },
  {
    id: "2",
    variant: "hover",
    front_name: "Shehan Liyanage",
    title: "Webmaster",
    email: "shehanshanuka99@gmail.com",
    phone: "+94 70 15 55 080",
    linkedin: "www.linkedin.com/in/shehan-liyanage",
    image: "img/shehan.jpg"
  }
];

const TeamsPage = () => {
  return (
    <div className="bg-[#f6fbff] flex justify-center h-[3500px] w-full relative">

        {/* Team Title */}
        <div className="absolute top-[257px] [font-family:'Inter'] font-bold text-[#6A9DCD] tracking-[3.84px] leading-[109.4px] text-[96px]">
            Teams
        </div>
        
        {/* Executive Committe */}
        <div className="absolute w-full h-[1225px] top-[595px] bg-[#f6fbff]">
          <div className="absolute top-[87px] left-[474px] [font-family:'Inter'] font-bold text-[#6A9DCD] text-main-title text-[54px] text-center tracking-[0] leading-[normal]">
            Executive Committee
          </div>
          {/* 1st Column */}
          <div className="h-screen">
            <div className="row h-100">
              <div className="absolute top-[245px] left-[71px]">
                {card_left.map((cardone) => (
                  <FlipCard key={cardone.id} card={cardone} />
              ))}
              </div>
            </div>
          </div>
          
          {/* 2nd Column */}
          <div className="h-screen">
            <div className="row h-100">
              <div className="absolute top-[245px] left-[525px]">
                {card_middle.map((cardtwo) => (
                  <FlipCard key={cardtwo.id} card={cardtwo} />
              ))}
              </div>
            </div>
          </div>

          {/* 3rd Column */}
          <div className="h-screen">
            <div className="row h-100">
              <div className="absolute top-[245px] left-[979px]">
                {card_right.map((cardthree) => (
                  <FlipCard key={cardthree.id} card={cardthree} />
              ))}
              </div>
            </div>
            </div>
        </div>

        
        {/* Design Committe */}
        <div className="absolute w-full h-[1225px] top-[2241px] bg-[#e7e7e7]">
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

