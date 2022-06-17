import React from "react";
import styles from "../../styles/Home.module.css";
import navbarStyles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={navbarStyles.navbar}>
      <div
        className={styles.container}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="#" className={styles.logo}>
          Logo
        </a>
        <div className={navbarStyles.navItems}>
          <a href="#" className={navbarStyles.navLinks}>
            Skills
          </a>
          <a href="#" className={navbarStyles.navLinks}>
            Projects
          </a>
          <a href="#" className={navbarStyles.navLinks}>
            Content
          </a>
          <a href="#" className={navbarStyles.navLinks}>
            About us
          </a>
          <button className={navbarStyles.resumeButton}>Resume</button>
        </div>
      </div>
    </nav>
  );
}
