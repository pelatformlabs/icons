import React from 'react';

interface IconCirclesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircles: React.FC<IconCirclesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circles ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M2.5 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M13.5 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  </svg>
  );
};

export default IconCircles;