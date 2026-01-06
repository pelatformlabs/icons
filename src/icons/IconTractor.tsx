import React from 'react';

interface IconTractorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTractor: React.FC<IconTractorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-tractor ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M7 15l0 .01" />
    <path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10.5 17l6.5 0" />
    <path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5" />
    <path d="M18 5h-1a1 1 0 0 0 -1 1v4" />
  </svg>
  );
};

export default IconTractor;