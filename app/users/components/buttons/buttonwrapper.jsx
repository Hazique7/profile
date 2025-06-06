'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import DynamicButton from './buttons';

const ButtonWrapper = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/users/contact');
  };

  return (
    <DynamicButton
      label="Contact"
      onClick={handleClick}
      color="black"
     
    />
  );
};

export default ButtonWrapper;

