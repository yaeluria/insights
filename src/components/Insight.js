import React, { useState, useRef, useEffect } from "react";
import styles from "./Insight.module.css";
import Menu from "./Menu";
import EditContext from "../editContext";
import { Link } from "react-router-dom";

export default function Insight(props) {
  const { data, permissions, statistics, index, id } = props;
  const [edit, setEdit] = useState(false);
  const value = [edit, setEdit];
  const textRef = useRef(null);
  //checking if at least one permission exists
  const permissionExists = Object.values(permissions).some((v) => v === true);
  const [newData, setNewData] = useState();
  const saveEdited = () => {
    const currentText = textRef.current.innerText;
    if (currentText) {
      if (currentText !== data) {
        setNewData(currentText);
      }
      setEdit(false);
    }
  };
  useEffect(() => {
      //update data for insight in database - (viewer.process.insights.filter(insight => insight.id === id)).updateData(newData);
      if (newData){
        console.log(newData, id);
        setNewData();
      }
  }, [newData, id]);

  return (
    <div className={styles.container}>
      <span className={styles.index}>{index + 1}</span>
      <EditContext.Provider value={value}>
        {edit ? (
          <div className={styles.textContainerEdit}>
            <div
              contentEditable={true}
              suppressContentEditableWarning={true}
              ref={textRef}
              className={`${styles.editable} ${styles.text}`}
            >
              {data}
            </div>
            <span className={styles.buttons}>
              <button onClick={() => setEdit(false)} className={`${styles.button} ${styles.fontLarge}`}>
                ביטול
              </button>
              <button
                className={`${styles.button} ${styles.fontLarge}`}
                id={styles.lastButton}
                onClick={saveEdited}
              >
                שמירה
              </button>
            </span>
          </div>
        ) : (
          <div className={styles.textContainer}>
            {permissionExists && <Menu permissions={permissions} id={id} />}
            <Link to={`/insights/${id}`}>
              <div className={styles.text}>{data}</div>
              <div className={styles.statistics}>
                {statistics.publishedContributorsCount} משתתפים תומכים בתובנה (
                {statistics.publishedContributionsPercent}% מהתשובות)
              </div>
            </Link>
          </div>
        )}
      </EditContext.Provider>
    </div>
  );
}
