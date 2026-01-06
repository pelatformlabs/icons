import React from 'react';

interface IconConfettiOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconConfettiOff: React.FC<IconConfettiOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-confetti-off ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M4 5h1" />
    <path d="M5 5v1" />
    <path d="M11.5 4l-.5 2" />
    <path d="M18 5h2" />
    <path d="M19 4v2" />
    <path d="M15 9l-1 1" />
    <path d="M18 13l2 -.5" />
    <path d="M18 19h1" />
    <path d="M19 19v1" />
    <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconConfettiOff;