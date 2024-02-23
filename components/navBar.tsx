"use client";

import styles from "./styles/navBar.module.css";
import Image from "next/image";
import brand from "../public/IEEE STUDENT B LOGO BLUE.png";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
        <div className={styles.brand_container}>
          <Image
            src="/ieeesblogo.png"
            className={styles.brand}
            alt="IEEE Logo"
            width={450}
            height={450}
            quality={100}
            style={{ cursor: "pointer" }}
            onClick={() => handleNavigate("/")}
          />
          <Image
            onClick={() => setCollapsed(!collapsed)}
            className={styles.toggle}
            src="https://img.icons8.com/ios-glyphs/50/ffffff/menu--v3.png"
            alt="menu--v3"
            width={35}
            height={35}
          />
        </div>
        <ul className={styles.nav_container}>
          <li className={styles.nav} onClick={() => handleNavigate("/")}>
            Home
          </li>
          <li className={styles.nav} onClick={() => handleNavigate("/team/")}>
            Team
          </li>
          <li
            className={styles.nav}
            onClick={() => handleNavigate("/newsletter")}
          >
            Newsletter
          </li>
        </ul>
        <ul
          className={`${styles.nav_container_responsive} ${
            collapsed ? styles.collapsed : styles.expanded
          }`}
        >
          <li className={styles.nav} onClick={() => handleNavigate("/")}>
            Home
          </li>
          <li className={styles.nav} onClick={() => handleNavigate("/team/")}>
            Team
          </li>
          <li
            className={styles.nav}
            onClick={() => handleNavigate("/newsletter")}
          >
            Newsletter
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
