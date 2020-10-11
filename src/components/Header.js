import React from "react";
import styles from "./Header.module.css";
import penguin from "../assets/logo-tux.svg";

export default function Header() {
  return (
    <div className={styles.root}>
      <span className={styles.desktop}>
        לגבש אסטרטגיה
      </span>
      <span className={styles.mobile}>
        <img alt="penguin" className={styles.logo} src={penguin} />
      </span>
    </div>
  );
}
