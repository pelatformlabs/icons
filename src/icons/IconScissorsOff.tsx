import React from 'react';

interface IconScissorsOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconScissorsOff: React.FC<IconScissorsOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-scissors-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4.432 4.442a3 3 0 1 0 4.114 4.146" />
    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M8.6 15.4l3.4 -3.4m2 -2l5 -5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconScissorsOff;