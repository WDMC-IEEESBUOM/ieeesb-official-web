"use client";
import React, { useRef, useEffect } from "react";
import styles from "@/styles/BlogSection.module.css";
import BlogCard from "./blogCard";
import useFetch from "./useFetch";

function AwardsSectionNew() {
  const brokenArrow: any = (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33938 14.5896C1.44846 11.2534 2.31164 7.54623 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711C16.4538 21.6884 12.7466 22.5515 9.41045 21.6606M15.0001 15.0001V9.0001M15.0001 9.0001H9.00014M15.0001 9.0001L4.99995 19"
        stroke="#FFFFFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (sectionRef.current?.contains(event.target as Node)) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div className={` ${styles.Blog_section} shadow-2xl bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D]`}>
      <h1 className={`${styles.Our_Blogs} bg-gradient-to-r bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent `}>Awards</h1>
      <div className={styles.Blog_Outer}>
        <div className={`${styles.Blog_left} lg:flex lg:align-middle justify-center  `}>
          <h2 className={`${styles.subt} text-3xl font-bold lg:text-left text-center`}>We've Got Clutch Awards</h2>
          <p className={styles.intro}>
            Celebrating the exceptional contributions
            of individuals and teams whose pioneering
            work has reshaped our world. From technical
            breakthroughs to humanitarian efforts, join
            us in honoring those who inspire innovation
            and drive progress in our ever-evolving field.
          </p>
        </div>
        <div className={styles.Blog_right} ref={sectionRef}>
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

export default AwardsSectionNew;