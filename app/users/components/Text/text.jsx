"use client";

import React, { useEffect, useRef } from "react";
import "./text.css";

const Text = () => {
  const activeIntervals = useRef(new Map());

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const headers = document.querySelectorAll(".scramble");
    const headersArray = Array.from(headers); // cache locally for cleanup

    headersArray.forEach((header) => {
      const originalText = header.dataset.value;

      const startScramble = () => {
        let iteration = 0;

        if (activeIntervals.current.has(header)) {
          clearInterval(activeIntervals.current.get(header));
          activeIntervals.current.delete(header);
        }

        const intervalId = setInterval(() => {
          const scrambled = originalText
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return char;
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

          header.innerText = scrambled;
          iteration += 1 / 3;

          if (iteration >= originalText.length) {
            clearInterval(intervalId);
            header.innerText = originalText;
            activeIntervals.current.delete(header);

            setTimeout(startScramble, 2000);
          }
        }, 30);

        activeIntervals.current.set(header, intervalId);
      };

      setTimeout(startScramble, 1000);
    });

    return () => {
      headersArray.forEach((header) => {
        if (activeIntervals.current.has(header)) {
          clearInterval(activeIntervals.current.get(header));
          activeIntervals.current.delete(header);
        }
      });
    };
  }, []);

  return (
    <div className="text-container">
      <h1 className="scramble" data-value="Hazique">
        Hazique
      </h1>
      <h2
        className="ahmed"
        data-value="Ahmed"
        style={{ backgroundColor: "black", color: "white" }}
      >
        Ahmed
      </h2>
      <h1 className="scramble" data-value="Khaan">
        Khaan
      </h1>
      <h6 className="line">a Software Engineering student </h6>
    </div>
  );
};

export default Text;

