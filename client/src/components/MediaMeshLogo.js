import React from 'react';

const MediaMeshLogo = ({ width = "200", height = "50", className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 50" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#3f51b5", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#2196f3", stopOpacity:1}} />
        </linearGradient>
      </defs>
      
      {/* Background mesh pattern */}
      <g opacity="0.1">
        <path d="M0 0 L20 0 L20 20 L0 20 Z" fill="url(#logoGradient)" />
        <path d="M0 20 L20 20 L20 40 L0 40 Z" fill="url(#logoGradient)" />
        <path d="M20 10 L40 10 L40 30 L20 30 Z" fill="url(#logoGradient)" />
        <path d="M40 0 L60 0 L60 20 L40 20 Z" fill="url(#logoGradient)" />
        <path d="M40 20 L60 20 L60 40 L40 40 Z" fill="url(#logoGradient)" />
      </g>
      
      {/* Main logo text */}
      <text x="70" y="20" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="url(#logoGradient)">
        Media
      </text>
      <text x="70" y="38" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="url(#logoGradient)">
        Mesh
      </text>
      
      {/* Tech accent - connecting lines */}
      <g stroke="url(#logoGradient)" strokeWidth="2" fill="none" opacity="0.6">
        <line x1="60" y1="15" x2="70" y2="15" />
        <line x1="60" y1="25" x2="70" y2="25" />
        <line x1="60" y1="35" x2="70" y2="35" />
        <circle cx="65" cy="15" r="2" fill="url(#logoGradient)" />
        <circle cx="65" cy="25" r="2" fill="url(#logoGradient)" />
        <circle cx="65" cy="35" r="2" fill="url(#logoGradient)" />
      </g>
      
      {/* Network nodes */}
      <g fill="url(#logoGradient)">
        <circle cx="10" cy="10" r="3" />
        <circle cx="30" cy="20" r="3" />
        <circle cx="50" cy="10" r="3" />
        <circle cx="50" cy="30" r="3" />
        <circle cx="10" cy="30" r="3" />
      </g>
      
      {/* Connecting mesh lines */}
      <g stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.4">
        <line x1="10" y1="10" x2="30" y2="20" />
        <line x1="30" y1="20" x2="50" y2="10" />
        <line x1="50" y1="10" x2="50" y2="30" />
        <line x1="50" y1="30" x2="10" y2="30" />
        <line x1="10" y1="30" x2="10" y2="10" />
        <line x1="30" y1="20" x2="10" y2="30" />
        <line x1="30" y1="20" x2="50" y2="30" />
      </g>
    </svg>
  );
};

export default MediaMeshLogo;