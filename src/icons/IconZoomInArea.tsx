import React from 'react';

interface IconZoomInAreaProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconZoomInArea: React.FC<IconZoomInAreaProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-zoom-in-area ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 13v4" />
    <path d="M13 15h4" />
    <path d="M10 15a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M22 22l-3 -3" />
    <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
    <path d="M3 11v-1" />
    <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
    <path d="M10 3h1" />
    <path d="M15 3h1a2 2 0 0 1 2 2v1" />
  </svg>
  );
};

export default IconZoomInArea;