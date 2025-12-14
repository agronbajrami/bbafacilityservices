import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg
        className="logo-svg"
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#764ba2" />
            <stop offset="100%" stopColor="#f093fb" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#f093fb" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
        
        {/* Building icon */}
        <g className="logo-icon">
          {/* Main building */}
          <rect x="5" y="20" width="30" height="35" rx="2" fill="url(#gradient1)" />
          {/* Windows */}
          <rect x="10" y="28" width="6" height="6" rx="1" fill="white" opacity="0.9" />
          <rect x="20" y="28" width="6" height="6" rx="1" fill="white" opacity="0.9" />
          <rect x="10" y="38" width="6" height="6" rx="1" fill="white" opacity="0.9" />
          <rect x="20" y="38" width="6" height="6" rx="1" fill="white" opacity="0.9" />
          {/* Door */}
          <rect x="13" y="45" width="10" height="10" rx="1" fill="white" opacity="0.7" />
          
          {/* Second building */}
          <rect x="40" y="15" width="25" height="40" rx="2" fill="url(#gradient2)" />
          {/* Windows */}
          <rect x="45" y="23" width="5" height="5" rx="1" fill="white" opacity="0.9" />
          <rect x="53" y="23" width="5" height="5" rx="1" fill="white" opacity="0.9" />
          <rect x="45" y="32" width="5" height="5" rx="1" fill="white" opacity="0.9" />
          <rect x="53" y="32" width="5" height="5" rx="1" fill="white" opacity="0.9" />
          <rect x="45" y="41" width="5" height="5" rx="1" fill="white" opacity="0.9" />
          <rect x="53" y="41" width="5" height="5" rx="1" fill="white" opacity="0.9" />
          
          {/* Third building */}
          <rect x="70" y="25" width="20" height="30" rx="2" fill="url(#gradient3)" />
          {/* Windows */}
          <rect x="75" y="32" width="4" height="4" rx="0.5" fill="white" opacity="0.9" />
          <rect x="81" y="32" width="4" height="4" rx="0.5" fill="white" opacity="0.9" />
          <rect x="75" y="40" width="4" height="4" rx="0.5" fill="white" opacity="0.9" />
          <rect x="81" y="40" width="4" height="4" rx="0.5" fill="white" opacity="0.9" />
        </g>
        
        {/* Text */}
        <text x="100" y="35" className="logo-text-main" fill="url(#textGradient)">BBA</text>
        <text x="100" y="50" className="logo-text-sub">Facility Services</text>
      </svg>
    </div>
  );
};

export default Logo;

