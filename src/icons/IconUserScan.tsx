import React from 'react';

interface IconUserScanProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUserScan: React.FC<IconUserScanProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-user-scan ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
    <path d="M3 7v-2a2 2 0 0 1 2 -2h2" />
    <path d="M3 17v2a2 2 0 0 0 2 2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M17 21h2a2 2 0 0 0 2 -2v-2" />
  </svg>
  );
};

export default IconUserScan;