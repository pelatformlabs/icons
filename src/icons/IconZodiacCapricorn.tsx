import React from 'react';

interface IconZodiacCapricornProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconZodiacCapricorn: React.FC<IconZodiacCapricornProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-zodiac-capricorn ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 4a3 3 0 0 1 3 3v9" />
    <path d="M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3" />
    <path d="M13 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </svg>
  );
};

export default IconZodiacCapricorn;