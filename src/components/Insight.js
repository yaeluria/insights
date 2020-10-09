import React, { useState } from "react";
import styles from "./Insight.module.css";

export default function Insight(props) {
  const { data, permissions, statistics, index } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  //checking if at least one permission exists
  const permissionExists = Object.values(permissions).some((v) => v === true);

  return (
    <div className={styles.container}>
      <span className={styles.index}>{index + 1}</span>
      <div className={styles.textContainer}>
        {permissionExists && (
          <button className={styles.menuButton} onClick={toggleMenu}>
            ...
          </button>
        )}
        <div className={styles.text}>{data}</div>
        <span className={styles.statistics}>{statistics.publishedContributorsCount} משתתפים תומכים בתובנה ({statistics.publishedContributionsPercent}% מהתשובות)</span>
      </div>
    </div>
  );
}
