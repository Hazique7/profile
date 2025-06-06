"use client";

import React, { useState } from 'react';
import './page.css';
import Navbar from './users/components/Navbar/Navbar';
import Text from './users/components/Text/Text';
import ImageComponent from './users/components/Image/image';
import ButtonWrapper from './users/components/buttons/buttonwrapper';
import Preloader from './Preloader';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader ? (
        <Preloader onFinish={() => setShowPreloader(false)} />
      ) : (
        <div className = "main">
          <Navbar />
          <Text />
          <ImageComponent />
          <ButtonWrapper />
        </div>
      )}
    </>
  );
}
