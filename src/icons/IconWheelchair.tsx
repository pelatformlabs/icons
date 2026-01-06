import React from 'react';

interface IconWheelchairProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWheelchair: React.FC<IconWheelchairProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-wheelchair ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M19 17a3 3 0 0 0 -3 -3h-3.4" />
    <path d="M3 3h1a2 2 0 0 1 2 2v6" />
    <path d="M6 8h11" />
    <path d="M15 8v6" />
  </svg>
  );
};

export default IconWheelchair;