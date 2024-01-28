// import { Frame } from "../../components/Frame";
// import FlipCard from "./components/FlipCard";

import FlipCardNewHover from "./components/FlipCardNewHover";
import FlipCardNewNonHover from "./components/FlipCardNewNonHover";


// const card_left = [
//   {
//     id: "1",
//     variant: "hover",
//     front_name: "Senel Ephraims",
//     title: "CHAIRMAN",
//     email: "senel.ephraims@ieee.org",
//     phone: "+94 77 04 10 762",
//     linkedin: "www.linkedin.com/in/senel-ephraims",
//     image: "img/senel.jpg"
//   },
//   {
//     id: "2",
//     variant: "hover",
//     front_name: "Supul Heshan",
//     title: "TREASURER",
//     email: "supulheshan@ieee.org",
//     phone: "+94 71 33 44 150",
//     linkedin: "www.linkedin.com/in/supul-heshan",
//     image: "img/supul.jpg"
//   }
// ];

// const card_middle = [
//   {
//     id: "1",
//     variant: "hover",
//     front_name: "Chathurya Ekanayake",
//     title: "SECRATARY",
//     email: "chathuryaekanayake@ieee.org",
//     phone: "+94 70 25 25 880",
//     linkedin: "www.linkedin.com/in/chathurya-ekanayake",
//     image: "img/chathurya.jpg"
//   },
//   {
//     id: "2",
//     variant: "hover",
//     front_name: "Malithi Abayadeera",
//     title: "ASSISTANT SECRETARY",
//     email: "malithirumalka@gmail.com",
//     phone: "+94 77 65 36 321",
//     linkedin: "www.linkedin.com/in/malithiabayadeera",
//     image: "img/malithi.jpg"
//   },
//   {
//     id: "3",
//     variant: "hover",
//     front_name: "Malinsha Vithanage",
//     title: "CHAPTER & AFFINITY GROUP COORDINATOR",
//     email: "malinshakv@gmail.com",
//     phone: "+94 70 38 29 878",
//     linkedin: "www.linkedin.com/in/malinshavithanage",
//     image: "img/malinsha.jpg"
//   }
// ];

// const card_right = [
//   {
//     id: "1",
//     variant: "hover",
//     front_name: "Yasith Senarath",
//     title: "VICE CHAIRMAN",
//     email: "yasithsenarath@ieee.org",
//     phone: "+94 71 59 60 336",
//     linkedin: "www.linkedin.com/in/yasith-senarath",
//     image: "img/yasith.jpg"
//   },
//   {
//     id: "2",
//     variant: "hover",
//     front_name: "Shehan Liyanage",
//     title: "Webmaster",
//     email: "shehanshanuka99@gmail.com",
//     phone: "+94 70 15 55 080",
//     linkedin: "www.linkedin.com/in/shehan-liyanage",
//     image: "img/shehan.jpg"
//   }
// ];

const TeamsPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white justify-between scroll-smooth" >
      <div className="w-[100%] bg-black opacity-95 rounded-b-[40px] h-[15px]"></div>
      <div className="mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[40px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>Executive Committee</h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Senel Ephraims"
              designation="CHAIRMAN"
              email="senel@sample.com"
              contact="+94 77 04 10 762"
              linkedin="www.linkedin.com/in/senel-ephraims"
              image="img/senel.jpg"
            />
            <FlipCardNewHover
              name="Chathurya Ekanayake"
              designation="SECRATARY"
              email="chathurya@sample.com"
              contact="+94 70 25 25 880"
              linkedin="www.linkedin.com/in/chathurya-ekanayake"
              image="img/chathurya.jpg"
            />
            <FlipCardNewHover
              name="Chathurya Ekanayake"
              designation="SECRATARY"
              email="chathurya@sample.com"
              contact="+94 70 25 25 880"
              linkedin="www.linkedin.com/in/chathurya-ekanayake"
              image="img/chathurya.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewHover
              name="Senel Ephraims"
              designation="CHAIRMAN"
              email="senel@sample.com"
              contact="+94 77 04 10 762"
              linkedin="www.linkedin.com/in/senel-ephraims"
              image="img/senel.jpg"
            />
            <FlipCardNewHover
              name="Chathurya Ekanayake"
              designation="SECRATARY"
              email="chathurya@sample.com"
              contact="+94 70 25 25 880"
              linkedin="www.linkedin.com/in/chathurya-ekanayake"
              image="img/chathurya.jpg"
            />
            <FlipCardNewHover
              name="Chathurya Ekanayake"
              designation="SECRATARY"
              email="chathurya@sample.com"
              contact="+94 70 25 25 880"
              linkedin="www.linkedin.com/in/chathurya-ekanayake"
              image="img/chathurya.jpg"
            />
            <FlipCardNewHover
              name="Chathurya Ekanayake"
              designation="SECRATARY"
              email="chathurya@sample.com"
              contact="+94 70 25 25 880"
              linkedin="www.linkedin.com/in/chathurya-ekanayake"
              image="img/chathurya.jpg"
            />
          </div>
        </div>
      </div>
      <div className="mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="my-1 text-[40px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>Web Developement & Media Committee</h1>
        <div className=' bg-white md:mx-16 mx-7 rounded-[60px] p-10 relative'>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <FlipCardNewHover
              name="Senel Ephraims"
              designation="WEB LEAD"
              email="senel@sample.com"
              contact="+94 77 04 10 762"
              linkedin="www.linkedin.com/in/senel-ephraims"
              image="img/senel.jpg"
            />
            <FlipCardNewHover
              name="Chathurya Ekanayake"
              designation="MEDIA LEAD"
              email="chathurya@sample.com"
              contact="+94 70 25 25 880"
              linkedin="www.linkedin.com/in/chathurya-ekanayake"
              image="img/chathurya.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
            <FlipCardNewNonHover
              name="Senel Ephraims"
              designation="MEMBER"
              image="img/senel.jpg"
            />
            <FlipCardNewNonHover
              name="Senel Ephraims"
              designation="MEMBER"
              image="img/senel.jpg"
            />
            <FlipCardNewNonHover
              name="Senel Ephraims"
              designation="MEMBER"
              image="img/senel.jpg"
            />
            <FlipCardNewNonHover
              name="Senel Ephraims"
              designation="MEMBER"
              image="img/senel.jpg"
            />
          </div>
        </div>
      </div>
    </main >
  )
}

export default TeamsPage;

