import React from 'react';

interface IconRouteScanProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRouteScan: React.FC<IconRouteScanProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-route-scan ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 7v-2a2 2 0 0 1 2 -2h2" />
    <path d="M3 17v2a2 2 0 0 0 2 2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M17 21h2a2 2 0 0 0 2 -2v-2" />
    <path d="M7 12v-3h3" />
    <path d="M14 9h3v3" />
    <path d="M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172" />
    <path d="M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172" />
  </svg>
  );
};

export default IconRouteScan;