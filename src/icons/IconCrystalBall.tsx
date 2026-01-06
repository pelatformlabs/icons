import React from 'react';

interface IconCrystalBallProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCrystalBall: React.FC<IconCrystalBallProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-crystal-ball ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6.73 17.018a8 8 0 1 1 10.54 0" />
    <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2" />
    <path d="M11 7a3 3 0 0 0 -3 3" />
  </svg>
  );
};

export default IconCrystalBall;