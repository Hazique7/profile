'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './nav.css';

export default function Navbar() {
  const [time, setTime] = useState(getCurrentTime());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Optional: lock scroll when mobile nav is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <nav className="nav">
      <div className="left">
        <div className="time">{time}</div>
        <div
          className="burger"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? '✕' : '☰'}
        </div>
      </div>
      <ul className={`navMenu ${menuOpen ? 'show' : ''}`}>
        <li><Link className="navLink" href="/" onClick={handleLinkClick}>Home</Link></li>
        <li className="dot">•</li>
        <li><Link className="navLink" href="/users/about" onClick={handleLinkClick}>About</Link></li>
        <li className="dot">•</li>
        <li><Link className="navLink" href="/users/projects" onClick={handleLinkClick}>Projects</Link></li>
        <li className="dot">•</li>
        <li><Link className="navLink" href="/users/contact" onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
}

