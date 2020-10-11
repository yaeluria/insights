import React from 'react';
import styles from './InfoWidget.module.css';
import lightBulb from '../assets/bulb-outline.svg'

export default function InfoWidget(){
    return(
        <div className={styles.root}>
            <img className={styles.icon} src={lightBulb} alt="light bulb"></img>
           <div> התהליך עדיין פתוח לתשובות. המשתתפים יוכלו לראות את התובנות הסופיות רק לאחר שיואשרו על ידי אחד ממנהלי התהליך.</div>
        </div>
    )
}