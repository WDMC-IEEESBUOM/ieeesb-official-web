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
          <div className="grid grid-cols-1 lg:grid-cols-1 grid-rows-1 text-gray-700 items-center text-center lg:pr-8">
            <text className="text-blue-500">
            We have got clutch awards!           
            <p className="text-gray-700 pb-10">
            check out our awards
            </p>
            </text>
          
          </div>
          <div className="grid-item lg:col-start-2">
            <Carousel autoPlay infiniteLoop centerMode centerSlidePercentage={60}>
              <div className= "rounded-lg bg-gray-100 flex flex-col justify-center items-center">
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