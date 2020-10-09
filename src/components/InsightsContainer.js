import React from "react";
import Insight from "./Insight";
import styles from "./InsightsContainer.module.css";

// const insights = viewer.process.insights
const insights = [
  {
    id: 12333414,
    data:
      "לחשוב שעוד מעט יוני' רטן בילבו בהתנהלו מאחור, תוך התזת מים, בשביל בוצי ומלא שלוליות. זה היה לאחר שעת התה, והשמיים המטירו מאז הבוקר, מצנפתו דלפה לתוך עיניו ואדרתו היתה ספוגה מים. גם הפוני היה עייף וכשל על אבנים במשעול. האחרים היו זעופים מכדי לדבר או לשיר",
    permissions: {
      delete: false,
      edit: true,
    },
    statistics: {
      publishedContributorsCount: 5,
      publishedContributionsPercent: 22,
    },
  },
  {
    id: 12333413,
    data:
      "אז דרך בארד קשתו ביתר שאת. הדרקון חג בשנית וחזר בטוסו נמוך. בעודו מתקרב עלה הירח מעל לחוף המזרחי והכסיף את כנפיו הגדולות. 'חץ!' לחש איש קשת. 'החץ השחור! שמרתי אותך עד בוא הקץ. מעולם לא הכשלתני ותמיד מצאתיך שנית. מאבי ירשתיך, והוא - מאבותיו. אם אי-פעם חושלת על ידי המלך האמיתי שמתחת להר, צא עכשיו ותהא דרכיך מהירה ובטוחה.' פעם נוספת עט הדרקון, נמוך יותר מתמיד. וכאשר נטה וצלל למטה, הבריקה בטנו הלבנה בנצנוצי יהלומים לאור הירח - פרט למקום אחד, קרחת חשופה בצד שמאל. הקשת הגדולה זמזמה. החץ השחור שירך דרכו מן המיתר הישר לאותה שקערורית, בין רגליו הפרושות של הדרקון. פנימה הכה ונעלם. חודו, קנהו, ונוצותיו .",
    permissions: {
      delete: true,
      edit: true,
    },
    statistics: {
      publishedContributorsCount: 5,
      publishedContributionsPercent: 22,
    },
  },
  {
    id: 12333415,
    data:
      "אני בטוח שהגשם חדר לבגדים היבשים ולשקי המזון,' חשב בילבו, 'ארורה עבודת הפריצה וכל הקשור בה. הלוואי הייתי שוב בבית ליד האח, כשהקומקום על האש מתחיל לשרוק.' לא היתה זו הפעם האחרונה שהוא ייחל לכך...",
    permissions: {
      delete: false,
      edit: true,
    },
    statistics: {
      publishedContributorsCount: 5,
      publishedContributionsPercent: 22,
    },
  },
];

export default function InsightsContainer() {
  return (
    <div className={styles.root}>
      <div className={styles.items}>
        {insights.map((insight, index) => {
          return (
            <Insight
              key={insight.id}
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
