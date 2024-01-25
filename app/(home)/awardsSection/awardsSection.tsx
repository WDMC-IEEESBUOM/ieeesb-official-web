"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image, { StaticImageData } from "next/image";
import Award1 from "./images/Outstanding Student Branch Award 2023.jpg";
import Award2 from "./images/Outstanding chapter award.jpg";
import Award3 from "./images/Best technical chapter.jpg";
import Award4 from "./images/Best Student Branch Project Award 2023.jpg";
import Award5 from "./images/best industry collabarative project.jpg";

const slidesData = [
  {
    image: Award1,
    alt: "Outstanding Student Branch Award",
    title: "Outstanding Student Branch Award",
    description: "IEEE University of Moratuwa Student Branch",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid02ndLwyckiEBfQMT6iKfLigc4BdzBZHdEbgfRf4o5g3DbFWmz2BAk4ybFu5YBvL2pcl&id=100064489578301&mibextid=Nif5oz",
  },
  {
    image: Award2,
    alt: "Outstanding Chapter Award",
    title: "Outstanding Chapter Award",
    description: "University of Moratuwa IEEE EMBS Student Branch Chapter",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid02ctqZhGAmKomY9LUArPd3hed6Cs1Yny65KEBNTDF8m4RxW3CKkFnwnErYbMwniH1bl&id=100064489578301&mibextid=Nif5oz",
  },
  {
    image: Award3,
    alt: "Best Technical Chapter Project Award",
    title: "Best Technical Chapter Project Award",
    description: "Brainstorm 2023",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid02SJrmZs3p2iyaT2u99vefjgX17xsD6Fau3PEtEka8MNfR9Jde72hVJus11v8CRS4dl&id=100064489578301&mibextid=Nif5oz",
  },
  {
    image: Award4,
    alt: "Best Student Branch Project Award",
    title: "Best Student Branch Project Award",
    description: "MoraForesight 1.0",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid0PxTRuxHTw1D5qA5RwwjBmvkeNjkL6bghnTtsZsLDB1gvrpQmoKVLd8Km66eSDYkZl&id=100064489578301&mibextid=Nif5oz",
  },
  {
    image: Award5,
    alt: "Best Industry Collabarative Project",
    title: "Best Industry Collabarative Project Award",
    description: "Rise Up Mora 2023",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid027s35cXfZiufheF2ZpVu69L1Dhuprmux4X2dL5SWQXxHFTqvidfsqyErVTPikZiLql&id=100064489578301&mibextid=Nif5oz",
  },
]

interface CarouselSlideProps {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  link:string;
}
function CarouselSlide({ image, alt, title, description,link }: CarouselSlideProps) {
  return (
    <div className="rounded-lg bg-gray-100 flex flex-col justify-center items-center">
      <Image src={image} alt={alt} width={300} height={300} layout="responsive"/>
      <div className="p-4">
        <h2 className="text-lg text-center mb-4 text-black font-bold">
          {title}
        </h2>
        <h3 className="text-lg text-center mb-4 text-black">
          {description}
        </h3>
        <a href={link} className="absolute inset-0 w-full h-full z-10" target="_blank"></a>
      </div>
    </div>
  );
}
export default class NextJsCarousel extends Component {
  render() {
    return (
      <div
        className="relative overflow-hidden rounded-3xl bg-white p-8 w-screen"
        style={{
          width: "fit-content",
          height: "fit-content",
          maxWidth: "100%",
          minHeight: "auto",
          minWidth: "375px",
          padding: "1rem",
        }}
      >
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-700 pb-1">
          AWARDS
        </h2>
        <div className="grid">

          {/* use this section if you want to add a text section left to the carousel. Then change the grid-item class to grid-item lg:col-start-2 in carousel div */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-1 grid-rows-1 text-gray-700 lg:pr-8 sm:text-center">
            <text className="text-blue-500">
              We have got clutch awards!
              <p className="text-gray-700 pb-10">check out our awards</p>
            </text>
          </div> */}

          <div className="grid-item lg:col-start-1">
            <Carousel
              autoPlay
              infiniteLoop
              centerMode
              centerSlidePercentage={100 / 3}
              showStatus={false}
            >
              {slidesData.map((slide, index) => (
                <CarouselSlide key={index} {...slide} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}