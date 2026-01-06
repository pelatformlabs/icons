import React from 'react';

interface IconCarCrashProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCarCrash: React.FC<IconCarCrashProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-car-crash ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4" />
    <path d="M14 8v-2" />
    <path d="M19 12h2" />
    <path d="M17.5 15.5l1.5 1.5" />
    <path d="M17.5 8.5l1.5 -1.5" />
  </svg>
  );
};

export default IconCarCrash;