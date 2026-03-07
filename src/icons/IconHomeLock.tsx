import React from 'react';

interface IconHomeLockProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHomeLock: React.FC<IconHomeLockProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-home-lock ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 12h-2l9 -9l8 8" />
    <path d="M5 12v7a2 2 0 0 0 2 2h6" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.688 0 1.294 .347 1.654 .875" />
    <path d="M17 19a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-2" />
    <path d="M18 18v-1.5a1.5 1.5 0 1 1 3 0v1.5" />
  </svg>
  );
};

export default IconHomeLock;