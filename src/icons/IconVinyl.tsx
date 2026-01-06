import React from 'react';

interface IconVinylProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconVinyl: React.FC<IconVinylProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-vinyl ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 3.937a9 9 0 1 0 5 8.063" />
    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M19 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M20 4l-3.5 10l-2.5 2" />
  </svg>
  );
};

export default IconVinyl;