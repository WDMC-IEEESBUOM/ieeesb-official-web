"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Award1 from "./images/1.jpg";
import Award2 from "./images/2.jpg";
import Award3 from "./images/3.jpg";
import Award4 from "./images/4.jpg";
import Award5 from "./images/5.jpg";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div
        className="relative overflow-hidden rounded-3xl bg-white p-8 w-screen"
        style={{
          width: "fit-content",
          height: "fit-content",
          minHeight: "auto",
          padding: "1rem",
        }}
      >
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-700">
          AWARDS
        </h2>
        <div className="grid">
          {/* Description section */}
          <div className="flex flex-col justify-center items-center text-center text-xl text-gray-700 px-8 grid-item col-start-1 row-start-1 col-end-12 row-end-2 lg:col-start-1 row-start-1 col-end-3 row-end-2">
            <h2 className="content-center text-3xl sm:text-2xl lg:text-4xl sm:mr-12 text-center "  style={{ background: 'linear-gradient(96deg, #007D98 9.65%, #00C4EF 94.91%)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text', width:'265px ' }}>We have got clutch awards!</h2>
            <p className="text-base">
              Check out some of our most prestigious accolades that showcase our
              commitment to excellence.
            </p>
          </div>
          <div className="grid-item col-start-1 row-start-3 col-end-3 row-end-12 lg:col-start-3 row-start-1 col-end-12 row-end-12">
            <Carousel autoPlay infiniteLoop centerMode centerSlidePercentage={60}>
              <div>
                <Image src={Award1} alt="image1" width={300} height={300} />
                <p className="legend">Image 1</p>
              </div>
              <div>
                <Image src={Award2} alt="image2" width={300} height={300} />
                <p className="legend">Image 2</p>
              </div>
              <div>
                <Image src={Award3} alt="image3" width={300} height={300} />
                <p className="legend">Image 3</p>
              </div>
              <div>
                <Image src={Award4} alt="image4" width={300} height={300} />
                <p className="legend">Image 4</p>
              </div>
              <div>
                <Image src={Award5} alt="image5" width={300} height={300} />
                <p className="legend">Image 5</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}