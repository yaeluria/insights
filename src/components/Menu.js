import React, { useState, useContext } from "react";
import EditContext from "../editContext";
import styles from "./Menu.module.css";

export default function Menu(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [edit, setEdit] = useContext(EditContext);
  const triggerEdit = () => {
    toggleMenu();
    setEdit(!edit);
  };
  const deleteInsight = id => {
      //some function to delete this insight from the database
      console.log(id);
  }
  return (
    <div className={styles.container}>
      <span className={styles.end}>
        <button
          aria-label={menuOpen ? "open menu" : "close menu"}
          className={styles.menuButton}
          onClick={toggleMenu}
        >
          ...
        </button>
      </span>
      {menuOpen && (
        <div className={styles.menu}>
          {props.permissions.delete && (
            <button className={styles.option} onClick={()=>deleteInsight(props.id)}>מחיקה</button>
          )}
          {props.permissions.edit && (
            <button className={styles.option} onClick={triggerEdit}>
              עריכה
            </button>
          )}
        </div>
      )}
    </div>
  );
}
