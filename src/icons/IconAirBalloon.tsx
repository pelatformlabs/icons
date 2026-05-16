import React from 'react';

interface IconAirBalloonProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAirBalloon: React.FC<IconAirBalloonProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-air-balloon ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 21v-3h6v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1" />
    <path d="M9 18c-2.347 -2.169 -5 -5.226 -5 -8a8 8 0 1 1 16 0c0 2.774 -2.653 5.831 -5 8" />
    <path d="M5.5 14h13" />
    <path d="M10 14c-1.69 -4.712 -.924 -8.197 0 -11.602" />
    <path d="M14 14c1.469 -3.867 1.19 -7.735 0 -11.602" />
  </svg>
  );
};

export default IconAirBalloon;