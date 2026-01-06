import React from 'react';

interface IconPolygonOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPolygonOff: React.FC<IconPolygonOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-polygon-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M13 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M6.5 9.5l1.546 -1.311" />
    <path d="M14 5.5l3 1.5" />
    <path d="M18.5 10l-1.185 3.318m-1.062 2.972l-.253 .71" />
    <path d="M13.5 17.5l-7 -5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconPolygonOff;