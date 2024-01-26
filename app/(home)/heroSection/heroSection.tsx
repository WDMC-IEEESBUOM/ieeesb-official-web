"use client";
import Image from "next/image";
import styles from "./heroSection.module.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const phrases = ["INSPIRED,BY PASSION", "TO,TRANSFORM", "BEYOND,EXCELLENCE"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [phrases.length]);

  const words = phrases[index].split(",");
  return (
    <div className="flex justify-center items-center w-screen h-[550px] overflow-hidden">
      <div className="relative w-full h-full ">
        {/* Outer Circle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[550px] h-full">
          <Image
            className="animate-[spin_10s_linear_infinite]"
            src="/hero/outer_circle.svg"
            alt="Outer Circle"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        {/* Middle Outer Circle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[480px] h-full">
          <Image
            className="animate-[spin_10s_linear_infinite] rotate-180"
            src="/hero/middle_outer_circle.svg"
            alt="Middle Outer Circle"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        {/* Middle Inner Circle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-full">
          <Image
            className="animate-[spin_30s_linear_infinite]"
            src="/hero/middle_inner_circle.svg"
            alt="Middle Inner Circle"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        {/* Inner Circle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[420px] h-full">
          <Image
            className="animate-[spin_30s_linear_infinite] min-h-[400px]"
            src="/hero/inner_circle.svg"
            alt="Inner Circle"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[1400px] h-full">
          <Image
            src="/hero/lines.svg"
            alt="lines"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="absolute top-1/2 transform -translate-y-[40px] w-full h-full">
          <p className={styles.text}>
            {words[0]}
            <br />
            {words[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
