import React from 'react';

interface IconSquareRoundedPercentageProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSquareRoundedPercentage: React.FC<IconSquareRoundedPercentageProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-square-rounded-percentage ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    <path d="M9 15.075l6 -6" />
    <path d="M9 9.105v.015" />
    <path d="M15 15.12v.015" />
  </svg>
  );
};

export default IconSquareRoundedPercentage;