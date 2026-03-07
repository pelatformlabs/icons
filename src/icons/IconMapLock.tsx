import React from 'react';

interface IconMapLockProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMapLock: React.FC<IconMapLockProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-map-lock ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path d="M13.004 21.216a2 2 0 0 1 -2.417 -.316l-4.244 -4.243a8 8 0 0 1 11.314 -11.314a7.93 7.93 0 0 1 2.343 5.657" />
    <path d="M17 19a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-2" />
    <path d="M18 18v-1.5a1.5 1.5 0 1 1 3 0v1.5" />
  </svg>
  );
};

export default IconMapLock;