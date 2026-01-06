import React from 'react';

interface IconShareOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShareOff: React.FC<IconShareOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-share-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M15.861 15.896a3 3 0 0 0 4.265 4.22m.578 -3.417a3.012 3.012 0 0 0 -1.507 -1.45" />
    <path d="M8.7 10.7l1.336 -.688m2.624 -1.352l2.64 -1.36" />
    <path d="M8.7 13.3l6.6 3.4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconShareOff;