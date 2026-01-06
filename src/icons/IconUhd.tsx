import React from 'react';

interface IconUhdProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUhd: React.FC<IconUhdProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-uhd ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 16v-8" />
    <path d="M10 12h4" />
    <path d="M14 8v8" />
    <path d="M17 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2l-2 0" />
    <path d="M3 8v6a2 2 0 1 0 4 0v-6" />
  </svg>
  );
};

export default IconUhd;