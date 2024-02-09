"use client"

import styles from "./styles/navBar.module.css";
import Image from "next/image";
import brand from "../public/IEEE STUDENT B LOGO BLUE.png";
import { useRouter } from "next/navigation";

const NavBar = () => {

  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };


  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
        <span className={styles.brand_container}>
          <Image
            src='/IEEESTUDENTBLOGOBLUE.png/'
            className={styles.brand}
            alt="IEEE Logo"
            width={450}
            height={450}
            quality={100}
            style={{cursor: 'pointer'}}
            onClick={() => handleNavigate('/')}
          />
        </span>
        <ul className={styles.nav_container}>
          <li className={styles.nav} onClick={() => handleNavigate('/')}>Home</li>
          <li className={styles.nav} onClick={() => handleNavigate('/team/')}>Team</li>
          {/* <li className={styles.nav} onClick={() => handleNavigate('/register/')}>Register</li> */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
