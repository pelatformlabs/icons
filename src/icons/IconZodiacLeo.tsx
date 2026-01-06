import React from 'react';

interface IconZodiacLeoProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconZodiacLeo: React.FC<IconZodiacLeoProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-zodiac-leo ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 17a4 4 0 1 0 8 0" />
    <path d="M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M7 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M7 7c0 3 2 5 2 9" />
    <path d="M15 7c0 4 -2 6 -2 10" />
  </svg>
  );
};

export default IconZodiacLeo;