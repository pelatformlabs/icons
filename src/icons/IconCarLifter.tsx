import React from 'react';

interface IconCarLifterProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCarLifter: React.FC<IconCarLifterProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-car-lifter ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 21l10 -7l-10 -7" />
    <path d="M17 7l-10 7l10 7" />
    <path d="M20 7h-16a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1" />
    <path d="M3 21h18" />
  </svg>
  );
};

export default IconCarLifter;