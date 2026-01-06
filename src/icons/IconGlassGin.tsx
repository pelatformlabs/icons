import React from 'react';

interface IconGlassGinProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGlassGin: React.FC<IconGlassGinProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-glass-gin ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 21h8" />
    <path d="M12 15v6" />
    <path d="M5.5 5a6.5 2 0 1 0 13 0a6.5 2 0 1 0 -13 0" />
    <path d="M5.75 4.5c-.612 .75 -.75 2 -.75 3.5a7 7 0 0 0 14 0c0 -1.5 -.094 -2.75 -.75 -3.5" />
  </svg>
  );
};

export default IconGlassGin;