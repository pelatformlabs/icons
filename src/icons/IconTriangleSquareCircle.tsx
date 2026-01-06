import React from 'react';

interface IconTriangleSquareCircleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTriangleSquareCircle: React.FC<IconTriangleSquareCircleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-triangle-square-circle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3l-4 7h8l-4 -7" />
    <path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
  </svg>
  );
};

export default IconTriangleSquareCircle;