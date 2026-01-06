import React from 'react';

interface IconRouteSquare2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRouteSquare2: React.FC<IconRouteSquare2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-route-square-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
    <path d="M3 17h4v4h-4l0 -4" />
    <path d="M17 3h4v4h-4l0 -4" />
  </svg>
  );
};

export default IconRouteSquare2;