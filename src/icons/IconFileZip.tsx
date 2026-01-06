import React from 'react';

interface IconFileZipProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileZip: React.FC<IconFileZipProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-zip ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" />
    <path d="M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2" />
    <path d="M11 5l-1 0" />
    <path d="M13 7l-1 0" />
    <path d="M11 9l-1 0" />
    <path d="M13 11l-1 0" />
    <path d="M11 13l-1 0" />
    <path d="M13 15l-1 0" />
  </svg>
  );
};

export default IconFileZip;