// icon.js
import React from 'react';
import Image from 'next/image';
import './icon.css';

const Icon = ({ containerClass = '', iconClass = '' }) => {
  return (
    <div className={containerClass}>
      <a href="https://www.instagram.com/haziique3.14/" target="_blank" rel="noopener noreferrer">
        <Image src="/insta.svg" alt="Instagram" width={32} height={32} className={iconClass} />
      </a>
      <a href="https://www.facebook.com/haziqueahmed911" target="_blank" rel="noopener noreferrer">
        <Image src="/fb.svg" alt="Facebook" width={32} height={32} className={iconClass} />
      </a>
      <a href="https://www.linkedin.com/in/hazique-ahmed-khaan-9a9aa6271/" target="_blank" rel="noopener noreferrer">
        <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className={iconClass} />
      </a>
      <a href="mailto:haziqueahmedkhan1@gmail.com">
        <Image src="/gmail.svg" alt="Email" width={32} height={32} className={iconClass} />
      </a>
    </div>
  );
};

export default Icon;
