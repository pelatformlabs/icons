import React from 'react';

interface IconSwordsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSwords: React.FC<IconSwordsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-swords ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11l5 0" />
    <path d="M5 13l6 6" />
    <path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" />
    <path d="M10 5.5l-2 -2.5h-5v5l3 2.5" />
  </svg>
  );
};

export default IconSwords;