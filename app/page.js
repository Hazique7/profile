"use client";

import React, { useState } from 'react';
import './page.css';
import Navbar from './users/components/Navbar/Navbar';
import Text from './users/components/Text/text';
import ImageComponent from './users/components/Image/image';
import ButtonWrapper from './users/components/buttons/buttonwrapper';
import Preloader from './preloader.jsx';

export const dynamic = "force-static";
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
