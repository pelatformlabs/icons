import React from 'react';

interface IconManProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMan: React.FC<IconManProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-man ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 16v5" />
    <path d="M14 16v5" />
    <path d="M9 9h6l-1 7h-4l-1 -7" />
    <path d="M5 11c1.333 -1.333 2.667 -2 4 -2" />
    <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" />
    <path d="M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
  );
};

export default IconMan;