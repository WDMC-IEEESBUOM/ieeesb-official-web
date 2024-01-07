import styles from "./styles/navBar.module.css";
import Image from "next/image";
import brand from "../public/IEEE_logo.png";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.brand_container}>
        <Image
          src={brand}
          className={styles.brand}
          alt="IEEE Logo"
          width={400}
          height={400}
          quality={100}
        />
      </span>
      <ul className={styles.nav_container}>
        <li className={styles.nav}>Home</li>
        <li className={styles.nav}>Team</li>
        <li className={styles.nav}>Register</li>
      </ul>
    </div>
  );
};

export default NavBar;
