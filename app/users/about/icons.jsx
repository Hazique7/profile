// app/users/about/icons.jsx
"use client";
import React from 'react';
import Image from 'next/image';
import styles from './icons2.module.css'; // Corrected import path for CSS Module

const Icons2 = () => { // Renamed from Icons to Icons2 for clarity
  return (
  
    <div className={styles['wrapper-icon']}> {/* Use module class */}
      <a className={styles.aa} href="https://www.instagram.com/haziique3.14/" target="_blank" rel="noopener noreferrer">
        <Image src="/dev.png" alt="Developer Icon" width={100} height={100} className={styles['social-icon']} /> {/* Also apply module class here if needed */}
      </a>
      <a className={styles.aa} href="https://www.instagram.com/haziique3.14/" target="_blank" rel="noopener noreferrer">
        <Image src="/writer.png" alt="Writer Icon" width={100} height={100} className={styles['social-icon']} />
      </a>
      <a className={styles.aa} href="https://www.instagram.com/haziique3.14/" target="_blank" rel="noopener noreferrer">
        <Image src="/ui.png" alt="UI Icon" width={100} height={100} className={styles['social-icon']} />
      </a>
    </div>
    
  );
};

export default Icons2;