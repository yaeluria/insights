import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar(){
    return(
        <nav className={styles.root}>
          <NavLink exact to="/" activeClassName={styles.active}>רקע</NavLink>
          <NavLink to="/answers" activeClassName={styles.active}>תשובות</NavLink>
          <NavLink to="/insights" activeClassName={styles.active}>תובנות</NavLink> 
          <NavLink to="/decisions" activeClassName={styles.active}>החלטות</NavLink>
        </nav>
    )
}
