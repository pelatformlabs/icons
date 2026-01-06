import React from 'react';

interface IconStormProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStorm: React.FC<IconStormProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-storm ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M5.369 14.236c-1.839 -3.929 -1.561 -7.616 -.704 -11.236" />
    <path d="M18.63 9.76c1.837 3.928 1.561 7.615 .703 11.236" />
  </svg>
  );
};

export default IconStorm;