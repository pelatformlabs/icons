import React from 'react';

interface IconCircleChevronLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircleChevronLeft: React.FC<IconCircleChevronLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circle-chevron-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 15l-3 -3l3 -3" />
    <path d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0" />
  </svg>
  );
};

export default IconCircleChevronLeft;