"use client";
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import styles from './page2.module.css';
import Icon from '../components/icons/icon';




const Contact = () => {
  return (
    <div>
      <Navbar/>
      <h1 className={styles.txt}>Contact</h1>
      <Icon containerClass={styles.iconContainer} iconClass={styles.customIcon} />
    </div>
  )
}

export default Contact
