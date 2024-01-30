"use client"

import { useEffect } from "react";
import FlipCardNewHover from "./components/FlipCardNewHover";
import FlipCardNewNonHover from "./components/FlipCardNewNonHover";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTopButton from "@/components/scrollToTopButton";
gsap.registerPlugin(ScrollTrigger);

const TeamsPage = () => {

  useEffect(() => {
    animateElement('.committee', { opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.committee1', { opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.committee2', { opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.committee3', { opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.committee4', { opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.committee5', { opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.committee6', { opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.committee7', { opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.committee8', { opacity: 0 }, { scale: 1, opacity: 1 });
    animateElement('.committee9', { opacity: 0 }, { scale: 1, opacity: 1 });
  }, []);

  const animateElement = (element: string, from: gsap.TweenVars, to: gsap.TweenVars) => {
    gsap.fromTo(element, {
      ...from
    }, {
      ...to,
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "top center",
        toggleActions: "start pause resume pause",
        scrub: 1,
        // markers: true
      }
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-white justify-between scroll-smooth" >
      <ScrollToTopButton />
      <div className="w-[100%] bg-black opacity-95 rounded-b-[40px] h-[15px]"></div>
      {/* Excom */}
      <div className=" mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="committee my-1 md:text-[40px] text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>Executive Committee</h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Senel Ephraims"
              designation="CHAIRMAN"
              email="senel.ephraims@ieee.org"
              contact="+94 77 04 10 762"
              linkedin="www.linkedin.com/in/senel-ephraims"
              image="/team/senel.jpg"
            />
            <FlipCardNewHover
              name="Yasith Senarath"
              designation="VICE CHAIRMAN"
              email="yasithsenarath@ieee.org"
              contact="+94 71 59 60 336"
              linkedin="www.linkedin.com/in/yasith-senarath"
              image="/team/yasith.jpg"
            />
            <FlipCardNewHover
              name="Chathurya Ekanayake"
              designation="SECRETARY"
              email="chathuryaekanayake@ieee.org"
              contact="+94 70 25 25 880"
              linkedin="www.linkedin.com/in/chathurya-ekanayake"
              image="/team/chathurya.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewHover
              name="Supul Heshan"
              designation="TREASURER"
              email="supulheshan@ieee.org"
              contact="+94 71 33 44 150"
              linkedin="www.linkedin.com/in/supul-heshan"
              image="/team/supul.jpg"
            />
            <FlipCardNewHover
              name="Malithi Abayadeera"
              designation="ASSISTANT SECRETARY"
              email="malithirumalka@gmail.com"
              contact="+94 77 65 36 321"
              linkedin="www.linkedin.com/in/malithiabayadeera"
              image="/team/malithi.jpg"
            />
            <FlipCardNewHover
              name="Shehan Liyanage"
              designation="WEBMASTER"
              email="shehanshanuka99@gmail.com"
              contact="+94 70 15 55 080"
              linkedin="www.linkedin.com/in/shehan-liyanage"
              image="/team/shehan.jpg"
            />
            <FlipCardNewHover
              name="Malinsha Vithanage"
              designation="CHAPTER & AFFINITY GROUP COORDINATOR"
              email="malinshakv@gmail.com"
              contact="+94 70 38 29 878"
              linkedin="www.linkedin.com/in/malinshavithanage"
              image="/team/malinsha.jpg"
            />
          </div>
        </div>
      </div>
      {/* events */}
      <div className="committee1 mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className=" my-1 text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}> Events Committee </h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Sanjula Gathsara"
              designation="COMMITTEE LEAD"
              email="sanjulagathsara@ieee.org"
              contact="+94 77 72 99 792"
              linkedin="www.linkedin.com/in/sanjula-gathsara"
              image="/team/sanjula.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Manusha Dhananjaya"
              designation="MEMBER"
              image="/team/manusha.jpg"
            />
            <FlipCardNewNonHover
              name="Dihan Madusankha"
              designation="MEMBER"
              image="/team/dihan.jpg"
            />

            <FlipCardNewNonHover
              name="Anupama Jayasekara"
              designation="MEMBER"
              image="/team/anupama.jpg"
            />
            <FlipCardNewNonHover
              name="Ishan Hansaka"
              designation="MEMBER"
              image="/team/ishan.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Deshini Bhagya"
              designation="MEMBER"
              image="/team/deshini.jpg"
            />
            <FlipCardNewNonHover
              name="Uvindu Kodikara"
              designation="MEMBER"
              image="/team/uvindu.jpg"
            />
            <FlipCardNewNonHover
              name="Thrishal Shavinda"
              designation="MEMBER"
              image="/team/thrishal.jpg"
            />
            <FlipCardNewNonHover
              name="Mihiruth Sehara"
              designation="MEMBER"
              image="/team/mihiruth.jpg"
            />
          </div>
        </div>
      </div>
      {/* web */}
      <div className="committee2 mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>Web Developement & Media Committee</h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Kalhara JA"
              designation="WEB LEAD"
              email="kalhara.ja@gmail.com"
              contact="+94 71 13 05 808"
              linkedin="www.linkedin.com/in/kalhara-ja/"
              image="/team/kalhara.jpg"
            />
            <FlipCardNewHover
              name="Nadil Gunawardane"
              designation="MEDIA LEAD"
              email="nadilhansith@gmail.com"
              contact="+94 74 08 90 404"
              linkedin="www.linkedin.com/in/nadil-gunawardane-6a6220215"
              image="/team/nadil.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Ruchith Nusara"
              designation="MEMBER"
              image="/team/ruchith.jpg"
            />
            <FlipCardNewNonHover
              name="Chamod Perera"
              designation="MEMBER"
              image="/team/chamod.jpg"
            />
            <FlipCardNewNonHover
              name="Navindu Chathuranga"
              designation="MEMBER"
              image="/team/navindu.jpg"
            />
            <FlipCardNewNonHover
              name="Sahan Dilip"
              designation="MEMBER"
              image="/team/sahan.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">

            <FlipCardNewNonHover
              name="Udana Nimsara"
              designation="MEMBER"
              image="/team/nimsara.jpg"
            />
            <FlipCardNewNonHover
              name="Shyamal De Silva"
              designation="MEMBER"
              image="/team/shyamal.jpg"
            />
            <FlipCardNewNonHover
              name="Lakmina Pramodya"
              designation="MEMBER"
              image="/team/lakmina.jpg"
            />
            <FlipCardNewNonHover
              name="Anuda Kaushika"
              designation="MEMBER"
              image="/team/anuda.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Thinuri Wijesekara"
              designation="MEMBER"
              image="/team/thinuri.jpg"
            />
            <FlipCardNewNonHover
              name="Niruksha Sandeepa"
              designation="MEMBER"
              image="/team/niruksha.jpg"
            />

          </div>
        </div>
      </div>
      {/* logistics */}
      <div className="committee3 mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}> Logistics Management Committee </h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Chamod Bhathiya"
              designation="COMMITTEE LEAD"
              email="bhathiya2001@gmail.com"
              contact="+94 71 63 87 758"
              linkedin="www.linkedin.com/in/chamod-bhathiya-115817253/"
              image="/team/bhathiya.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Lenuka Madhusara"
              designation="MEMBER"
              image="/team/lenuka.jpg"
            />
            <FlipCardNewNonHover
              name="Yasiru Wickramage"
              designation="MEMBER"
              image="/team/yasiru.jpg"
            />
            <FlipCardNewNonHover
              name="Sachin Palihapitiya"
              designation="MEMBER"
              image="/team/sachin.jpg"
            />
            <FlipCardNewNonHover
              name="Avishka Vishmitha"
              designation="MEMBER"
              image="/team/avishka.jpg"
            />

          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Anujaya Vidmal"
              designation="MEMBER"
              image="/team/anujaya.jpg"
            />
            <FlipCardNewNonHover
              name="Raveen Pathirana"
              designation="MEMBER"
              image="/team/raveen.jpg"
            />
            <FlipCardNewNonHover
              name="Heshan Senapriya"
              designation="MEMBER"
              image="/team/heshan.jpg"
            />
            <FlipCardNewNonHover
              name="Pasindu Sankalpa"
              designation="MEMBER"
              image="/team/pasindu.jpg"
            />
          </div>
        </div>
      </div>
      {/* finance */}
      <div className="committee4 mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}> Finance & Industrial Relations Committee </h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Povindu Samarasekara"
              designation="COMMITTEE LEAD"
              email="povinduchanmith@gmail.com"
              contact="+94 70 30 31 782"
              linkedin="www.linkedin.com/in/pcsamarasekara/"
              image="/team/povindu.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Malsha Nayanashan"
              designation="MEMBER"
              image="/team/malsha.jpg"
            />
            <FlipCardNewNonHover
              name="Nadun Nawanjana"
              designation="MEMBER"
              image="/team/nadun.jpg"
            />
            <FlipCardNewNonHover
              name="Luchiru Dilmith"
              designation="MEMBER"
              image="/team/luchiru.jpg"
            />
            <FlipCardNewNonHover
              name="Decon Kelaart"
              designation="MEMBER"
              image="/team/decon.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Demitha Manawadu"
              designation="MEMBER"
              image="/team/demitha.jpg"
            />
            <FlipCardNewNonHover
              name="Heshani Serasinghe"
              designation="MEMBER"
              image="/team/heshani.jpg"
            />
            <FlipCardNewNonHover
              name="Menusha Fernando"
              designation="MEMBER"
              image="/team/menusha.jpg"
            />
          </div>
        </div>
      </div>
      {/* design */}
      <div className="committee5 mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>Design Committee</h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Nivishka Manchanayake"
              designation="COMMITTEE LEAD"
              email="nivishkaabhith@gmail.com"
              contact="+94 70 42 67 365"
              linkedin="www.linkedin.com/in/nivishka-manchanayake-381870240/"
              image="/team/nivishka.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Harindu Hadithya"
              designation="MEMBER"
              image="/team/harindu.jpg"
            />
            <FlipCardNewNonHover
              name="Nipuni Anuradha"
              designation="MEMBER"
              image="/team/nipuni.jpg"
            />
            <FlipCardNewNonHover
              name="Pavan Epa"
              designation="MEMBER"
              image="/team/pavan.jpg"
            />

          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Prabath Bandara"
              designation="MEMBER"
              image="/team/prabath.jpg"
            />
            <FlipCardNewNonHover
              name="Adeepa Kularathna"
              designation="MEMBER"
              image="/team/adeepa.jpg"
            />
            <FlipCardNewNonHover
              name="Garuka Methman"
              designation="MEMBER"
              image="/team/garuka.jpg"
            />
          </div>
        </div>
      </div>
      {/* publicity */}
      <div className="committee6 mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}> Publicity Committee </h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Kavindu Wijegunasekara"
              designation="COMMITTEE LEAD"
              email="kavinduvijegunasekara@gmail.com"
              contact="+94 76 214 94 77"
              linkedin="www.linkedin.com/in/kavindu-wijegunasekara-49729a219"
              image="/team/kavindu.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Ashan Dilsara"
              designation="MEMBER"
              image="/team/ashan.jpg"
            />
            <FlipCardNewNonHover
              name="Sithika Guruge"
              designation="MEMBER"
              image="/team/sithika.jpg"
            />
            <FlipCardNewNonHover
              name="Samuditha Lankadithya"
              designation="MEMBER"
              image="/team/samuditha.jpg"
            />
            <FlipCardNewNonHover
              name="Vihangi Fernando"
              designation="MEMBER"
              image="/team/vihangi.jpg"
            />

          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Teshini Jagoda"
              designation="MEMBER"
              image="/team/teshini.jpg"
            />
            <FlipCardNewNonHover
              name="Thamindu Nirmal"
              designation="MEMBER"
              image="/team/thamindu.jpg"
            />
            <FlipCardNewNonHover
              name="Yasiru Navodya"
              designation="MEMBER"
              image="/team/yasirunawo.jpg"
            />
            <FlipCardNewNonHover
              name="Maheez Thariq"
              designation="MEMBER"
              image="/team/maheez.jpg"
            />
          </div>
        </div>
      </div>
      {/* editorial */}
      <div className="committee7 mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>Editorial Committee</h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Risni Dheerasekara"
              designation="COMMITTEE LEAD"
              email="risni.jeewa@gmail.com"
              contact="+94 70 37 97 074"
              linkedin="www.linkedin.com/in/risni-dheerasekara-8b3b04235"
              image="/team/risni.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Manuli Gavinya"
              designation="MEMBER"
              image="/team/manuli.jpg"
            />
            <FlipCardNewNonHover
              name="Isurika Udari"
              designation="MEMBER"
              image="/team/isurika.jpg"
            />
            <FlipCardNewNonHover
              name="Chami Praveesha"
              designation="MEMBER"
              image="/team/chami.jpg"
            />
            <FlipCardNewNonHover
              name="Kavin Siriwardana"
              designation="MEMBER"
              image="/team/kavin.jpg"
            />

          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Nethulee Nimangee"
              designation="MEMBER"
              image="/team/nethulee.jpg"
            />
            <FlipCardNewNonHover
              name="Thenu Thudewattage"
              designation="MEMBER"
              image="/team/thenu.jpg"
            />
            <FlipCardNewNonHover
              name="Kevin Fernando"
              designation="MEMBER"
              image="/team/kevin.jpg"
            />
          </div>
        </div>
      </div>
      {/* volunteer management */}
      <div className="committee8 mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}> Volunteer Management Committee </h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Pramoth Dilshan"
              designation="COMMITTEE LEAD"
              email="pramothdilshan2001@gmail.com "
              contact="+94 70 29 78 160"
              linkedin="www.linkedin.com/in/pramoth-dilshan-687039267"
              image="/team/pramoth.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Sahan Mandhira"
              designation="MEMBER"
              image="/team/sahanman.jpg"
            />
            <FlipCardNewNonHover
              name="Anuda Wewalage"
              designation="MEMBER"
              image="/team/anudawew.jpg"
            />
            <FlipCardNewNonHover
              name="Hasitha Prasadini"
              designation="MEMBER"
              image="/team/hasitha.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Pramudi Saubhagya"
              designation="MEMBER"
              image="/team/pramudi.jpg"
            />
            <FlipCardNewNonHover
              name="Vindhya Kulasinghe"
              designation="MEMBER"
              image="/team/vindya.jpg"
            />
            <FlipCardNewNonHover
              name="Nimshi Manisha"
              designation="MEMBER"
              image="/team/nimshi.jpg"
            />
          </div>
        </div>
      </div>
      {/* membership */}
      <div className="committee9 mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}> Membership Development Committee </h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Avindi Lakshika"
              designation="COMMITTEE LEAD"
              email="avindilakshika@gmail.com"
              contact="+94 71 21 89 758"
              linkedin="https://www.linkedin.com/"
              image="/team/avindi.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Akindu Induwara"
              designation="MEMBER"
              image="/team/akindu.jpg"
            />
            <FlipCardNewNonHover
              name="Ruwanthi Lakshika"
              designation="MEMBER"
              image="/team/ruwanthi.jpg"
            />
            <FlipCardNewNonHover
              name="Ravindu Dilshan"
              designation="MEMBER"
              image="/team/ravindu.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Salina Sandinu"
              designation="MEMBER"
              image="/team/salina.jpg"
            />
            <FlipCardNewNonHover
              name="Sandali Anuththara"
              designation="MEMBER"
              image="/team/sandali.jpg"
            />
          </div>
        </div>
      </div>

    </main >
  )
}

export default TeamsPage;

