import React from 'react';

interface IconLawnMowerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLawnMower: React.FC<IconLawnMowerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-lawn-mower ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 11h5.38a1 1 0 0 1 .9 .55l.72 1.45h5a1 1 0 0 1 1 1v2" />
    <path d="M3 4h1.13a1 1 0 0 1 1 .86l1.59 11.14" />
    <path d="M17 18h-8" />
    <path d="M9 18a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
    <path d="M21 18a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
  </svg>
  );
};

export default IconLawnMower;