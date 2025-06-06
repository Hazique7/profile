"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import styles from "./projects.module.css";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.title}>PROJECTS</h1>

        {/* 👇 order of the four cards matters – keep them like this */}
        <div className={styles.grid}>
          <div className={styles.item}>
            <span className="initial-text">JAVASCRIPT</span>
            <div className={styles.itemContent}>
              <Image
                src="https://worldofweirdthings.com/wp-content/uploads/evoting_1200.jpg"
                alt="Digital voting system"
                width={600}
                height={400}
              />
              <p className={styles.itemDescription}>Digital voting System</p>
            </div>
          </div>

          <div className={styles.item}>
            <span className="initial-text">C++</span>
            <div className={styles.itemContent}>
              <Image
                src="https://th.bing.com/th/id/OIP.LzlGp2-rX5vUiPLMNmnUjgHaEK?pid=ImgDet&w=1000&h=563&rs=1"
                alt="Digital attendance system"
                width={600}
                height={400}
              />
              <p className={styles.itemDescription}>Digital Attendance System</p>
            </div>
          </div>

          <div className={styles.item}>
            <span className="initial-text">UI/UX</span>
            <div className={styles.itemContent}>
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D22AQEN6-ary0ghVg/feedshare-shrink_2048_1536/B4DZbiz_GxG0As-/0/1747562001434?e=1751500800&v=beta&t=sj71RS27aw3zBAcgJgbQPuJUrLZg7LH5T1iRR7mgdl0"
                alt="UFONE app redesign"
                width={600}
                height={400}
              />
              <p className={styles.itemDescription}>UFONE APP REDESIGN</p>
            </div>
          </div>

          <div className={styles.item}>
            <span className="initial-text">UI/UX</span>
            <div className={styles.itemContent}>
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D22AQHXHE0n4w3a1w/feedshare-shrink_2048_1536/B4DZaQfwrzG8Aw-/0/1746180968234?e=1751500800&v=beta&t=1vfYudfwj6_GKGorXZod4wWnUKYQKt00zdhuGn3ezYs"
                alt="Airline business simulation game"
                width={600}
                height={400}
              />
              <p className={styles.itemDescription}>AIRLINE BUSINESS SIMULATION GAME</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
