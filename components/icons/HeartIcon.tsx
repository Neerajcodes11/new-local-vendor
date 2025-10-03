
import React from 'react';

interface HeartIconProps {
  filled?: boolean;
}

const HeartIcon: React.FC<HeartIconProps> = ({ filled = false }) => (
  <svg
    className={`w-6 h-6 ${filled ? 'text-red-500' : 'text-gray-600'}`}
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? 'currentColor' : 'none'}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);

export default HeartIcon;
