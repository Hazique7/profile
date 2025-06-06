// app/users/about/text.jsx
"use client";
import React from 'react';
import styles from './text.module.css'; // Corrected import path for CSS Module

const Text2 = () => {
  return (
    <div className={styles.o}> 
      <div className={styles.wrapper}> 
   
        <h1 className={styles.h1} >FRONT-END DEVELOPER</h1>
        <h1 className={styles.h1} >UI / UX DESIGNER</h1>
        <h1 className={styles.h1} >WRITER</h1>
      </div>
      <div className={styles.pwrap}> 
        <br />
           <p> Hazique Ahmed Khan, a Software Engineering student at the University of Karachi, a front-end developer, ui/ux designer and a fiction writer.<br></br><br></br>
    I have built projects ranging from a C++ e-voting machine to a course enrollment platform using React, HTML, CSS, and JavaScript. I am also skilled in Python, Java, and C, with a creative edge in UI/UX design and Figma prototyping.<br></br> I value clean code, thoughtful design, and collaboration—and I am always eager to learn and build meaningful digital experiences. </p>
      </div>
    </div>
  )
}

export default Text2;
