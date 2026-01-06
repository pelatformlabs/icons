import React from 'react';

interface IconWreckingBallProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWreckingBall: React.FC<IconWreckingBallProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-wrecking-ball ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M2 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M11 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M13 19l-9 0" />
    <path d="M4 15l9 0" />
    <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
    <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
    <path d="M19 11v-7l-6 7" />
  </svg>
  );
};

export default IconWreckingBall;