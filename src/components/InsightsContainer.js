import React from "react";
import InfoWidget from "./InfoWidget";
import Insight from "./Insight";
import styles from "./InsightsContainer.module.css";
import insights from "../data"

export default function InsightsContainer() {
  return (
    <div className={styles.root}>
      <div className={styles.items}>
        <InfoWidget />
        {insights.map((insight, index) => {
          return (
            <Insight
              key={insight.id}
              id={insight.id}
              index={index}
              data={insight.data}
              permissions={insight.permissions}
              statistics={insight.statistics}
            />
          );
        })}
      </div>
    </div>
  );
}
