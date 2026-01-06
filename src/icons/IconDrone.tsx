import React from 'react';

interface IconDroneProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDrone: React.FC<IconDroneProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-drone ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 10h4v4h-4l0 -4" />
    <path d="M10 10l-3.5 -3.5" />
    <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
    <path d="M14 10l3.5 -3.5" />
    <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
    <path d="M14 14l3.5 3.5" />
    <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
    <path d="M10 14l-3.5 3.5" />
    <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
  </svg>
  );
};

export default IconDrone;